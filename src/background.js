import { app, protocol, BrowserWindow, shell } from 'electron'
import {
  createProtocol
} from 'vue-cli-plugin-electron-builder/lib'
const isDevelopment = process.env.NODE_ENV !== 'production'

let win
let serverProcess=null;
protocol.registerSchemesAsPrivileged([{ scheme: 'app', privileges: { secure: true, standard: true } }])


function createWindow () {
  win = new BrowserWindow({
    width: 1024,
    height: 670,
    webPreferences: {
      nodeIntegration: true
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    win.loadURL('app://./index.html')
  }

  win.on('closed', () => {
    win = null
  })

  win.on('close',function(event){
    stopServer(); //停止后台服务
  })
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})


if(isDevelopment){
  app.on('ready',async ()=>{
   startServer(); // 启动服务器
  })
}

app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {

  }
  createWindow()
})

//启动本项目中的服务器
function startServer(){
let cmdStr="node app.js" // 要运行的命令 
let serverPath=isDevelopment?"server":"../server" // 注意开发环境和线上环境的路径不同；
runExec(cmdStr)

function runExec(cmdStr){
  //exec 函数 第一个参数是要执行的命令，第二个函数是配置选项，第三个参数是回调函数，配置项中常用到 子进程的工作目录
  serverProcess=require('child_process').exec(cmdStr,{cwd:serverPath})
  serverProcess.stdout.on('data',function(data){  
    console.log("启动服务器成功 stdout:"+data)// 打印正常的后台可执行程序输出
  })
  serverProcess.stderr.on('data',function(data){
    console.log('stderr:'+data) //打印错误的后台可执行程序输出
  })
  serverProcess.on('close',function (code){
    console.log('out code:'+code) // 退出之后的输出
  })
}
}

// 关闭项目中的所有进程，主要是为了关闭刚刚启动的服务器进程。
function stopServer(){
  console.log("Kill server process.....")
  const kill=require('tree-kill'); //  tree-kill是一个插件，需要安装，在项目中已经用 yarn add tree-kill 命令安装。
  if(serverProcess){
    kill(serverProcess.pid,'SIGTERM',function(err){ //终止进程树，杀死所有进程，包括根进程。
      console.log('Killed');
      serverProcess=null;
      win=null;
      app.quit();
    })
  }
}

app.stopServer=stopServer;

if (isDevelopment) {
  
  if (process.platform === 'win32') {
    process.on('message', data => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}