<template>
	<div class="personal-recomend">
		<top-nav @handleSelect="handleSelect" :active="active"></top-nav>
		<el-carousel :interval="4000" type="card" height="210px" >
			<el-carousel-item v-for="item in carouseList" :key="item.id">
				<el-image class="carousel-img" :src="item.picUrl" alt="图片开小差了 ^_^"  fit="cover" />
			</el-carousel-item>
		</el-carousel>
		<p class="common-font">
			<span>推荐歌单</span>
			<span class="see-more">更多></span>
		</p>
		<ul class="card-container">
			<li class="recomend-card" v-for="item in recomendList" :key="item.id">
				<el-image :src="item.picUrl" alt="图片开小差了 ^_^"  fit="fill"/>
				<p class="img-title">{{item.name}}</p>
			</li>
		</ul>
	</div>
</template>
<script>
import {RecomendList,recomendNewSong}from '@/apis/recomend.js'
export default{
	data(){
		return {
			active:'/',
			carouseList:[],
			recomendList:[]
		
		}
	},
	methods:{
		handleSelect(key){
		// this.active=key;
		},
		getNewSong(){
			recomendNewSong()
			.then(res => {
				this.carouseList=res.data.result.slice(0,9)
			})
			.catch(err => {
				console.log(err)
			})
		},
		getRecomendList(){
			RecomendList(10)
			.then(res => {
				this.recomendList=res.data.result.slice()
			})
			.catch(err => {
				console.log(err)
			})
		}
	},
	mounted(){
		this.getNewSong();
		this.getRecomendList();
	}
}
</script>
<style lang="scss">
.personal-recomend{
	.el-carousel{
		margin:20px auto;
	}
	.carousel-img{
		width: auto;
		height: 200px;
	}
	.common-font{
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #e6e6e6;
		align-items: center;
		padding-bottom: 8px;
		span{
			font-size: 18px;
			letter-spacing: 0.6px;
			font-weight: 400;
			color: #333;
		}
		.see-more{
			font-size: 12px;
			color: #555;
		}
	}
	
	.card-container{
		list-style:none;
		text-align: center;
		cursor: pointer;
	}
	.img-title{
		font-size: 13px;
		letter-spacing: 1px;
		color: #333;
	}
	.recomend-card{
		display: inline-block;
		vertical-align: top;
		margin:12px 20px 30px 0;
		text-align: left;	
	}
	@media screen and (min-width: 1032px) { // 最大屏时
		.recomend-card{
			width: 200px;
			.el-image{
				width: 200px;
				height: 200px;
			}	
		}
	}
	@media screen and (max-width: 1030px) { // 最小屏时
		.recomend-card{
			width:140px;
			.el-image{
				width: 140px;
				height: 140px;
			}	
		}
	}
}
</style>