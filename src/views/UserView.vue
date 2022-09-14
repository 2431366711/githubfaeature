<template>
<header-con></header-con>
<div class="userbox">


    <div class="user">
      <div class="left">
       <div class="userhaeader">
      <user-header :userinfo="array"></user-header> 
     </div>
     <div class="userbottom">
      <user-bottom :username="username"></user-bottom>    
    </div> 
     </div>

    
     
    </div>

    </div>
    <footer-con></footer-con>
</template>

<script>
import HeaderCon from '../components/HeaderCon.vue'
import FooterCon from '../components/FooterCon.vue'
import UserHeader from '../components/user/UserHeader.vue'
import UserBottom from '../components/user/UserBottom.vue'


import axios from 'axios'
import {ref} from 'vue'
import {useRoute} from 'vue-router'

    export default{
        components:{
            UserHeader,
            UserBottom,
         
            FooterCon,
            HeaderCon
        },
      setup(){
        let array = ref()
        let username = ref('')
        const route = useRoute()
         
          axios.get(`http://127.0.0.1:3007/api/userinfo/${route.params.id}`).then(res=>{
            array.value =res.data.data
            console.log("array",array.value)
            username.value =array.value.username
          })
     
        return {array,username}
      }

    }
</script>

<style lang="less" scoped>
.userbox{
  
     background:whitesmoke;
  
     overflow: hidden;
}
   .user{

    margin: 20px auto;
    width: 1200px;
    background:whitesmoke;
    
    display: flex;
    justify-content: space-between;
    .left{
      .userhaeader{
     
        background: white;
        border-radius: 2px solid white;
        border-radius: 5px;
        width: 800px;
      
        height: 150px;
    }
    .userbottom{
       
        margin-top: 20px;
        background: white;
        border-radius: 2px solid white;
        border-radius: 5px;
      
    }
    }
    
    .right{
        background: white;
        border-radius: 2px solid white;
        border-radius: 5px;
        width: 280px;
        height: 216px;
        
    }
    
   }
</style>