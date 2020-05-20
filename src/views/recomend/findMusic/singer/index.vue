<template>
	<div class="singer">
		<top-nav @handleSelect="handleSelect" :active="active"></top-nav>
		<h1>歌手</h1>
	</div>
</template>
<script>
export default{
	data(){
		return {
			active:'/singer'
		}
	},
	methods:{
			handleSelect(key){
				// this.active=key;
			}
		}
	}
</script>