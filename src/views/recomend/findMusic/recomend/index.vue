<template>
  <div class="personal-recomend">
    <top-nav :active="active" @handleSelect="handleSelect" />
    <el-carousel :interval="4000" type="card" height="200px" width="500px">
      <el-carousel-item v-for="item in carouseList" :key="item.id">
        <el-image
          class="carousel-img"
          :src="item.imageUrl"
          alt="图片开小差了 ^_^"
          fit="cover"
          @click="handleClickBanner(item)"
        />
      </el-carousel-item>
    </el-carousel>
    <p class="common-font">
      <span>推荐歌单</span>
      <span class="see-more">更多></span>
    </p>
    <ul class="card-container">
      <li v-for="item in recomendList" :key="item.id" class="recomend-card">
        <div class="card-item">
          <div class="copy-writer multiple-beyond-ellipsis">
            {{ item.copywriter }}
          </div>
          <div class="play-count multiple-beyond-ellipsis">
            {{ item.playCount | numberFormat }}
          </div>
          <el-image :src="item.picUrl" alt="图片开小差了 ^_^" fit="fill" />
          <p class="img-title multiple-beyond-ellipsis">{{ item.name }}</p>
          <div class="icon_common play-icon el-icon-caret-right" />
        </div>
      </li>
    </ul>
    <p class="common-font">
      <span>独家放送</span>
      <span class="see-more">更多></span>
    </p>
    <ul class="card-container">
      <li
        v-for="item in exclusiveList"
        :key="item.id"
        class="recomend-card exclusive-play"
      >
        <div class="card-item">
          <el-image
            class="exclusive-img"
            :src="item.sPicUrl"
            alt="图片开小差了^_^"
            fit="fill"
          />
          <p class="img-title multiple-beyond-ellipsis">{{ item.name }}</p>
          <div class="icon_common video-icon  el-icon-video-camera" />
        </div>
      </li>
    </ul>
    <p class="common-font">
      <span>最新音乐</span>
      <span class="see-more">更多></span>
    </p>
    <ul class="card-container latest-music">
      <li class="latest-item">
        <div
          v-for="(item, index) in latestList.slice(0, 5)"
          :key="item.id"
          class="item_card"
        >
          <span class="serial-number">{{ index | SerialNumLeft }}</span>
          <div class="icon_common icon_latest el-icon-caret-right" />
          <el-image
            class="lastest-img"
            :src="item.picUrl"
            alt="图片开小差了^_^"
            fit="fill"
          />
          <div class="name-desc">
            <span class="song-name">{{ item.name }} </span>
            <span class="SQ_icon">SQ</span>
            <span class="square_icon el-icon-caret-right" />
            <span v-if="item.song.artists.length > 1" class="author-name">{{
              item.song.artists[0].name + " / " + item.song.artists[1].name
            }}</span>
            <span v-else class="author-name">{{
              item.song.artists[0].name
            }}</span>
          </div>
        </div>
      </li>
      <li class="latest-item">
        <div
          v-for="(item, index) in latestList.slice(5)"
          :key="item.id"
          class="item_card"
        >
          <span class="serial-number">{{ index | SerialNumRight }}</span>
          <div class="icon_common icon_latest el-icon-caret-right" />
          <el-image
            class="lastest-img"
            :src="item.picUrl"
            alt="图片开小差了^_^"
            fit="fill"
          />
          <div class="name-desc">
            <span class="song-name">{{ item.name }} </span>
            <span class="SQ_icon">SQ</span>
            <span class="square_icon el-icon-caret-right" />
            <span v-if="item.song.artists.length > 1" class="author-name">{{
              item.song.artists[0].name + " / " + item.song.artists[1].name
            }}</span>
            <span v-else class="author-name">{{
              item.song.artists[0].name
            }}</span>
          </div>
        </div>
      </li>
    </ul>
    <p class="common-font">
      <span>推荐MV</span>
      <span class="see-more">更多></span>
    </p>
    <ul class="card-container">
      <li
        v-for="item in MvList"
        :key="item.id"
        class="recomend-card exclusive-play"
      >
        <div class="card-item">
          <div class="copy-writer multiple-beyond-ellipsis" style="width:96%;">
            {{ item.copywriter }}
          </div>
          <div class="play-count multiple-beyond-ellipsis" style="width:96%;">
            <span class="el-icon-video-camera" />
            {{ item.playCount }}
          </div>
          <el-image
            :src="item.picUrl"
            alt="图片开小差了 ^_^"
            fit="fill"
            class="exclusive-img"
          />
          <p class="img-title multiple-beyond-ellipsis">{{ item.name }}</p>
          <p class="artist-name ">{{ item.artistName }}</p>
        </div>
      </li>
    </ul>
    <p class="common-font">
      <span>主播电台</span>
      <span class="see-more">更多></span>
    </p>
    <ul class="card-container">
      <li v-for="item in stationList" :key="item.id" class="recomend-card anchor-card">
        <div class="card-item">
          <div class="copy-writer multiple-beyond-ellipsis">
            {{ item.copywriter }}
          </div>
          <el-image :src="item.picUrl" alt="图片开小差了 ^_^" fit="fill" />
          <p class="img-title multiple-beyond-ellipsis">{{ item.name }}</p>
          <!-- <div class="icon_common play-icon el-icon-caret-right"></div> -->
        </div>
      </li>
    </ul>
    <p class="common-font">
      <span>听听</span>
      <span class="see-more">更多></span>
    </p>
    <ul class="card-container">
      <li v-for="item in djHotList" :key="item.id" class="recomend-card">
        <div class="card-item">
          <div class="copy-writer multiple-beyond-ellipsis">
            {{ item.copywriter }}
          </div>
          <el-image :src="item.picUrl" alt="图片开小差了 ^_^" fit="fill" />
          <p class="img-title multiple-beyond-ellipsis">{{ item.name }}</p>
          <!-- <div class="icon_common play-icon el-icon-caret-right"></div> -->
        </div>
      </li>
    </ul>
    <p class="common-font">
      <span>看看</span>
      <span class="see-more">更多></span>
    </p>
    <ul class="card-container">
      <li v-for="item in wangyiMVList" :key="item.id" class="recomend-card">
        <div class="card-item">
          <div class="copy-writer multiple-beyond-ellipsis">
            {{ item.artistName }}
          </div>
          <el-image :src="item.cover" alt="图片开小差了 ^_^" fit="fill" />
          <p class="img-title multiple-beyond-ellipsis">{{ item.name }}</p>
          <!-- <div class="icon_common play-icon el-icon-caret-right"></div> -->
        </div>
      </li>
    </ul>
    <!-- <audio :src="songUrl" autoplay >
    您的浏览器不支持 audio 标签。
    </audio> -->
  </div>
