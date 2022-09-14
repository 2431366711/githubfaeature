<template>
    <div class="menu">
        <div class="box">
          <a href="javasript:;" v-for="item in info" :key="item">{{item}}</a>
        </div>
       
    </div>
</template>

<script>
    export default {
        props:{
            info:{
                type:Array,
                default(){
                    return []
                }
            }
        },

    }
</script>

<style lang="less" scoped>
  .menu{
    background: white;
    box-shadow:0px 0px 4px 1px #cccc;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items:center;
    width: 340px;
    
   
  }
  .box{
    width: fit-content;
    padding: 10px;
  }
  a{

    text-decoration: none;
    color:#919192;
    font-size: 14px;
    margin-right: 10px;
    padding: 2px 8px;
    background: whitesmoke;
    display: inline-block;
    border-radius: 10px;
    margin-top: 10px;
    cursor: pointer;
  }
  a:hover{
    color:#3491d2;
  }
</style>