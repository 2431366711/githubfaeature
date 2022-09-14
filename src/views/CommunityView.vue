<template>
     <div class="mainlist">
        
        <div class="header-top">
           <community-header></community-header>
        </div>
        <div class="header-bottom">
            <community-list></community-list>
        </div>
        <div class="bottom">
        <div class="list">
             <community-main></community-main>
        </div>
        <div class="sidebar">
            <community-sidebar></community-sidebar>
        </div>
        </div>
       
    </div>
    <footer-con></footer-con>
</template>

<script>
import FooterCon from '../components/FooterCon.vue'
import CommunityHeader from '../components/community/CommunityHeader'
import CommunityList from '../components/community/CommunityList'
import CommunityMain from '../components/community/CommunityMain'
import CommunitySidebar from '../components/community/CommunitySidebar'
export default{
    components:{
        CommunityHeader,
        CommunityList,
        CommunityMain,
        CommunitySidebar,
        FooterCon
    },
    setup(){

    }
}

</script>

<style lang="less" scoped>
.mainlist{
   height: 100%;
   background: #eeee;
   .header-top{
    background: white;
    height: 64px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #eef1f0;
    border-top: 1px solid #eef1f0;
}
.header-bottom{
     background: white;
    box-shadow: 2px 2px 2px 0px #eeee;
    height: 50px;
    display: flex;
     
    justify-content: center; 
    margin-bottom: 20px; 
}
.bottom{
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 1000px;
    margin: 0 auto;
    border-bottom: 1px solid #eef1f0;
}
.list{
     background: white;
    width: 700px;
    height: 100%;
    
}
.sidebar{
    width: 250px;
    height: 100px;
    background: whitesmoke;
}
}

</style>