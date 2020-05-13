<template>
  <div class="home">
    <h1>Home</h1>
<!-- <area-choose></area-choose> -->
<el-button @click="getHotMusic">获取热门歌曲</el-button>
    <!-- <optimize-table></optimize-table> -->
  </div>
</template>

<script>
// import AreaChoose from '@/views/test/AreaChoose.vue'
import {HotMusic} from "@/api/api.js";
// import axios from "@/plugins/axios.js";

// import optimizeTable from '@/views/test/ElTable/optimizeTable.vue'
export default {
  name: 'Home',
  components: {
    // optimizeTable
    // AreaChoose
  },
  
  methods: {
    getHotMusic(){
     HotMusic() 
        .then(res => {
          console.log("我拿到的数据：", res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  } 
}
</script>