</template>
<script>
import {
  RecomendList,
  mainBanner,
  privateContent,
  LatestMusic,
  RecommendMV,
  AnchorStation,
  djHot,
  wangyiMV,
  songURL,
  RelatedPlaylist
} from '@/apis/recomend.js'
export default {
  filters: {
    numberFormat(val) {
      const number = 10000
      const unit = ['', '万', '亿', '万亿']
      if (val < number) {
        return val
      } else {
        const enums = parseInt(Math.log(val) / Math.log(number))
        const value = parseInt(val / Math.pow(number, enums))
        return value + unit[enums]
      }
    },
    SerialNumLeft(index) {
      return '0' + (index + 1)
    },
    SerialNumRight(index) {
      if (index < 4) {
        return '0' + (index + 6)
      } else {
        return index + 6
      }
    }
  },
  data() {
    return {
      active: '/',
      carouseList: [],
      recomendList: [],
      exclusiveList: [],
      latestList: [],
      MvList: [],
      stationList: [],
      djHotList: [],
      wangyiMVList: [],
      limit: 5,
      songUrl: '',
      relatedPList: []
    }
  },
  mounted() {
    this.getMainBanner()
    this.getRecomendList()
    this.getPrivateContent()
    this.getLatestMusic()
    this.getRecomendMV()
    this.getAnchorStation()
    this.getwangyiMV()
    this.getdjHot()
  },
  methods: {
    handleSelect(key) {
      // this.active=key;
    },
    getMainBanner() {
      mainBanner()
        .then(res => {
          this.carouseList = res.data.banners.slice()
        })
        .catch(err => {
          console.log(err)
        })
    },
    getRecomendList() {
      RecomendList(10)
        .then(res => {
          this.recomendList = res.data.result.slice()
        })
        .catch(err => {
          console.log(err)
        })
    },
    getPrivateContent() {
      privateContent()
        .then(res => {
          this.exclusiveList = res.data.result
        })
        .catch(err => {
          console.log(err)
        })
    },
    getLatestMusic() {
      LatestMusic()
        .then(res => {
          this.latestList = res.data.result
        })
        .catch(err => {
          console.log(err)
        })
    },
    getRecomendMV() {
      RecommendMV()
        .then(res => {
          this.MvList = res.data.result.slice(0, 3)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getAnchorStation() {
      AnchorStation()
        .then(res => {
          this.stationList = res.data.result
        })
        .catch(err => {
          console.log(err)
        })
    },
    getdjHot() {
      djHot(this.limit)
        .then(res => {
          this.djHotList = res.data.djRadios
        })
        .catch(err => {
          console.log(err)
        })
    },
    getwangyiMV() {
      wangyiMV(this.limit)
        .then(res => {
          this.wangyiMVList = res.data.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    handleClickBanner(item) {
      if (item.targetId !== 0) {
        songURL(item.targetId)
          .then(res => {
            this.songUrl = res.data.data[0].url
            this.getRelatedPlaylist(item.targetType)// 相关歌单
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        window.open(item.url)
      }
    },
    getRelatedPlaylist(id) {
      RelatedPlaylist(id)
        .then(res => {
          this.relatedPList = res.data.result
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
<style lang="scss">
.personal-recomend {
  .el-carousel {
    margin: 20px auto;
  }
  .carousel-img {
    width: 500px;
    height: 200px;
  }

  // 重写banner样式
  .el-carousel__item--card {
    width:500px;
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
  .latest-music {
    margin-bottom: 50px;
    .latest-item {
      flex: 1;
      border: 1px solid #eee;
      margin-top: 12px;
      .item_card {
        height: 60px;
        //让图片在card 居中
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
        &:nth-child(2n) {
          background: rgb(243, 243, 243);
        }
        &:hover {
          background: #ebeced;
        }
      }
      .lastest-img {
        width: 40px;
        border: 1px solid rgb(226, 226, 226);
      }

      .serial-number {
        font-size: 12px;
        color: rgb(150, 149, 149);
        padding: 0 13px 0 13px;
        letter-spacing: 1px;
      }
    }
    .name-desc {
      display: inline-block;
      vertical-align: top;
      margin-left: 12px;
      font-size: 12px;
      letter-spacing: 2px;
      .song-name {
        display: block;
      }
      .author-name {
        color: rgb(192, 191, 191);
      }
    }
    .icon_latest {
      width: 20px;
      height: 20px;
      line-height: 20px;
      left: 50px;
      z-index: 100;
    }
    .square_icon {
      border: 1px solid #c62f2f;
      color: #c62f2f;
      text-align: center;
      padding-left: 2px;
      width: 13px;
      height: 11px;
      border-radius: 2px;
      margin: 6px 10px 0 10px;
    }
    .SQ_icon {
      border: 1px solid #fe672e;
      color: #fe672e;
      font-size: 12px;
      letter-spacing: 0px;
      font-family: serif, monospace;
      transform: scale(0.1);
      padding: 1px 2px 1px 1px;
    }
  }

  .artist-name {
    font-size: 12px;
    color: #969595;
    padding-top: 5px;
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
    .anchor-card{
      width:160px;
        .el-image{
          width:160px;
          height: 160px;
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
    .anchor-card{
      width:120px;
        .el-image{
          width:120px;
          height: 120px;
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
