<template>
 <div class="home">
  
    <nav-header></nav-header>
   <div class="main-content">
      <div class="left-container"> 
        <left-nav></left-nav>
      </div>
      <div class="right-container">
         <!-- <el-button type="primary" @click="getMusic">获取音乐</el-button> -->
        <router-view></router-view>
      </div>
   </div>
 </div>
</template>
<script>
import LeftNav from "@/components/nav/LeftNav.vue"
import NavHeader from '@/components/header'
// import {HotMusic} from "@/api/api.js"
  export default {
    components:{
      LeftNav,
      NavHeader
    },
    methods:{
      getMusic(){
        // HotMusic()
        // .then(res => {
        //   console.log('res:',res)
        // })
        // .catch(err => {
        //   console.log(err)
        // })
      }
    }
  }
</script>
<style lang="scss">
  .home{
   .main-content{
      display: flex;
      .left-container{
        width: 200px;
      }
      .right-container{
        flex: auto;
      }
   }

  }  
</style>
