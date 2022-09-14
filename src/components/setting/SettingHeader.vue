<template>
    <div class="header">
       <router-link :to="'/user/' + id" class="words">返回个人页面</router-link>
    </div>
</template>

<script>
import axios from '../../utils/axios' 
import {ref} from 'vue'
    export default {
        setup(){
            let id = ref('')
           axios.get("http://127.0.0.1:3007/my/userinfo").then(res=>{
            console.log(res)
            id.value = res.data.data.id
           })
           return {id}
        }
    }
</script>

<style lang="less" scoped>
 .header{
    background: white;
    line-height: 40px;
    width: 1000px;
    .words{
        margin-left: 10px;
        font-size: 14px;
        
    }
    .words:hover{
        color:blue
    }
 }
</style>