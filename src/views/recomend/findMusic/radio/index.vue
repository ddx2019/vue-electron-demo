
<template>
	<div class="radio-station">
		<top-nav @handleSelect="handleSelect" :active="active"></top-nav>
		<h1>主播电台</h1>
	</div>
</template>
<script>
export default{
	data(){
		return {
			active:'/radio'
		}
	},
	methods:{
			handleSelect(key){
				// this.active=key;
			}
		}
	}
</script>