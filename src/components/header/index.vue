<template>
  <div class="header">
    <el-row>
      <el-col :span="4">
        <div class="logo" >
            <img src="@/assets/image/wangyiyun.svg">
            <span>网易云音乐</span>
        </div>
      </el-col>

      <el-col :span="7" >
        <div class="search_outside">
         <span class="el-icon-arrow-left arrow" :class="{' arrow_active':arrow}" @click="handleClickArrow('left')"></span>
         <span class="el-icon-arrow-right arrow" :class="{' arrow_active':!arrow}" @click="handleClickArrow('right')"></span>
         <input ref="search" class="search_input"  v-model="searchKey" type="text" @focus="handleFocus" @blur="handleBlur"/>
         <i class="el-icon-search"></i>
        </div>
      </el-col>
      <el-col :span="13">
        <div class="personal_outside" >
            <i class="el-icon-user"></i>
            <div class="text_loginstatus">未登录</div>
            <span class="el-icon-caret-bottom"></span>
            <div class="text_VIP" >开通VIP</div>
            <span class="el-icon-shopping-bag-2"></span>
            <span class="el-icon-message"></span>
            <span class="el-icon-setting"></span>
            <strong>|</strong>
            <span class="el-icon-edit-outline"></span>
            <span class="el-icon-minus"></span>
            <span class="el-icon-full-screen"></span>
            <span class="el-icon-close"></span>
        </div>
      </el-col>
    </el-row>
  </div>

</template>
<script>
export default {
  data () {
    return {
      searchKey: '搜索音乐，视频，歌词，电台',
      arrow:true
    }
  },
  methods: {
    handleFocus () {
      this.searchKey = ''
    },
    handleBlur () {
      this.searchKey = '搜索音乐，视频，歌词，电台'
    },
    handleClickArrow(arg){
      if(arg==='left'){
        this.arrow=true;
      }else{
        this.arrow=false;
      }
    }
  }
}
</script>
<style lang="scss">
   .header{
       .logo{
           border:1px  solid transparent;
           position: relative;
           img{
               height: 21px;
               border-radius: 50%;
               position: absolute;
               top:0;
               left:10px;
           }
           span{
               display: inline-block;
               position: absolute;
               left: 35px;
               font-size: 17px;
               letter-spacing: 2px;
           }
       }
      .el-row {
          padding: 10px;
          background: #c62f2f;
          color: #fff;
     }
    .el-col {
      border-radius: 4px;
    }
    .search_outside{
      .arrow{
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
      .arrow_active{
        color: #fff;
      }
     .search_input{
        background: rgba(0,0,0,0.1);
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
        &:focus{
          color: #fff;
        }
      }
      i{
        margin-left: -28px;
        font-size: 13px;
      }

    }
    .personal_outside{
      text-align: right;
      color: rgb(221, 220, 220);
      i{
        display: inline-block;
        width: 24px;
        height: 24px;
        line-height: 24px;
        border-radius: 100%;
        background: #eee;
        text-align: center;
        vertical-align: middle;
         color: rgb(204, 204, 204);
      }
      span{
        font-size: 16px;
        margin-left: 20px;
      }
      .el-icon-caret-bottom{
        margin-left: 5px;
      }
      .icon-max-size{
        display: inline-block;
        height: 10px;
        width: 12px;
        border-radius: 2px;
        border: 1px solid  rgb(177, 172, 172);
      }
      .text_loginstatus,.text_VIP{
        font-size:12px;
        display:inline-block;
        margin-left: 6px;
      }
      .text_VIP{
        margin-left: 10px;
      }
      .el-icon-close{
        font-size: 18px;
      }
      strong{
        margin-left: 18px;
        color:rgb(167, 70, 70);
      }
      .el-icon-edit-outline,.el-icon-minus,.el-icon-full-screen,.el-icon-close{
        margin-left: 8px;
      }
    }
}
</style>
