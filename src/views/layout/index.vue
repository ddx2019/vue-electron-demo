<template>
    <div class="layout">
      <nav-header></nav-header>
     <router-view></router-view>
    </div>
</template>
<script>
import NavHeader from '@/components/header'
export default {
  components: {
    NavHeader
  }

}
</script>
