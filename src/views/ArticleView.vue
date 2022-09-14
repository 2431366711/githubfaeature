<template>

    <div id="article">
       <div class="header">
         <community-header></community-header>
        </div>  
        <div class="bottom">
            <div class="list">
                 <div class="article">
                     <article-info :articleinfo="array"></article-info>
                 </div>
                  
                  <div class="comment">
                       <comment-info :commentinfo="array"></comment-info>
                  </div>
               
              
                
            </div>
            <div class="sidebar">  
                <side-bar></side-bar>
            </div>

        </div>
    </div>
    
</template>

<script>
import CommentInfo from '../components/CommentInfo'
import SideBar from '../components/SideBar'
import ArticleInfo from '../components/ArticleInfo.vue'
import CommunityHeader from '../components/community/CommunityHeader' 

import axios from '../utils/axios'
import { ref,onMounted} from 'vue'
import {useRoute} from 'vue-router'

    export default {
        components:{
            CommunityHeader,
            ArticleInfo,
            SideBar,
            CommentInfo
        },
        setup(){
            const route = useRoute()
            let array = ref([])
            onMounted(()=>{
                 axios.get(`http://localhost:3007/api/article/id/${route.params.id}`
              ).then(res=>{
                    console.log(res)
                    array.value = res.data.data
                },err=>{
                    console.log(err)
                })
        })
           
           
            
        
           
            return {
                array
            }
            
        }
    }
</script>

<style lang="less" scoped>

#article{
   height: 100%;
   background: #eeee;
}
.header{
    background: white;
    height: 64px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #eef1f0;
    margin-bottom: 20px;
}

.bottom{
    display: flex;
    justify-content: space-between;
    padding: 0 0 10px 0;
    width: 1200px;
    margin: 0 auto;
    
   
}
.list{
    box-sizing: border-box;
    width: 800px;

    .article{
        background: white;
        min-height: 600px;
        margin-bottom: 20px;
    }
    .comment{
        background: white;
         min-height: 300px;
    }
}
.sidebar{
    box-sizing: border-box;
    width: 260px;
}
</style>