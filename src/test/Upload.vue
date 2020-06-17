<template>
 <div class="upload-container">
         <el-upload
          class="upload-demo"
          action=""
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          :before-upload="BeforeUpload"
          :http-request="Upload"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
 </div>
</template>
<script>
import axios from 'axios';
import qs from 'qs';
  export default {
    data(){
      return {
          fileList: [{name: 'food1.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
          newFile:new FormData()
      }
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      BeforeUpload(file){
       if(file){
          this.newFile.append('file',file);
       }else{
         return false;
       }
      },
      Upload(){
        const newData= this.newFile;
        axios({
          url:'https://jsonplaceholder.typicode.com/posts/',
          method:'post',
          data: newData,
          headers:{
          'Content-Type':'multipart/form-data'
          }
        })
        .then(res => {
          console.log('res:',res)
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>
<style lang="scss">
  .upload-container{
    width: 250px;
    padding:150px;
  }
</style>
