/* eslint-disable no-undef */
import {
  app,
  protocol,
  BrowserWindow,
  ipcMain,
  Tray,
  Menu,
  nativeImage
} from "electron";
import { createProtocol } from "vue-cli-plugin-electron-builder/lib";
const isDevelopment = process.env.NODE_ENV !== "production";

let win;
let serverProcess = null;
let loading;
protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { secure: true, standard: true } }
]);

function createWindow() {
  win = new BrowserWindow({
    width: 1122,
    height: 670,
    resizable: false, // 禁止改变主窗口尺寸,设置过后，win.isMaximized()总是返回false
    show: false, // 一开始是false,loadpage加载完毕的时候为true
    // autoHideMenuBar: true,// 隐藏工具栏
    frame: false, // 关闭window自带的关闭等功能以及工具栏， 无边框窗口是不允许拖动的，可通过设置样式让其可拖动，样式见index.html中
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false // 允许跨域
    }
  });

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    setTimeout(() => {
      // 关闭loadpage的时候，将win, show true
      loading.hide();
      loading.close();
      win.show();
      win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    }, 5000);
    // 开启渲染进程中的调试模式 if (!process.env.IS_TEST)
    // win.webContents.openDevTools() // 打开调试模式
    win.webContents.closeDevTools(); // 关闭调试模式
  } else {
    setTimeout(() => {
      loading.hide();
      loading.close();
      win.show();
      createProtocol("app");
      win.loadURL("app://./index.html");
    }, 5000);
    win.webContents.closeDevTools(); // 关闭调试模式
  }

  win.on("closed", () => {
    win = null;
    app.quit();
  });

  win.on("close", function(_event) {
    // ToDo 关闭前差一个弹窗，询问是否退出程序 *************；
    stopServer(); // 停止后台服务
  });
}

function showLoading(callback) {
  loading = new BrowserWindow({
    show: false,
    frame: false,
    width: 360,
    height: 360,
    resizable: false
  });
  loading.once("show", callback);
  loading.loadURL(`file://${__static}/loadpage.html`); // 将loadpage作为加载页面，该页面存在项目的public文件夹下
  loading.show();
}

function initApp() {
  showLoading(createWindow);
}

// 窗口 最小化
ipcMain.on("window-min", function() {
  // 收到渲染进程的窗口最小化操作的通知，并调用窗口最小化函数，执行该操作
  win.minimize();
});

// 窗口 最大化、恢复
ipcMain.on("window-max", function(_event, obj) {
  // 通过 resizable: false 设置了禁止改变主窗口尺寸,设置过后，win.isMaximized()总是返回false,故此处不再用它判断。 win.restore();也失效
  if (obj.winFlag) {
    // val为 true 则调用最大化函数
    win.maximize();
  } else {
    win.setContentSize(1122, 670); // 重新设置窗口客户端的宽高值（例如网页界面）,这里win.setSize(x,y)并不生效。
    win.center(); // 窗口居中
  }
});

// 关闭窗口
ipcMain.on("window-close", function() {
  win.close();
});

// 所有窗口都关闭的时候触发，windows和Linux中，此时应用也应退出。
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    initApp();
  }
});

if (isDevelopment) {
  // electron完成初始化的时候触发
  app.on("ready", async () => {
    startServer(); // 启动服务器
    initApp();
    implementSystemTray();
  });
} else {
  // 限制只能开启一个应用(4.0以上版本)；
  // 当第二个实例被执行并且调用 app.requestSingleInstanceLock() 时，这个事件将在你的应用程序的首个实例中触发
  const goTheLock = app.requestSingleInstanceLock();
  if (!goTheLock) {
    app.quit();
  } else {
    app.on("second-instance", (_event, _commandLine, _workingDirectory) => {
      if (win) {
        if (win.isMinimized()) win.restore();
        win.focus();
      }
    });
    app.on("ready", async () => {
      implementSystemTray();
      startServer();
      initApp();
    });
  }
}

// 系统托盘
var appIcon = null;

function implementSystemTray() {
  appIcon = new Tray("./public/favicon.ico"); // 创建与image关联的图标
  var contextMenu = Menu.buildFromTemplate([
    // 创建菜单
    {
      label: "上一首",
      type: "radio",
      click: function() {
        console.log("播放上一首歌曲");
      }
    },
    { label: "下一首", type: "radio" },
    { label: "打开桌面歌词", type: "radio", checked: true },
    { label: "退出", role: "close", accelerator: "CmdOrCtrl+Q" }
  ]);
  appIcon.setToolTip("This is demo"); // 鼠标放在该系统托盘图标上的提示信息
  appIcon.setContextMenu(contextMenu);

  // 消息通知，利用计时器，通过Image实例和空的Image实例 来实现图标闪动效果；
  let timer = null;
  let msgFlag = false;
  ipcMain.on("have-message", (event, arg) => {
    timer = setInterval(() => {
      msgFlag = !msgFlag;
      msgFlag
        ? appIcon.setImage(nativeImage.createEmpty())
        : appIcon.setImage("./public/favicon.ico");
      appIcon.setToolTip("您有一条新消息");
    }, 500);
  });

  appIcon.on("click", (_event, _bounds, _position) => {
    // 单击该系统托盘图标，显示隐藏窗口
    if (win.isVisible()) {
      win.hide();
    } else {
      win.show();
      appIcon.setImage("./public/favicon.ico"); // 防止 win.show() 后系统托盘图标的 空白现象；
      clearInterval(timer);
      timer = null;
      msgFlag = false;
    }
  });
}

// 启动本项目中的服务器
function startServer() {
  let cmdStr = "yarn install"; // 要运行的命令
  const serverPath = isDevelopment ? "./server" : "./server"; // 注意开发环境和线上环境的路径不同；

  // exec 函数 第一个参数是要执行的命令，第二个函数是配置选项，第三个参数是回调函数，配置项中常用到 子进程的工作目录
  serverProcess = require("child_process").spawn(cmdStr, {
    cwd: serverPath,
    shell: true
  });

  cmdStr = "node app.js";
  runExec(cmdStr);

  function runExec(cmdStr) {
    // spawn 函数 第一个参数是要执行的命令，第二个函数字符串参数的列表(省略后默认该值为空数组[])，第三个参数是配置选项，配置项中常用到 子进程的工作目录
    serverProcess = require("child_process").spawn(cmdStr, {
      cwd: serverPath,
      shell: true
    });

    serverProcess.stdout.on("data", function(data) {
      console.log("启动服务器成功 stdout:" + data); // 打印正常的后台可执行程序输出
    });
    serverProcess.stderr.on("data", function(data) {
      console.log("stderr:" + data); // 打印错误的后台可执行程序输出
    });
    serverProcess.on("close", function(code) {
      console.log("out code:" + code); // 退出之后的输出
    });
  }
}

// 关闭项目中的所有进程，主要是为了关闭刚刚启动的服务器进程。
function stopServer() {
  console.log("Kill server process.....");
  const kill = require("tree-kill"); //  tree-kill是一个插件，需要安装，在项目中已经用 yarn add tree-kill 命令安装。
  if (serverProcess) {
    kill(serverProcess.pid, "SIGTERM", function(_err) {
      // 终止进程树，杀死所有进程，包括根进程。
      console.log("Killed");
      serverProcess = null;
      win = null;
      app.quit();
    });
  }
}

app.stopServer = stopServer;

if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", data => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}
