<template>
  <div class="home">
   <h1>Home</h1>
   <lowdb-test></lowdb-test>
  </div>
</template>

<script>
import LowdbTest from '@/views/test/LowdbTest.vue'
export default {
  name: 'Home',
  components: {
    LowdbTest
  }
}
</script>
<style lang="scss">
  .home{

  }
</style>
