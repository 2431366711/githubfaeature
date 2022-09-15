<template>
  <router-link :to="'/article/' + data.idarticles">
        <div class="recommendation">
       <div class="left">
        <ul class="top">
        <li class="name">{{data.username}}</li>
        <li style="color:#eee">|</li>
        <li class="time">{{showtime}}</li>
        <li style="color:#eee">|</li>
        <li class="classifier">{{data.type}}</li>
        
       </ul>
       <h3>{{data.title}}</h3>
       <p class="content">{{data.title}}</p>
       </div> 
       <div class="right">
        <img :src="imageurl" alt="">
       </div>
    </div>
</router-link>
</template>

<script>
import {computed,ref} from 'vue'
    export default {
        props:{
          data:{
            type:Array,
            default(){
               return []
            }
          }
        },
         
        setup(props){
           const image = [
            'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/897ed2f96d5b4144bdeeab68e65c9690~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?',
            'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/720d976d5b5947c187b8f7039126c10e~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?',
            'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ce5bdb3946d84a3aa3346043f7c312a4~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?',
            'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f00c607c84ff47a7b9801c86ffb245bb~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?',
            'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/410367118c8a463dbe45fa1d30d7ad4a~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?',
            'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/90c6c35d87164ed28437294140aa7845~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?',
            'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fb1e5fefff684c64803df69f699792b6~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?',
            'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8f92f5b6e10e41a5a66fe7b6a007401a~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?',
            'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4f978819af194fff81d663305c2bef90~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?',
            'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f6d389d067ed4da5bbddebec1f8b3642~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?',
            'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a116048dd5a9475889469e1e33240bcd~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?',
            'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4b74c688371b457298dc177590e65d00~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?'
           ]
            const getRandom = (min, max) =>{
            return Math.floor(Math.random() * (max - min + 1)) + min
        }
           let random = ref(getRandom(1,10))
           let imageurl = ref(image[random])
           console.log('random',random)
           let date = new Date(props.data.date)
           console.log('date1',props.data)
           let oldtimer = ref(date.getTime())
           let nowtimer = ref(new Date().getTime())
           let newtimer = ref(nowtimer.value-oldtimer.value)
           
           const time = computed(
               ()=>{
                return newtimer.value /(1000*3600*24)
               }
           )
           let showtime = ref("")
           if(time.value<1){
             showtime = "今天"
           }
           else if(time.value<31){
              showtime = `${time.value.toFixed(0)}天前`
           }
           else if(time.value<365){
            showtime = `${(time.value/30).toFixed(0)}月前`
           }
           else if(time.value>365){
            showtime = `${(time.value/356).toFixed(0)}年前`
           }
           return {
                time,showtime,image,imageurl
           }
        }
    }
</script>

<style lang="less" scoped>
*{
  margin:0;
  padding: 0;
}
   .item {
    text-decoration: none;
    h3{
      color: #000;
    }
   }
   .recommendation{
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 10px 10px 10px 20px;
    height: 100%;
    width: 100%;
    border-bottom: 1px solid #eeee;
    cursor: pointer;
   }
   .left{
    width: 75%;
  
      .top{
        list-style: none;
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        li:first-child{
            padding-left: 0;
        }
        li{
           
           font-size: 12px;
           color: #919192;
           padding: 2px 5px;
        }
      }
      h3{
         margin-bottom: 12px;
         white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color:#000
      }
      p{
       
        color: #919192; 
        margin-bottom: 12px;
        font-size: 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .bottom{
       
        list-style: none;
        display: flex;
        align-items: center;
        li{
         
         cursor: pointer;
          display: flex;
          align-items: center;
          justify-content:center ;
          margin-right: 20px;
          a{
            margin-left: 3px;
            font-size: 12px;
            text-decoration: none;
            color: #919192;
          }
        }
      }
   }
   .right{
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    img{
       margin-top: 15px;
       width: 95px;
       height: 75px;
       border-radius: 4px;
    }
   }
</style>