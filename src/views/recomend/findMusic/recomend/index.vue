<template>
	<div class="personal-recomend">
		<top-nav @handleSelect="handleSelect" :active="active"></top-nav>
		<h1>个性推荐</h1>
		 <el-carousel :interval="4000" type="card"  height="200px" >
			<el-carousel-item v-for="item in 6" :key="item">
				<h3 class="medium">{{ item }}</h3>
			</el-carousel-item>
		</el-carousel>
	</div>
</template>
<script>
import {RecomendList}from '@/apis/recomend.js'
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
		},
	mounted(){
		RecomendList()
		.then(res => {
			console.log(res,"推荐歌曲列表")
		})
		.catch(err => {
			console.log(err)
		})
	}
	}
</script>
<style lang="scss">
.personal-recomend{


	.el-carousel__item {
		h3{
			color: #475669;
			font-size: 14px;
			opacity: 0.75;
			line-height: 200px;
			margin: 0;
			min-width: 540px;
			
		}
		&:nth-child(2n){
			background-color: #99a9bf;
		}
		&:nth-child(2n+1){
			background-color: #d3dce6;
		}
	}
}
</style>