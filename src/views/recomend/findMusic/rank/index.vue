<template>
	<div class="ranking-list">
		<top-nav @handleSelect="handleSelect" :active="active"></top-nav>
		<h1>排行榜</h1>
	</div>
</template>
<script>
export default{
	data(){
		return {
			active:'/rank'
		}
	},
	methods:{
			handleSelect(key){
				// this.active=key;
			}
		}
	}
</script>