<template>
    <div class="adcomponent">
       <div class="top" v-for="item in imagesrc" :key="item">
         <img :src="item" alt="">
         <div class="adwords">广告</div>
       </div>
        <div class="bottom">
      <div class="image">
        <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/home.59780ae.png" alt="">
      </div>
      <div class="words">
        <a href="javascript:;">下载我们的App</a>
        <p>一个帮助开发者成长的社区</p>
      </div>
    </div>
   
    </div>
</template>

<script>
    export default {
        setup() {
            const imagesrc = ['https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8b7c5935fbf94715857399e2c0764d90~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?',
            'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1342bb1e90e54a4aadceefae35fe5164~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?',
            'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9b6c70fab5e446ce9b8be1678065d4e8~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?']
            return {
                imagesrc
            }
        }
    }
</script>

<style lang="less" scoped>
  .adcomponent{
    width: 100%;
    .top{
      cursor: pointer;
      position: relative;
      height: 200px;
      background: white;
      margin-bottom: 20px;
      img{
        height: 200px;
        width:100%
      }
      .adwords{
        position: absolute;
        bottom: 10px;
        right: 20px;
        font-size: 10px;
        color:white;
        padding:2px 5px;
        background: rgba(0,0,0,.5);
        cursor: pointer;
      }
    }
    .bottom{
        width: 100%;
        box-sizing: border-box;
        padding: 10px;
        background:white;
        display: flex;
        .image{
            margin-right:20px;
           img{
            height: 56px;
            width: 56px;
           }
        }
        .words{
            display: flex;
            flex-direction: column;
            justify-content: center;
            a{
                display: block;
                text-decoration: none;
                font-weight: 500;
                color:black;
                color:14px;
                margin-bottom:10px;
            }
            p{
                color:#919192;
                font-size: 12px;
            }
        }
    }
  }
</style>