
<template>
	<div class="songs-container">
		<top-nav @handleSelect="handleSelect" :active="active"></top-nav>
		<h1>歌单</h1>
	</div>
</template>
<script>
export default{
	data(){
		return {
			active:'/songs'
		}
	},
	methods:{
			handleSelect(key){
				// this.active=key;
			}
		}
	}
</script>