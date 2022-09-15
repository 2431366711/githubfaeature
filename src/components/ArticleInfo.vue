<template>
    <div style="background:white ;padding:20px">
        
       <div class="title"><h2>{{articleinfo.title}}</h2></div>
       <div class="author">
        <div class="authorinfo">
            <img :src="image" alt="">
            <div class="box">
                <router-link :to="'/user/'+ articleinfo.userid">
                <p class="authorname">{{articleinfo.username}}</p>
                </router-link>
                
                <p class="articleinfo">
                    <span>{{time}}</span>
                    
                </p>
            </div>
        </div>
        <div class="authorbutton">
            <va-button type="primary" plain>+关注</va-button>
        </div>
       </div>
       <div class="content" v-html="articleinfo.content"></div>
    </div>
</template>

<script>
import axios from 'axios'
import {ref} from 'vue'
    export default {
        props:{
          articleinfo:{
            type:Array,
            default(){
                return []
            }
          }
        },
        setup(props){
            let image = ref('')
            setTimeout(()=>{
              console.log('props.articleinfo.userid',props.articleinfo.userid)
               
            },100)
           
           
            let time = ref('')
            setTimeout(() => {
            axios.get('http://localhost:3007/api/userinfo/'+props.articleinfo.userid).then(res=>{
                console.log('hello',res)
                image.value = res.data.data.image
            })



            
            let date = new Date(props.articleinfo.date)
            console.log(date)
            let month = date.getMonth()+1
            month = month<10 ? '0'+month : month
            console.log(month)
            let day = date.getDate()
            day = day<10 ? '0'+day : day
            let year = date.getFullYear()
            year = year<10 ? '0'+year : year
            let hours = date.getHours()
            hours = hours<10 ? '0'+hours : hours
            let minutes  = date.getMinutes()
            minutes = minutes<10 ? '0'+minutes : minutes
            time.value = `${year}年${month}月${day}日  ${hours}:${minutes}`
            }, 100);
            
            return {
                time,
                image
            }
        }
        
    }
</script>

<style lang="less" scoped>
h2{
   font-size: 24px;
   font-weight: bold; 
}

.title{
   margin-bottom:20px
}
.author{
    margin-bottom:30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .authorinfo{
        display: flex;
        img{
            border:1px solid #eee ;
            height: 40px;
            width: 40px;
            border-radius: 50%;
            margin-right: 10px;
        }
        .box{
            letter-spacing:1px;
            
            .authorname{
                font-size: 16px;
                font-weight: 400;
                margin-bottom:3px;
                color: #000;
            }
            .articleinfo{
                font-size: 14px;
                color: #919192;
                span{
                    margin-right: 5px;
                }
            }
        }
    }
 
}
.content{
   
    line-height: 30px;
    h2{
        padding:5px 0 ;
    }
   pre, ul{
        margin-left: 55px;
    }
    p{
       text-indent: 2em; 
    }
    img{
        box-sizing: border-box;
        height: 100%;
        width: 100%;
        padding-right: 2em;
    }
   }

   

</style>