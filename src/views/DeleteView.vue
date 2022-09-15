<template>
    <div class="delete">
    <div class="header">
        <p>文章删除</p>
    </div>
    <div class="box">
    <div v-for="item in array" :key="item" class="article">
      <div class="list">
         <article-con :data="item"></article-con>
      </div>
    
      <va-button :rounded="false" class="mr-4 mb-2" outline style="color:#000;font-weight:400;height:40px;" @click="deleteArticle(item)">删除该文章</va-button>
    </div>
      </div>
    </div>
</template>

<script>
import ArticleCon from '../components/community/ArticleCon.vue'
import {ref} from 'vue'
import axios from '../utils/axios'
    export default {
        components:{
            ArticleCon
        },
        setup() {
        let array = ref([])
        const getArticle = ()=>{
          setTimeout(() => {
          axios.get("http://localhost:3007/my/article").then(res=>{
          console.log(res.data.data)
          array.value = res.data.data
          })
           
        }, 100);
        }
        getArticle()
       
        const deleteArticle =(item) =>{
            axios.get("http://localhost:3007/my/article/delete/"+item.idarticles).then(res=>{
                console.log(res)
                getArticle()
            })
        }
      
  
          
          return {
            array,deleteArticle
          }
        }
    }
</script>

<style lang="less" scoped>
.delete{
     height: 100%;
     overflow-y:auto;
     padding: 20px;
}
.header{
    
    margin-bottom: 40px;
    p{
        font-weight: bold;
        font-size: 24px;
    }
}
.box{
    height:700px;
    overflow-y: auto;
}
.article{
  
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .list{
        width: 600px;
        
 
    }
}
</style>