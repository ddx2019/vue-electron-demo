<template>
 <div class="home">
    <nav-header></nav-header>
   <div class="main-content">
      <div class="left-container"> 
        <left-nav></left-nav>
      </div>
      <div class="right-container">
        <router-view></router-view>
      </div>
   </div>
 </div>
</template>
<script>
import LeftNav from "@/components/nav/LeftNav.vue"
import NavHeader from '@/components/header'
  export default {
    components:{
      LeftNav,
      NavHeader
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
