<template>
	<div class="latest-music">
		<top-nav @handleSelect="handleSelect" :active="active"></top-nav>
		<h1>最新音乐</h1>
	</div>
</template>
<script>
export default{
	data(){
		return {
			active:'/latest'
		}
	},
	methods:{
			handleSelect(key){
				// this.active=key;
			}
		}
	}
</script>