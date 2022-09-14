<template>
    <div class="header">
        
       <div class="box">
         <span>
            <img src="../assets/github2.webp" alt="">
         </span>
        <span>
            Github Content Featured
        </span>
       </div>
       <div class="right">
        <ul>
            <li><router-link :to="'/user/'+id">个人界面</router-link></li>
            <li><router-link to="/community">社区</router-link></li>
            <li v-if="isShow"><router-link to="/loginhello">登陆</router-link></li>
            <li v-else @click="btnClick"><router-link to="/loginhello">注销</router-link></li>
        </ul>
       </div>
    </div>
</template>

<script>
import {ref} from 'vue'
import axios from '../utils/axios'
    export default {
       setup(){
        let isShow = ref(true)
        let token = localStorage.getItem('token')
        console.log(token)
        if(token){
            isShow.value = false
        }
        let id = ref(0)
        const btnClick=()=>{
            localStorage.removeItem('token')
        }
        axios.get('http://localhost:3007/my/userinfo').then(res=>{
            id.value=res.data.data.id
        })
        return {
            isShow,btnClick,id
        }

       } 
    }
</script>

<style lang="less" scoped>
.header{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    background: white;
    .box{
        display:flex;
        align-items:center;
        span{
            font-size: 28px;
            font-weight: bold;
            
        }
        img{
            height: 80px;
            margin-right: 10px;
        }
    }
    .right{
        margin-right:50px;
        ul{
            height: 80px;
            list-style: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            li{
               font-size: 18px;
               margin-right:20px;
               a{
                color:#000;
               }
               a:hover{
                color:orange;
               }
            }
           
        }
    }
}
</style>