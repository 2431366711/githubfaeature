<template>
    <div class="profilerleft">
  <va-alert color="info" class="mb-4" v-if="isShow">
    {{message}}
  </va-alert> 
  <va-form class="profilerleftform">
    <va-input
      
      label="用户名"
      v-model="username"
      disabled
    />
      <va-input
      class="mt-4"
      
      label="昵称"
      v-model="nickname"
    />

        <va-input
    class="mt-4"
     
      label="手机号"
      v-model="phone"
    />

    <va-input
      class="mt-4"
     
      label="邮箱"
      v-model="emial"
    />

    <va-input
     
      class="mt-4"
      label="Github账号"
      v-model="github"
    />
     <va-input
    
      class="mt-4"
      label="微信账号"
      v-model="weixin"
    />

    <va-input
   
      class="mt-4"
      label="职位"
      v-model="emplyee"
  
    />

     <va-input
      
     class="mt-4"
      label="公司"
      v-model="company"
     
    />


     <va-input
    
class="mt-4"
      v-model="introduction"
      
      label="个人介绍"
    />
  </va-form>
   <va-button :rounded="false" color="warning" class="mr-4 mb-2" @click="updateClick">保存修改</va-button>
    </div>

</template>

<script>
import {ref} from 'vue'
import axios from '../utils/axios'
  export default {
    setup(){
      let isShow = ref(false)
      let username = ref('')
      let nickname = ref('')
      let phone = ref('')
      let emial = ref('')
      let weixin = ref('')
      let github = ref('')
      let emplyee =ref('')
      let company = ref('')
      let message = ref('')
      let introduction = ref('')
        axios.get("http://localhost:3007/my/userinfo").then(res=>{
          console.log(res.data.data)
          username.value = res.data.data.username
          nickname.value = res.data.data.nickname
          phone.value = res.data.data.phone
          emial.value = res.data.data.emial
          weixin.value = res.data.data.weixin
          github.value = res.data.data.github
          emplyee.value = res.data.data.emloyee
          company.value = res.data.data.company
          introduction.value = res.data.data.introduction
        })
        const updateClick = ()=>{
          axios.post("http://localhost:3007/my/updateuserinfo",{
            username:username.value,
            nickname:nickname.value,
            phone:phone.value,
            emial:emial.value,
            weixin:weixin.value,
            github:github.value,
           emloyee:emplyee.value,
           company:company.value,
           introduction:introduction.value
          }).then(res=>{
            console.log(res)
            message.value = res.data.message
            isShow.value = true
          })
        }
        return{
          username,nickname,phone,emplyee,emial,weixin,github,company,introduction,updateClick,message,isShow
        }
    }
  }
</script>

<style lang="less">
 .profilerleft{
    padding: 20px;
    height: 100%;
    width: 100%;
  
    .profilerleftform{
        margin-bottom: 60px;
        display: flex;
        flex-direction: column;
    }
 .va-input input{
        height:24px !important;
    }
    .va-input .container-label{
      height: 20px;
    }
    


 }
</style>