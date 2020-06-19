<template>
  <div class="left-nav">
    <div class="recomend-font">推荐</div>
    <ul class="nav-ul">
      <li v-for="(item,index) in navList.recommend" :key="index" :class="{'li__active':activeIndex===index}" @click="handleClickRecomend(index)">
        <i :class="`fa fa-${item.icon}`" />
        <span>{{ item.name }}</span>
      </li>
    </ul>
    <div class="recomend-font">我的音乐</div>
    <ul class="nav-ul">
      <li v-for="(item,index) in navList.myMusic" :key="index" :class="{'li__active':activeMusic===index}" @click="handleClickMyMusic(index)">
        <i :class="`fa fa-${item.icon}`" />
        <span>{{ item.name }}</span>
      </li>
    </ul>
    <div class="recomend-font">创建的歌单</div>
    <ul class="nav-ul">
      <li :class="{'li__active':activeIndex==='like'}" @click="handleClickLike('like')">
        <i class="fa fa-heart" />
        <span>我喜欢的音乐</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navList: {
        recommend: [
          { name: '发现音乐', icon: 'music' },
          { name: '私人FM', icon: 'lastfm' },
          { name: 'LOOK直播', icon: 'stop-circle-o' },
          { name: '视频', icon: 'video-camera' },
          { name: '朋友', icon: 'users' }
        ],
        myMusic: [
          { name: '本地音乐', icon: 'headphones ' },
          { name: '下载管理', icon: 'download' }
        ]
      },
      activeIndex: 0,
      activeMusic: ''
    }
  },
  methods: {
    handleClickRecomend(index) {
      this.activeIndex = index
      this.activeMusic = ''// 让 我的音乐不被选中
      const names = ['/', '/FM', '/live', '/video', '/friend'] // 左导航的router的path
      this.$router.push({ path: names[index] })
    },
    handleClickMyMusic(index) {
      this.activeMusic = index
      this.activeIndex = ' ' // 让 推荐部分 不被选中
      const names = ['/local', '/download']
      this.$router.push({ path: names[index] })
    },
    handleClickLike(info) {
      this.activeIndex = 'like'
      this.activeMusic = ' ' // 让 我的音乐 不被选中
      this.$router.push({ path: '/created' })
    }
  }
}
</script>
<style lang="scss">
	.left-nav{
	   background: #f5f5f7;
	   height: calc( 100vh  -  47px);
	   position: fixed;
	   width:200px;
	   top:47px;
	   z-index: 100;
		.nav-ul{
			background: #f5f5f7;
			letter-spacing: 0.5px;
			margin-bottom: 10px;
			li{
				font-size: 13px;
				color:#555;
				padding:8px 15px 8px 15px;
				&:hover,i:hover{
					color: #000;
					cursor: pointer;
				}
				i{
					font-size: 15px;
					margin-right: 10px;
				}
			}
			.li__active{
				background: #e6e7ea;
				color: #000;
				cursor: pointer;
				border-left: 3px solid #c62f2f;
			}
		}
		.recomend-font{
			color:#555;
			font-size:12px;
			padding-left:10px;
			height:35px;
			line-height:35px;
			letter-spacing: 1px;
		}
	}
</style>
