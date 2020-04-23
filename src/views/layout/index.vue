<template>
    <div class="layout">
         <nav-header></nav-header>
         <router-view/>
    </div>
</template>
<script>
import NavHeader from '@/components/header/index.vue'
export default {
  components: {
    NavHeader
  }
}
</script>
