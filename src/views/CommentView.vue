<template>
    
    <div class="commentview">
        <div class="title">
            <p>评论管理</p>
        </div>
  <el-table :data="tableData" style="width: 100%">
    <!-- <el-table-column prop="commentid" label="commentid" width="100"/> -->
  <el-table-column prop="title" label="文章标题" width="300" />
  
    <el-table-column prop="mycomment" label="我的评论" />
   
    <el-table-column fixed="right" label="选项" width="120">
      <template #default="scope">
        <el-button
          link
          type="primary"
          size="small"
          @click.prevent="deleteRow(scope.$index)"
        >
          删除
        </el-button>
         <el-button
          link
          type="primary"
          size="small"
          @click.prevent="routeRow(scope.$index)"
        >
          进入文章
        </el-button>
      </template>
    </el-table-column>
  </el-table>
    </div>
</template>

<script>
import {ref} from 'vue'
import axios from '../utils/axios'
import { useRouter } from 'vue-router'
    export default {
         setup(){
            let tableData = ref([])
            let array = ref([])
           const getComment = ()=>{
         axios.get('http://localhost:3007/my/comment/').then(res=>{
                console.log(res.data.data)
                tableData.value =[]
                for(let i=0;i<res.data.data.length;i++){
                    tableData.value.push({
                        title:res.data.data[i].title,
                        mycomment:res.data.data[i].content,
                        commentid:res.data.data[i].commentid,
                        idarticles:res.data.data[i].idarticles
                    })
                }
            })
           }
            getComment()
            console.log('table',tableData.value)
             const deleteRow = (index) => {
                console.log(tableData.value[index])
                axios.get('http://localhost:3007/my/comment/delete/'+tableData.value[index].commentid).then(res=>{
                    console.log(res)
                    getComment()
                })
             }
             const router = useRouter()
             const routeRow =(index)=>{
                 router.push("/article/"+tableData.value[index].idarticles)
             }
            return{
                tableData,
                array,
                deleteRow,
                getComment,
                routeRow
            }
         }
    }
</script>

<style lang="less" scoped>
.commentview{
    padding: 20px;
}
.title{
    margin-bottom: 20px;
    p{
        font-size: 24px;
        font-weight: bold;
    }
}
a{
    margin-left: 10px;
    font-size:10px;
    color:orange;
}
</style>