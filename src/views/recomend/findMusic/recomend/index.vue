<template>
	<div class="personal-recomend">
		<top-nav @handleSelect="handleSelect" :active="active"></top-nav>
		<h1>个性推荐</h1>
	</div>
</template>
<script>
export default{
	data(){
		return {
			active:'/'
		}
	},
	methods:{
			handleSelect(key){
				// this.active=key;
			}
		}
	}
</script>