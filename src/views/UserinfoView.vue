<template>
    <header-con></header-con>
    <div class="setting">
      <div class="box">
       <div class="header">
        <setting-header></setting-header>
       </div>
       <div class="boxbottom">
        <div class="left">
        <setting-left></setting-left>
        </div>
        <div class="right">
         <router-view></router-view>
        </div>
       </div>
     
       </div>
    </div>
    <footer-con></footer-con>
</template>

<script>
import HeaderCon from '../components/HeaderCon.vue'
import FooterCon from '../components/FooterCon.vue'
import SettingHeader from '../components/setting/SettingHeader'
import SettingLeft from '../components/setting/SettingLeft'
    export default {
        components:{
            SettingHeader,
            SettingLeft,
            HeaderCon,
            FooterCon
        }
    }
</script>

<style lang="less" scoped>
.setting{
  padding: 10px;
  overflow: hidden;
  background: whitesmoke;
  .box{
    margin: 0 auto;
    width: 1300px;
    .header{
       height: 40px;
       width: 1300px;
       margin: 20px auto;
     }
     .boxbottom{
      display: flex;
      justify-content: space-between;
       .left{
          height: 900px;
          width: 300px;
          background: white;
          margin-right: 20px;
        }
        .right{
           width: 900px;
           height: 900px;
           background:white;
        }
     }
    
  }
  
}
</style>