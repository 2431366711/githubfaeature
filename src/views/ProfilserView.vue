<template>
    <div class="profiler">
        <p class="titleprofilter">个人资料</p>
        <div class="bottom">
            <div class="left">
               <profiler-left></profiler-left>
            </div>
        
        </div>
    </div>
</template>

<script>
import ProfilerLeft from '../components/ProfilerLeft.vue'
    export default {
        components:{
            ProfilerLeft
        }
    }
</script>

<style lang="less" scoped>
.profiler{

    height: 100%;
    width: 100%;
    padding: 20px;
}
  .titleprofilter{
    font-size: 26px;
    font-weight: bold;
    padding:20px 0px ;
  }
  .bottom{
    display: flex;
    justify-content: space-between;
    height: 700px;
   
    .left{
       height: 100%;
       width: 600px;
       
    }
    .right{
        height: 100%;
        width: 300px;
        background: orange;
    }
  }
</style>