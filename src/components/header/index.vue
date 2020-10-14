<template>
  <div class="header ele_drag">
    <!-- <el-button @click="openEx">打开百度</el-button> -->
    <el-row>
      <el-col :span="4">
        <span class="logo" @click="goHome">
          <img class="no_drag" src="@/assets/image/wangyiyun.svg" />
          <span class="no_drag">网易云音乐</span>
        </span>
      </el-col>
      <el-col :span="7">
        <div class="search_outside">
          <span
            class="el-icon-arrow-left arrow no_drag"
            :class="{ ' arrow_active': arrow }"
            @click="handleClickArrow('left')"
          />
          <span
            class="el-icon-arrow-right arrow no_drag"
            :class="{ ' arrow_active': !arrow }"
            @click="handleClickArrow('right')"
          />
          <input
            ref="search"
            v-model="searchKey"
            class="search_input no_drag"
            type="text"
            @focus="handleFocus"
            @blur="handleBlur"
          />
          <i class="el-icon-search no_drag" />
        </div>
      </el-col>
      <el-col :span="13">
        <div class="personal_outside">
          <i class="el-icon-user no_drag" />
          <span class="text_loginstatus no_drag">未登录</span>
          <span class="el-icon-caret-bottom no_drag" />
          <span class="text_VIP no_drag">开通VIP</span>
          <span class="el-icon-shopping-bag-2 no_drag" />
          <span class="el-icon-message no_drag" @click="handleClickSendMsg" />
          <span class="el-icon-setting no_drag" />
          <strong>|</strong>
          <span class="el-icon-edit-outline no_drag" />
          <span class="el-icon-minus no_drag" @click="minimizeWin" />
          <span class="el-icon-full-screen no_drag" @click="maximizeWin" />
          <span class="el-icon-close no_drag" @click="closeWin" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { ipcRenderer, shell } from "electron";
export default {
  data() {
    return {
      searchKey: "搜索音乐，视频，歌词，电台",
      arrow: true,
      winFlag: false
    };
  },
  methods: {
    goHome() {
      // location.reload();
      this.$router.push({ path: "/" });
    },
    handleFocus() {
      this.searchKey = "";
    },
    handleBlur() {
      this.searchKey = "搜索音乐，视频，歌词，电台";
    },
    handleClickArrow(arg) {
      if (arg === "left") {
        this.arrow = true;
      } else {
        this.arrow = false;
      }
    },
    minimizeWin() {
      ipcRenderer.send("window-min"); // 通知主进程我要进行窗口最小化操作
    },
    maximizeWin() {
      this.winFlag = !this.winFlag;
      ipcRenderer.send("window-max", { winFlag: this.winFlag });
    },
    closeWin() {
      ipcRenderer.send("window-close");
    },
    openEx() {
      shell.openExternal("https://www.baidu.com");
    },
    handleClickSendMsg() {
      ipcRenderer.send("have-message");
      console.log("给主进程 发送消息");
      // 这里可放一个音频文件
      /* const audio=new Audio('audio的路径');
        audio.play(); */
    }
  }
};
</script>
<style lang="scss">
.header {
  position: fixed;
  width: 100%;
  z-index: 1000;
  .logo {
    border: 1px solid transparent;
    position: relative;
    cursor: pointer;
    display: block;
    img {
      height: 21px;
      border-radius: 50%;
      position: absolute;
      top: 0;
      left: 10px;
    }
    span {
      display: inline-block;
      position: absolute;
      left: 35px;
      font-size: 17px;
      letter-spacing: 2px;
    }
  }
  .el-row {
    padding: 12px 14px 12px 10px;
    background: #c62f2f;
    color: #fff;
  }
  .el-col {
    border-radius: 4px;
  }
  .search_outside {
    .arrow {
      border: 1px solid #a82828;
      display: inline-block;
      width: 26px;
      height: 21px;
      line-height: 21px;
      text-align: center;
      font-size: 14px;
      font-weight: 600;
      color: rgb(177, 172, 172);
    }
    .arrow_active {
      color: #fff;
    }
    .search_input {
      background: rgba(0, 0, 0, 0.1);
      border: none;
      height: 24px;
      border-radius: 25px;
      width: 210px;
      margin-left: 10px;
      color: rgb(184, 109, 109);
      outline: none;
      font-size: 13px;
      padding-left: 10px;
      display: inline-block;
      &:focus {
        color: #fff;
      }
    }
    i {
      margin-left: -28px;
      font-size: 13px;
      cursor: pointer;
    }
  }
  .personal_outside {
    text-align: right;
    color: rgb(221, 220, 220);
    i {
      display: inline-block;
      width: 24px;
      height: 24px;
      line-height: 24px;
      border-radius: 100%;
      background: #eee;
      text-align: center;
      vertical-align: middle;
      color: rgb(204, 204, 204);
      cursor: pointer;
    }
    span {
      font-size: 16px;
      margin-left: 20px;
      cursor: pointer;
    }
    .el-icon-caret-bottom {
      margin-left: 5px;
    }
    .icon-max-size {
      display: inline-block;
      height: 10px;
      width: 12px;
      border-radius: 2px;
      border: 1px solid rgb(177, 172, 172);
    }
    .text_loginstatus,
    .text_VIP {
      font-size: 12px;
      display: inline-block;
      margin-left: 6px;
    }
    .text_VIP {
      margin-left: 10px;
    }
    .el-icon-close {
      font-size: 18px;
    }
    strong {
      margin-left: 18px;
      color: rgb(167, 70, 70);
    }
    .el-icon-edit-outline,
    .el-icon-minus,
    .el-icon-full-screen,
    .el-icon-close {
      margin-left: 8px;
    }
  }
}
</style>
