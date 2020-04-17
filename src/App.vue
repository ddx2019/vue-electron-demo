<template>
  <div id="app">
    <!-- <router-view/> -->
    <layout></layout>
  </div>
</template>
<script>
import Layout from './views/layout/index.vue'
export default {
  components: {
    Layout
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
}
</style>
