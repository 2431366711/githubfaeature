<template>
    <div class="admineview">
        
      <div class="header">
           <h2>Github Feature后台管理系统</h2>
      </div>
      <div class="bottom">
       <el-menu style="width:250px;height:100%"
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>用户管理</span>
          </template>
            <el-menu-item index="1-1"><router-link to="/admine/user">用户信息</router-link></el-menu-item>
            <el-menu-item index="1-2"><router-link to="/admine/adimeinfo">管理员信息</router-link></el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><location /></el-icon>
            <span>评论管理</span>
          </template>
            <el-menu-item index="2-1"><router-link to="/admine/commentinfo">评论汇总</router-link></el-menu-item>
            <el-menu-item index="2-2"><router-link to="/admine/commentadd">评论发布</router-link></el-menu-item>
        </el-sub-menu>
         <el-sub-menu index="3">
          <template #title>
            <el-icon><location /></el-icon>
            <span>文章管理</span>
          </template>
            <el-menu-item index="3-1"><router-link to="/admine/articleinfo">文章发布</router-link></el-menu-item>
            <el-menu-item index="3-3"><router-link to="/admine/articleadd">文章汇总</router-link></el-menu-item>
        </el-sub-menu>

      </el-menu>
      <div class="right"> 
           <router-view></router-view>
      </div>
      </div>

    </div>
</template>

<script>
import {
  
  Location,

} from '@element-plus/icons-vue'
    export default {
        components:{
          
            Location,

        },
        setup(){

        }
    }
</script>

<style lang="less" scoped>
.admineview{
    height: 800px;
}
.header{
    height: 60px;
    width: 100%;
    background: #000;
    display: flex;
    align-items: center;
    h2{
        color: white;
    }
}
.bottom{
    display: flex;
    height: 100%;
}
.right{

   height:100%;
   width: 100%;
}
a{
    color:white
}
</style>