<template>
    <div class="sidebar">
       <div class="time">
        <div class="top">
            <span class="box">
            <span class="icon">
                <el-icon :size="22"><Clock/></el-icon>
            </span>
            <span class="words">下午好</span>
            </span>
            
            <va-button class="qiandao-button">去签到</va-button>
        </div>
        <p>点亮你在社区的每一天</p>
       </div>
       <div class="ad">
        <ad-component></ad-component>
       </div>
       <div class="authorranking">
        <article-ranking></article-ranking>
       </div>
       <div class="connectiontrack"></div>
    </div>
</template>

<script>


import AdComponent from '../AdComponent.vue'
    export default {
        components:{
           AdComponent 
        },
        setup(){
            
            
           
                 
           
            //时间    
            

         
            
        }
    }
</script>

<style lang="less" scoped>
  .sidebar{
    box-sizing: border-box;
     
    width: 100%;
  }
  .loaction{
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
  }
  .time{
    background: white;
    padding: 20px;
    margin-bottom: 20px;
     p{
     color:#919192;
     margin-top: 10px;
     text-align: center;
     }
     .top{
     display: flex;
     align-items: center;
     justify-content: space-between;
     .box{
     display:flex;
     align-items: center;
     .icon{
        margin-right: 10px;
     }
     .words{
        font-weight: 700;
        font-size: 18px;
     }
  }
  .qiandao-button{
    border:1px solid #3491d2;
    color:#3491d2;
    height: 30px;
    border-radius: 16px;
  }
 
     }
  }

  
</style>