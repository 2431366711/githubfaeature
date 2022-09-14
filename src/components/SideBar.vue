<template>
    <div class="large">
      <!-- <div class="authorinfo">
        <author-information :authorin ="array"></author-information>
      </div> -->
      <div class="ad">
        <ad-component></ad-component>
      </div>
      <!-- <div class="similararticle">
       <similar-article :articlein ="array.recent_topics"></similar-article>
     
        
      </div>
      <div class="notuse"></div>
      <div class="category" :class="{categoryfix : isShow}">
        <article-catalogue :artificion="articleinfo"></article-catalogue>
      </div> -->
    </div>

</template>

<script>
import AdComponent from './AdComponent'
export default{
    components:{
        AdComponent
    },
    setup(){

    }
}
</script>

<style lang="less" scoped>
.large{
  position: relative;
}
.categoryfix{
  position: fixed;
  top: 20px;
}
.authorinfo{
    box-sizing: border-box;
    
    width: 100%;
    background: white;
    margin-bottom: 20px;
    padding: 10px 15px;
}
.ad{
    height: 800px;
    width: 100%;

    margin-bottom: 20px;
}

</style>