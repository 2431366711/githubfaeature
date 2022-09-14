<template>
<div class="image">
  <div class="title">
    <p>更换头像</p>
  </div>
  <div class="nowimage" style="width:fit-content;margin-bottom:20px">
    <p>当前头像：</p>
     <img :src="nowimageUrl" alt="" style="width:180px;height:180px;border:1px dotted #000;"> 
  </div>
   <p>新头像上传</p>
  <div class="item">

    <el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :on-change="handleRemove"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
   <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
</el-upload>
   
  </div>
  <el-button type="primary" @click="btnclick">上传头像</el-button>
 </div> 
</template>

<script>
import axios from '../utils/axios'
 export default {
    data() {
      return {
        imageUrl: '',
        nowimageUrl:'',
        dataURL:''
      };
    },
    methods: {
       handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      handleRemove(file) {
      console.log(file);
      var reader = new FileReader();
      reader.readAsDataURL(file.raw);
      reader.onload = () => {
        console.log("file 转 base64结果：" + reader.result);
        this.dataURL = reader.result
        console.log('dataurl',this.dataURL)
      };
      reader.onerror = function(error) {
        console.log("Error: ", error);
      };
    },

      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      btnclick(){
        console.log(this.dataURL)
        axios.post("http://localhost:3007/my/image",{image:this.dataURL}).then(res=>{
          console.log(res)
           this.nowimageUrl = this.dataURL
        })
      },

    },

   

       created(){
        axios.get('http://localhost:3007/my/userinfo').then(res=>{
          console.log(res.data.data)
          this.nowimageUrl = res.data.data.image
          console.log('image',this.nowimageUrl)
        })
      }
  }
</script>

<style lang="less" scoped>
.image{
  padding: 20px;
}
.item{
  margin-bottom: 20px;
  background: white;
  border: 1px dotted #000;
  width: fit-content;

}
.title{
  margin-bottom: 20px;
  p{
    font-size: 24px;
    font-weight: bold;
  }
}
 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .el-button{
    margin-top: 20px;
  }
</style>