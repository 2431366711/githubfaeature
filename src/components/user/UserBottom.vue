<template>
    <div class="userbottom">
     <div class="top">
        
        <div><p class="title">发布的文章</p></div>
        <div class="icon"><va-icon class="mr-2">&#10032;</va-icon></div>
     </div>   
      
    
        <div class="content">
            <template v-for="item in array" :key="item">
             <article-con :data="item"></article-con>
            
            </template>
          
        </div>
     </div>
</template>

<script>
import ArticleCon from '../community/ArticleCon.vue'  
import axios from 'axios'
import {ref} from 'vue'
//   import axios from '../utils/axios'
    export default {
        components:{
            ArticleCon
        },
        props:{
            username:{
                type:String
            }
        },
        setup(props){
            
            
            let value = ref(0)
            let array = ref([])
            
            setTimeout(() => {
                console.log(props.username)
                axios.get(`http://localhost:3007/api/article/${props.username}`).then(res=>{
                console.log('userbottom',res)
                array.value = res.data.data
                })
              
            },100);
           
            return{
              value,array
            }
        }
    }
</script>

<style lang="less" scoped>
.userbottom{
    position: relative;
    width: 100%;
    padding: 20px;
}
.top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title{
     font-size: 18px;
     font-weight: bold
     ;
    }
}


.icon{
    margin-right: 10px;
}
</style>