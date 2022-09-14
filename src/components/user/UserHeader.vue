<template>
    <div class="userheader">
      <div class="user">
        <div class="userimage">
          <img :src="userinfo.image" alt="">
        </div>
         <div class="userinfo">
            <div class="box">
                <p class="username">用户:{{username1}}</p>
                <div class="userword">
                   <span>每日一问：</span>
                   <span>你需要提出的问题是什么事呢？</span>
                </div>
            </div>
           
         </div>
       </div>
       <div class="editinfo">

           <div i-carbon-logo-github text-5></div>

            <va-button :rounded="false"  outline text-color="#000" class="mr-4 mb-2" plain @click="btnClick" v-if="isShow">编辑个人资料</va-button>
       </div>
    </div>
</template>

<script>
import axios from '../../utils/axios'
import {ref} from 'vue'
import {useRouter} from 'vue-router'
export default{
  props:{
    userinfo:{
      type:Array,
      default(){
        return []
      }
    }
  },
  setup(props){
    let username1 =ref('')
    let isShow = ref(true)
    let username_my = ref('')
    setTimeout(() => {
      username1.value = props.userinfo.username
      axios.get('http://localhost:3007/my/userinfo').then(
    res=>{
      console.log("userheader",res)
      username_my.value =res.data.data.username
      if(username_my.value !== username1.value){
         isShow.value = false
      }
    }
   )
    }, 100);
   console.log(props.userinfo)

   const router = useRouter()
   let username = ref('')
   
   const btnClick = ()=>{
      router.push("/setting/profiler")
   }
   return{
    btnClick,username,username1,isShow
   }
  }
}
 
</script>

<style lang="less" scoped>
  .userheader{ 
    padding:0 30px;
     height: 100%;
     display: flex;
     justify-content: space-between;
     align-items: center;
    .user{
        display: flex;
        height: 100%;
        .userimage{
           display: flex;
           align-items: center;
           justify-content: center; 
           height: 100%;
       
           margin-right: 30px;
           img{
           height: 80px;
           width: 80px;
           border-radius: 50%;
           margin-right: 10px;
       }
        }
        .userinfo{
            width: 500px;
            display: flex;
            align-items: center;
            height: 100%;
           
           .box{
            .username{
             letter-spacing: 1px;
              font-weight: bold;
              font-size: 26px;
              margin-bottom: 10px;
            }
            .userword{ 
              font-size: 14px;
              color: blue;
              
           
           }
           }
       
        }
    }
    .editinfo{
   
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        div{
            margin-bottom: 16px;
        }
        .va-button{
            font-size: 12px;
            font-weight: 200;
            margin: 0 !important;
        }
    }
  }
</style>