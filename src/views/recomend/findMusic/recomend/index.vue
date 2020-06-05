<template>
  <div class="personal-recomend">
    <top-nav @handleSelect="handleSelect" :active="active"></top-nav>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in carouseList" :key="item.id">
        <el-image
          class="carousel-img"
          :src="item.imageUrl"
          alt="图片开小差了 ^_^"
          fit="cover"
        />
      </el-carousel-item>
    </el-carousel>
    <p class="common-font">
      <span>推荐歌单</span>
      <span class="see-more">更多></span>
    </p>
    <ul class="card-container">
      <li class="recomend-card" v-for="item in recomendList" :key="item.id">
        <div class="card-item">
          <div class="copy-writer multiple-beyond-ellipsis">
            {{ item.copywriter }}
          </div>
          <div class="play-count multiple-beyond-ellipsis">
            {{ item.playCount | numberFormat }}
          </div>
          <el-image :src="item.picUrl" alt="图片开小差了 ^_^" fit="fill" />
          <p class="img-title multiple-beyond-ellipsis">{{ item.name }}</p>
          <div class="icon_common play-icon el-icon-caret-right"></div>
        </div>
      </li>
    </ul>
    <p class="common-font">
      <span>独家放送</span>
      <span class="see-more">更多></span>
    </p>
    <ul class="card-container">
      <li
        class="recomend-card exclusive-play"
        v-for="item in exclusiveList"
        :key="item.id"
      >
        <div class="card-item">
          <el-image
            class="exclusive-img"
            :src="item.sPicUrl"
            alt="图片开小差了^_^"
            fit="fill"
          ></el-image>
          <p class="img-title multiple-beyond-ellipsis">{{ item.name }}</p>
          <div class="icon_common video-icon  el-icon-video-camera"></div>
        </div>
      </li>
    </ul>
    <p class="common-font">
      <span>最新音乐</span>
      <span class="see-more">更多></span>
    </p>
    <!-- <ul class="card-container latest-music">
      <li class="latest-item" >
        <div class="" v-for="(item,index) in latestList.slice(0,5)" :key="item.id">
          <span class="serial-number">{{index|SerialNumLeft}}</span>
          <el-image class="lastest-img" :src="item.picUrl" alt="图片开小差了^_^" fit="fill"></el-image>
          <span>{{item.name}}</span>
          <span>{{item.song.artists[0].name}}</span>
        
        </div>
      </li>
      <li class="latest-item">
       <div  v-for="(item,index) in latestList.slice(5)" :key="item.id">
        <span class="serial-number">{{index|SerialNumRight}}</span>
        <el-image class="lastest-img" :src="item.picUrl" alt="图片开小差了^_^" fit="fill"></el-image>
        <span>{{item.name}} </span> 
        <span>{{item.song.artists[0].name}}</span>
       </div>
      </li>
    </ul> -->
  </div>
</template>
<script>
import {
  RecomendList,
  mainBanner,
  privateContent,
  LatestMusic
} from "@/apis/recomend.js";
export default {
  data() {
    return {
      active: "/",
      carouseList: [],
      recomendList: [],
      exclusiveList: [],
      latestList:[]
    };
  },
  methods: {
    handleSelect(key) {
      // this.active=key;
    },
    getMainBanner() {
      mainBanner()
        .then(res => {
          this.carouseList = res.data.banners.slice();
        })
        .catch(err => {
          console.log(err);
        });
    },
    getRecomendList() {
      RecomendList(10)
        .then(res => {
          this.recomendList = res.data.result.slice();
        })
        .catch(err => {
          console.log(err);
        });
    },
    getPrivateContent() {
      privateContent()
        .then(res => {
          this.exclusiveList = res.data.result;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getLatestMusic(){
      LatestMusic()
      .then(res => {
        this.latestList=res.data.result;
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  mounted() {
    this.getMainBanner();
    this.getRecomendList();
    this.getPrivateContent();
    this.getLatestMusic();
  },
  filters: {
    numberFormat(val) {
      const number = 10000;
      const unit = ["", "万", "亿", "万亿"];
      if (val < number) {
        return val;
      } else {
        const enums = parseInt(Math.log(val) / Math.log(number));
        const value = parseInt(val / Math.pow(number, enums));
        return value + unit[enums];
      }
    },
    SerialNumLeft(index){
      return '0'+(index+1);
    },
    SerialNumRight(index){
      if(index<4){
        return '0'+(index+6);
      }else{
        return index+6;
      }
    }
  }
};
</script>
<style lang="scss">
.personal-recomend {
  .el-carousel {
    margin: 20px auto;
  }
  .carousel-img {
    width: auto;
    height: 200px;
  }
  .common-font {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    align-items: center;
    padding-bottom: 8px;
    span {
      font-size: 18px;
      letter-spacing: 0.6px;
      font-weight: 400;
      color: #333;
    }
    .see-more {
      font-size: 12px;
      color: #555;
      cursor: pointer;
    }
  }

  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    cursor: pointer;
    .img-title {
      font-size: 13px;
      letter-spacing: 1px;
      color: #333;
    }
    .recomend-card {
      margin: 12px 0 28px 0;
      text-align: left;
      cursor: pointer;
      .card-item {
        position: relative;
        .copy-writer,
        .play-count {
          position: absolute;
          z-index: 3;
          background: rgba(0, 0, 0, 0.3);
          color: #fff;
          padding: 5px;
          font-size: 12px;
          display: none;
          transition: all 5s;
          width: 92%;
          margin: 0 auto;
          letter-spacing: 1px;
        }
        .play-count {
          display: block;
          text-align: right;
        }
        .play-icon {
          display: none;
          right: 6px;
        }
        .video-icon {
          left: 6px;
          top: 6px;
          font-size: 13px;
        }
      }
      &:hover .copy-writer,
      &:hover .play-icon {
        display: block;
      }
      &:hover .play-count {
        display: none;
      }
    }
  }
  .latest-music{
    
    .latest-item{
      width: 48%;
      border: 1px solid #eee;
      height: 50px;
      line-height: 50px;
      div:nth-child(2n){
        background: #eee
      }
      .serial-number{

      }
    }
  }
 
  .icon_common {
    color: #fff;
    width: 24px;
    height: 24px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    text-align: center;
    line-height: 24px;
    border: 1px solid #fff;
    position: absolute;
    &:hover {
      background: rgba(0, 0, 0, 0.5);
    }
  }
  @media screen and (min-width: 1123px) {
    // 最大屏时
    .recomend-card {
      width: 200px;
      .play-icon {
        top: 71%;
      }
      .el-image {
        width: 200px;
        height: 200px;
      }
    }
    .exclusive-play {
      width: 338px;
      .el-image {
        width: 100%;
        height: 188px;
      }
    }
  }
  @media screen and (max-width: 1122px) {
    // 最小屏时
    .recomend-card {
      width: 140px;
      .play-icon {
        top: 62%;
      }
      .el-image {
        width: 140px;
        height: 140px;
      }
    }
    .exclusive-play {
      width: 250px;
      .el-image {
        width: 100%;
        height: 156px;
      }
    }
  }
}
</style>
