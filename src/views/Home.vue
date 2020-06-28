<template>
  <div class="home">
    <nav-header />
    <div class="main-content">
      <div class="left-container">
        <left-nav />
      </div>
      <div class="right-container">
        <router-view />
      </div>
    </div>
    <nav-footer />
  </div>
</template>
<script>
import LeftNav from '@/components/nav/LeftNav.vue'
import NavHeader from '@/components/header'
import NavFooter from '@/components/footer'
export default {
  components: {
    LeftNav,
    NavHeader,
    NavFooter
  }
}
</script>
<style lang="scss">
html{
  overflow-y: hidden;
}
.home {
  background: #faf9f9;
  min-height: 100vh;
  .main-content {
    display: flex;
    justify-content: space-between;
    height: 100vh;
    overflow-y:auto;
    .left-container {
      min-width: 200px;
    }
    .right-container {
      flex: auto;
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px;
    }
  }
}
</style>
