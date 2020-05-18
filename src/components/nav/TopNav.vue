<template>
	<div class="top-nav">
		<el-menu
		:default-active="activeIndex"
		class="el-menu-nav"
		mode="horizontal"
		@select="handleSelect"
		text-color="#333"
		active-text-color="#c22e2e">
			<el-menu-item  v-for="(item,index) in navList" :index="`${index}`" :key="item.id" >{{item.name}}</el-menu-item>
		</el-menu>

	</div>
</template>
<script>
export default {
	data(){
		return {
			navList:[
				{name:'个性推荐'},
				{name:'歌单'},
				{name:'主播电台'},
				{name:'排行榜'},
				{name:'歌手'},
				{name:'最新音乐'}
			], 
			activeIndex:'0'
		}
	},
	 methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
<style lang="scss">
	.top-nav{
		margin: 0 auto;
		width: 90%;
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