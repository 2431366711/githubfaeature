<template>
<div class="registercom">
    <div class="register">
       <div class="left">
        <div i-carbon-logo-github text-20></div>
        <p>欢迎使用</p>
        <p>Github Content Featured</p>
       </div>
       <div class="box">
          <p class="registertitle">注册</p>
           <p class="words">
            <span>已有账号？</span>
            
             <router-link to="/loginhello" class="loginpage" >登录</router-link>
           </p>
   <va-form
    style="width: 350px;"

  >
    <va-input
      class="mt-3"
      label="账号"
      v-model="username"
      :rules="[value => (value && value.length > 3) || '账号长度需要超过3个字或字母']"
    />
    
    <va-input
      class="mt-3"
      label="昵称"
      v-model="nickname"
      :rules="[value => (value && value.length > 0) || '昵称必须填写']"
    />

    <va-input
      class="mt-3"
      type="password"
      label="密码"
      v-model="password"
      :rules="[value => (value && value.length > 6) || '密码长度需要超过6个但不多于18个字母或数字']"
    />

     <va-input
      class="mt-3"
      type="password"
      label="再次确认密码"
      v-model="repassword"
     :rules="[value => (value && value == password) || '密码和第一次不同']"
    />

    <va-input
      class="mt-3"
      label="性别"
      v-model="male"
      type="text"
      :rules="[value => (value && value.length > 0) || '性别是需要的']"
      
    />

    <va-button type="submit" class="mt-3" color="warning" @click="btnClick">
      完成注册
    </va-button>
     <input type="checkbox" v-model="checkbox" @click="checkboxBtn"> {{label}}
     <!-- <va-checkbox class="mb-2" v-model="checkbox" :label="label" /> -->
     <p color-red class="errorinfo" v-if="isShow">请同意该协议</p>
  </va-form>
      
       </div>
    </div>
</div>
<va-alert v-if="isformshow">
   注册成功,还剩{{time}}秒，退回登录页面
  </va-alert>
  <va-alert v-if="errorformshow">
   {{message}}
  </va-alert>
</template>

<script>
import {ref} from 'vue'
import axios from 'axios';
import {useRouter} from "vue-router"

export default {
   setup(){
    const router = useRouter()
   let username = ref('')
   let nickname = ref('')
   let password = ref('')
   let repassword = ref('')
   let male = ref('')
   
   let options = ['男','女']
   let checkbox = ref(false)
   let isShow = ref(false)
   let label = "阅读并接受《Github Content Featured》协议"
   let isformshow = ref(false)
   let errorformshow = ref(false)
   let message = ref('')
   let time = ref(5)
   const ok = ()=>{
    router.push("/login")
   }
   const checkboxBtn = ()=>{
      checkbox.value = !checkbox.value
   }
   const btnClick = ()=>{
    if(checkbox.value == false){
       isShow.value = true
    }
    else if(checkbox.value == true){
      isShow.value= false
      axios.post("http://localhost:3007/api/register/",{
     username:username.value,
     password:password.value,
     nickname:nickname.value,
     sex:male.value
   }).then(res=>{
        console.log(res)
        if(res.data.status===0){
          errorformshow.value = false
          isformshow.value = true   
          setInterval(function(){
            time.value--

            if(time.value==0){
              router.push("/loginhello")
            }
          },1000)
        }
        else{
            errorformshow.value = true
            message.value = res.data.message
           
        }
      })
    }
   }
   return {
    username,password,nickname,repassword,male,options,checkbox,isShow,label,btnClick,isformshow,ok,time,
    message,errorformshow,checkboxBtn
   }
   }
}




</script>

<style lang="less" scoped>

   .register{
    display: flex;
    align-items: center;
    justify-content: center;
     height: 600px;
     width: 100%;
     background: #607089;
     .left{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: 100px;
        p{
            font-size: 26px;
            font-weight: bold;
        }
     }
     .box{
       border:2px solid white;
       border-radius: 5px;
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       margin-right:100px;
       background:white; 
        height: 500px;
        width: 500px;
        
        .registertitle{
            color: #000;
            font-size: 22px;
            font-weight: bold;
            margin-bottom:10px;
        }
        .words{
            font-size: 14px;
            span{
               color: #000;
            }
            .loginpage{
              color:cornflowerblue
            }
            .loginpage:hover{
                color:blue
            }
        }
        .va-form{
            .va-input{
                width: 100%;
            }
            .va-select{
                width: 100%;
            }
            .va-button{
                width: 100%;
                height: 40px;
                letter-spacing: 1px;
                margin-bottom: 10px;
            }
        }
     }
   }
   .errorinfo{
    font-size: 14px;
    color: red;
   }
</style>