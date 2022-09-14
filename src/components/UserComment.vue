<template>
    <div class="usercomment">
      <div class="user">
          <div class="image">
            <img :src="image" alt="">
          </div>
       <div class="userinfo">
           <p class="username">{{commentinfo.username}}</p>
           <p class="time">{{time}}</p>
      </div>
    </div>
       <div class="comment">
        {{commentinfo.content}}
       </div>

    </div>
</template>

<script>
import {ref} from 'vue'
    export default {
        props:{
            commentinfo:{
                type:Array,
                default(){
                    return []
                }
            },
            image:{
                type:String
            }
        },
        setup(props){
            let time = ref('')
            setTimeout(() => {
            let date = new Date(props.commentinfo.date)
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
            time.value = `${year}年${month}月${day}日  ${hours} : ${minutes}`
            }, 100);
            return{
                time
            }
            
        }
    }
</script>

<style lang="less" scoped>
.usercomment{
    padding: 20px;
    border-bottom: 1px solid #eee;
   .user{
    margin-bottom: 10px;
    display: flex;
    align-items: center;
      .image{
        margin-right: 20px;
        img{
            height: 40px;
            width:40px;
            border-radius: 50%;
        }
      }
      .userinfo{
          .username{
            font-size: 16px;
            font-weight: 500;
            letter-spacing: 1px;
            margin-bottom: 10px;
          }
          .time{
            font-size: 14px;
            color: gray;
          }
      }
   }
   .comment{
      padding: 0 0 0 55px;
      
   }
}
</style>