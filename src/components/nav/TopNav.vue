<template>
  <div class="top-nav">
    <el-menu
      :default-active="active"
      class="el-menu-nav"
      mode="horizontal"
      text-color="#333"
      active-text-color="#c22e2e"
      background-color="#faf9f9"
      :router="true"
      @select="handleSelect"
    >

      <el-menu-item v-for="(item,index) in navList" :key="index" :index="item.path">{{ item.name }}</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  props: ['active'],
  data() {
    return {
      navList: [
        { name: '个性推荐', path: '/' },
        { name: '歌单', path: '/songs' },
        { name: '主播电台', path: '/radio' },
        { name: '排行榜', path: '/rank' },
        { name: '歌手', path: '/singer' },
        { name: '最新音乐', path: '/latest' }

      ],
      num: 0,
      timer: null
    }
  },
	 methods: {
    handleSelect(key, keyPath) {
		  this.$emit('handleSelect', key)
      // console.log('key:',key, keyPath);
    }
  }
}
</script>
<style lang="scss">
	.top-nav{
		margin: 0 auto;
		// width: 90%;
		.el-menu-nav{
			display: flex;
			justify-content: center;
			.el-menu-item{
				height: 44px;
				line-height: 44px;
			}
		}

	}
</style>
