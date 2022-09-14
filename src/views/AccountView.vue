<template>
<div class="account">
<div>
      <p class="titleaccount">账号设置</p>
    </div>
    <div class="bottom">
    <va-alert color="info" class="mb-4" v-if="isShow">
    {{message}}
  </va-alert> 
    <va-form style="width:500px">
    <va-input
     style="width:100%"
      h-7
      label="当前密码"
      v-model="oldpassword"
      class="mt-4"
      type="password"
      :rules="[value => (value && value.length > 6) || '密码长度需要超过6个但不多于18个字母或数字']"
    />
      <va-input
        style="width:100%"
      h-7
      type="password"
      class="mt-4"
      label="新密码"
      v-model="newpassword"
      :rules="[value => (value && value.length > 6) || '密码长度需要超过6个但不多于18个字母或数字']"
    />
        <va-input
          style="width:100%"
      h-7
      class="mt-4"
      label="再次输入新密码"
      v-model="renewpassword"
      type="password"
      :rules="[value => (value && value == newpassword) || '密码和第一次不同']"
    />
    </va-form>

     <va-button :rounded="false" color="warning" class="mr-4 mb-2 mt-4" @click="updatePassword"> 修改密码</va-button>
    </div>
</div>
 
</template>

<script>
import {ref} from 'vue'
import axios from '../utils/axios'
    export default {
        setup(){
          let isShow = ref(false)
          let message = ref('')
           let oldpassword = ref('') 
           let newpassword = ref('')
           let renewpassword = ref('')
           const updatePassword = ()=>{
              axios.post("http://localhost:3007/my/updatepwd",{
                oldpassword : oldpassword.value,
                newpassword : newpassword.value
              }).then(res=>{
                console.log(res)
               message.value = res.data.message
               isShow.value = true
              },err=>{
                console.log(err)
                 message.value = '不能获取数据，无法修改密码'
                 isShow.value = true
              })
           }


           return {
            oldpassword,
            newpassword,
            renewpassword,
            updatePassword,
            message,
            isShow
           }
        }
    }
</script>

<style lang="less" scoped>
span{
    display: inline-block;
}
.account{
    padding: 30px;
}
.titleaccount{
    font-size: 26px;
    font-weight: bold;
    padding:20px 0px ;
}
.bottom{
    
}
</style>