<template>
 <div class="home">
    <nav-header></nav-header>
   <div class="main-content">
     <div class="left-container"> 
       <left-nav></left-nav>
      </div>
      <div class="right-container">
       <top-nav></top-nav>
        这是右边
      </div>
   </div>
 </div>
</template>
<script>
import LeftNav from "@/components/nav/LeftNav.vue"
import NavHeader from '@/components/header'
import TopNav from "@/components/nav/TopNav.vue"
  export default {
    components:{
      LeftNav,
      NavHeader,
      TopNav
    }
  }
</script>
<style lang="scss">
  .home{
   .main-content{
      display: flex;
      .left-container{
        width: 200px;
        // background: #f5f5f7;
      }
      .right-container{
        flex: auto;
        border: 1px solid green;
      }
   }

  }
</style>
