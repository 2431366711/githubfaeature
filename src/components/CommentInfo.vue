<template>
    <div class="comment">
        <div class="title">
            <p>评论</p>
        </div>
        <div class="words">
        <img :src="image" alt="">
       <el-input
       v-model="textarea"
       :rows="3" 
        type="textarea"
        placeholder="请输入你的评论"
          />
        
        </div>
        <div class="button">
            <el-button type="primary" plain @click="btnClick"> 提交评论</el-button>
        </div>
        <div class="commentinforma">
            <template v-for="item in array" :key="item">
                <user-comment :commentinfo="item" :image="imageurl"></user-comment>
            </template>
           
        </div>
    </div>
</template>

<script>
import axios from '../utils/axios'
import UserComment from '../components/UserComment'
import {ref} from 'vue'
    export default {
        props:{
            commentinfo:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        components:{
            UserComment
        },
        setup(props){
            let textarea = ref('')
            let idarticles = ref(0)
            let title = ref('')
            let array = ref([])
            let image = ref('https://p3-passport.byteimg.com/img/mosaic-legacy/3791/5070639578~180x180.awebp')
            let imageurl = ref('')
            const getCommentInfo = ()=>{
             setTimeout(()=>{
                
                axios.get('http://localhost:3007/api/comment/id/'+props.commentinfo.idarticles).then(res=>{
                console.log(res)
                array.value = res.data.data
                console.log(array.value)
                console.log('props.commentinfo.iduser',array.value[0].iduser)
                 axios.get('http://localhost:3007/api/userinfo/' + array.value[0].iduser).then(res=>{
                  console.log('userinfo',res)
                  imageurl.value = res.data.data.image
                
            })
            })
            

            },100)
            }
            const getImage =()=>{
                setTimeout(()=>{
                 axios.get('http://localhost:3007/my/userinfo/').then(res=>{
                  console.log('userinfo',res)
                  image.value = res.data.data.image
                
            },err=>{
                console.log(err)
                image.value = "https://p3-passport.byteimg.com/img/mosaic-legacy/3791/5070639578~180x180.awebp"
            })
                },100)
            }
            getCommentInfo()
            getImage()
            
       
            const btnClick =()=>{
                 setTimeout(()=>{
                    idarticles.value = props.commentinfo.idarticles
                    title.value = props.commentinfo.title
                    console.log(idarticles.value,title.value)
                axios.post('http://localhost:3007/my/comment/add',{
                    content:textarea.value,
                    idarticles:idarticles.value,
                    title:title.value
                    }).then(res=>{
                        console.log(res)
                        alert(res.data.message)
                        textarea.value= ''
                        getCommentInfo()
                    })
                 },100)
            
            }
            return{
                textarea,
                btnClick,
                array,
                image,
                imageurl
            }
        }
    }
</script>

<style lang="less" scoped>
.comment{
    padding: 20px;
}
.title{
    p{
        font-size: 24px;
        font-weight: bold;
    }
}
.words{
    display: flex;
    margin-bottom: 10px;
    align-items: center;
    img{
        height: 50px;
        width: 50px;
        border-radius: 50%;
        margin-right: 50px;
    }
}
.button{
   width: 100%;
   display: flex;
   flex-direction: row-reverse; 
   margin-bottom:20px
}
</style>