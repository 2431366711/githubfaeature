<template>

  <div class="communitylist">
    <div class="left">
      <ul @mouseleave="fallHeadercon">
        <li v-for="(item,index) in headerlist" :key="item"  @mouseenter="getHeadercon(item,index)">
          <a href="javascript:;">{{ item }}</a> 
        </li>
        <div class="headercon"  :class="{disappear:isShow}"  :style="{left:leftpositon+'px'}">
            <header-con :info = "array[neededIndex]"></header-con>
          </div>
      </ul>
    </div>
    <div class="right">
        <a href="javascript:;">标签管理</a>
    </div>
  </div>
</template>

<script>
import HeaderCon from './HeaderCon.vue'
import {ref} from 'vue'
export default {
  components:{
    HeaderCon
  },
  setup() {
    const array = [
        ['前端','JAVASCRIPT','VUE','REACT','REACT','REACT','REACT','REACT','REACT','REACT','REACT','REACT','前端','JAVASCRIPT','VUE'],
        ['后端','JAVASCRIPT','VUE','REACT','REACT','REACT','REACT','REACT','REACT','REACT','REACT','REACT','前端','JAVASCRIPT','VUE'],
        ['关注','JAVASCRIPT','VUE','REACT','REACT','REACT','REACT','REACT','REACT','REACT','REACT','REACT','前端','JAVASCRIPT','VUE'],
    ]
    const isShow = ref(true)
    const headerlist = [
      "综合",
      "关注",
      "后端",
      "前端",
      "Andarid",
      "IOS",
      "人工智能",
      "开发工具",
      "代码人生",
      "阅读",
    ];
    let neededIndex = ref(-1)
    let leftpositon = ref(0)
    const getHeadercon = (item,index)=>{
      leftpositon.value = index*50
      if(item === "前端"){
        neededIndex.value = 0
        isShow.value = false
      }
      else if(item ==="后端"){
        neededIndex.value = 1
        isShow.value = false
      }
      else if (item ==="关注"){
        neededIndex.value  = 2
        isShow.value = false
      }
      else{
        neededIndex.value = -1
        isShow.value = true
      }
     
    }
    const fallHeadercon = ()=>{
      isShow.value = true
    }
    return {
      headerlist,getHeadercon,isShow,fallHeadercon,array,
      neededIndex,leftpositon
    };
  },
};
</script>

<style lang="less" scoped>

.disappear{
    display: none;
}
.communitylist {
  width: 1000px;
  height: 100%;

  display: flex;
  justify-content: space-between;
}
.left{
    height: 100%;
   ul{
    position: relative;
    list-style: none;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    li:first-child{
        a{
            color:#3491d2
        }
    }
    li{
     
        margin-right: 25px;
       
     
        a{
           font-size: 14px;
           text-decoration: none;
           font-weight: 400;
           color: #919192;
           cursor: pointer;
        }
        a:hover{
            color:#3491d2
        }
    }
    .headercon{ 
            position: absolute;
            top: 50px;
            left:0px;
    }
   }
}
.right{
   display: flex;
   align-items: center;
   
      a{
        font-size: 14px;
        text-decoration: none;
        font-weight: 400;
        color: #919192;
        cursor: pointer;

       }
      a:hover{
        color:#3491d2;
      }
     } 
  

</style>