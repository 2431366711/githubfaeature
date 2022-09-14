<template>
    <div  class="login">
      
            <div class="left">
                <div class="image"></div>
                 <p>欢迎使用</p>
                 <p> Github Content Featured</p>
            </div>
            <div class="right">
                <div class="center">
                    <div class="titlebox">
                        <h1>登录</h1>
                        <span>
                            <span>没有账号？</span>
                            <router-link to="/register"  class="zuce"> 点击注册</router-link>
                        </span>
                    </div>

                    <va-input placeholder="请输入账号"  type="text" v-model="username">
                        
                    </va-input>
                     <va-input placeholder="请输入密码" type="password" v-model="password">
                       
                    </va-input>
                    <input type="checkbox" v-model="valuelogin"> 记住账号
                   
                      
                    <va-button :rounded="false" class="mr-4 mb-2" color="warning" @click="btnClick">登录</va-button>
                    <a href="javascript:;" class="register">已有账号，忘记密码?</a>
                   
                    
                </div> 


            </div>


        
    </div>
</template>
<script>
import {ref} from 'vue'
import axios from 'axios'
import {useRouter} from 'vue-router'
export default{
  setup(){
        const router = useRouter()
        let valuelogin = ref(true)
        let username = ref('')
        let password = ref('')
        const btnClick = ()=>{
             axios.post("http://localhost:3007/api/login",{username:username.value,password:password.value}).then(res=>{
             console.log(res)
             window.localStorage.setItem("token",res.data.token)
             if(res.data.status === 0){
                router.push("/")
             }
        }) 
        }
      
        return {valuelogin,username,password,btnClick}
  }
}
</script>
<style lang="less" scoped>
a{
    color: #000;
}
h1{
    font-size: 20px;
}
.login{
    padding: 40px;
    display: flex;
    flex-direction: row;
     align-items: center;
     justify-content: center;
    background:#607089 ;
    background-size: cover;
}   
    .left{
        height: 420px;
        width: 420px;
        border: 1px solid light;
        display: flex;
        flex-direction: column;
        justify-content: center;
   
        align-items: center;
        font-size: 30px;
        font-weight: 700;
      
    }
    .right {
        height: 420px;
        width: 450px;
          border-radius: 5px;
        border: 2px solid black;
        padding: 30px;
    }
    .box{
        cursor: pointer;
    }
    .zuce{
        
        cursor: pointer;
    }
    .zuce:hover{
        color:#909399
    }
    .right .center {
        box-sizing: border-box;

        width: 100%;
        height: 100%;
        padding: 40px 50px;
    }

    .right .center .titlebox {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    .va-input {
        width: 100%;
        margin-bottom: 16px;
       
    }
    .va-button{
        font-size: 18px;
        letter-spacing: 2px;
        margin-top: 20px;
        width: 100%;
        height: 40px;
       
    }
    .va-checkbox{
        border-radius: .0375rem !important;
        cursor: pointer;
    }

    .register{
        margin-top: 10px;
        display: block;
       color:rgba(0,0,0,0.8);
       font-size: 14px;
       margin-bottom: 30px;
    }
    .register:hover{
        color:#909399
    }
    
    
</style>