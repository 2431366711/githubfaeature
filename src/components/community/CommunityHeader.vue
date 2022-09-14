<template>
    <div class="communityheader">
       <div class="left">
        <ul>
        <li>
          <div i-carbon-logo-github href="https://github.com/peterroe" text-4xl />
     
       <div ml-2>
      Github Content Featured社区
    </div>
        </li>
         <li v-for="item in headerleft" :key="item">
          <a href="javascript:;">{{ item }}</a>
        </li>
         <li>
          <img
            src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7482b3ad2cd14edda31f05399c2ae759~tplv-k3u1fbpfcp-zoom-1.image?"
            alt=""
            class="image"
          />
        </li>
        </ul>
       </div>
       <div class="right">
        <ul>
        <li style="width:250px">
          <va-input
            style="width:300px"
            placeholder="探索社区"
            class="input-with-select inputwidth"
            @focus="inputFocus"
            @blur="inputBlur"
          >

          </va-input>
          
        </li>
        <li>
          <va-button  class="button-left">创作者中心</va-button>
          <va-button  class="button-right"><div></div></va-button>
        </li>
        <li>
          <img
            class="vip"
            src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/24127194d5b158d7eaf8f09a256c5d01.svg"
            alt=""
          />
          <span class="vip-font">会员</span>
        </li>
        <li>
          <router-link :to="'/user/'+id">
           <img
            class="userimage"
            :src="image"
            alt=""
          />
          </router-link>
         
        </li>
        </ul>
       </div>
    </div>
</template>

<script>
import axios from '../../utils/axios'
import {ref} from 'vue'
    export default {
   setup() {
    const headerleft = ref([
      "首页",
      "沸点",
      "课程",
      "直播",
      "活动",
      "商城",
      "APP",
      "插件",
    ]);
    let image = ref('https://p3-passport.byteimg.com/img/mosaic-legacy/3791/5070639578~180x180.awebp')
    let id = ref(0)
    axios.get("http://localhost:3007/my/userinfo").then(res=>{
      console.log(res)
      id.value = res.data.data.id
      image.value = res.data.data.image
    })
    return {
        headerleft,id,image
    }
    }
    }
</script>

<style lang="less" scoped>
.communityheader{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1000px;
    height: 100%;
    width: 100%;
    
}
.left ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left .logo {
  height: 22px;
}

.left ul li {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 25px;
}

.left ul li a {
  line-height: 64px;
  height: 64px;
  font-size: 14px;
  font-weight: 400;
  color: #919192;
  text-decoration: none;
  border-bottom: 2px solid transparent;
}
.left ul li:nth-child(2) a {
  color: #3491d2;
}
.left ul li:nth-child(2) a:hover {
  color: #919192;
}
.left ul li:nth-last-child(2) a:hover {
  color: black;
  border-bottom: 2px solid transparent;
}
.left ul li:nth-last-child(3) a:hover {
  color: black;
  border-bottom: 2px solid transparent;
}
.left ul li:nth-last-child(4) a:hover {
  color: black;
  border-bottom: 2px solid transparent;
}
.left ul li:hover a {
  color: #3491d2;
  border-bottom: 2px solid #3491d2;
}
.image {
  height: 34px;
  width: 120px;
}
.right ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    cursor: pointer;
    position: relative;
    margin-right: 25px;
    display: flex;
    align-items: center;
    .va-input {
      position: absolute;
      width: 250px !important;
      transition: width 1s ease;
      z-index: 1000;
    }
    .inputwidthchange {
      width: 410px !important;
    }
    .button-left {  
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    .button-right {  
      margin: 0;
      border-top-left-radius: 0;
      border-end-start-radius: 0;
      width: 20px;
      display: flex;
      align-items: center;
      div {
        border: 4px solid transparent;
        border-top: 4px solid white;
      }
    }
    .vip {
      height: 30px;
      width: 30px;
      margin-right: 5px;
    }
    .vip-font {
      color: #919192;
      font-size: 14px;
    }
    .message-counter {
      height: 14px;
      width: 14px;
      border-radius: 50%;
      background: red;
      text-align: center;
      line-height: 14px;
      position: absolute;
      right: -50%;
      top: -50%;
      span {
        font-size: 8px;
        color: white;
      }
    }
    .userimage {
      height: 40px;
      width: 40px;
      border-radius: 50%;
    }
  }
}
</style>