<template>
	<div class="top-nav">
		<el-menu
		:default-active="active"
		class="el-menu-nav"
		mode="horizontal"
		@select="handleSelect"
		text-color="#333"
		active-text-color="#c22e2e"
		:router="true"
		>
			<el-menu-item  v-for="(item,index) in navList" :index="item.path"  :key="index">{{item.name}}</el-menu-item>
		</el-menu>

	</div>
</template>
<script>
export default {
	data(){
		return {
			navList:[
				{name:'个性推荐',path:'/'},
				{name:'歌单',path:'/songs'},
				{name:'主播电台',path:'/radio'},
				{name:'排行榜',path:'/rank'},
				{name:'歌手',path:'/singer'},
				{name:'最新音乐',path:'/latest'}
			]
		}
	},
	props:['active'],
	 methods: {
      handleSelect(key, keyPath) {
		  this.$emit('handleSelect',key)
        // console.log('key:',key, keyPath);
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