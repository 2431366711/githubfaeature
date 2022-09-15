<template>
    <div class="submit">
        <p class="titleprofilter">发布文章</p>
        <div class="bottom">
   
   <va-alert color="info" class="mb-4" v-if="isShow">
    {{message}}
  </va-alert>       
  <va-form >
     <va-input
     style="width:100%"
      h-7
      label="文章标题"
      v-model="title"
      class="mt-4"

     
    />
      <va-input
     style="width:100%"
      h-7
      label="文章作者"
      v-model="username"
      class="mt-4"
      :rules="[value => (value && value.length > 1) || '不能为空']"
      disabled
    />

    <va-input
     style="width:100%"
      h-7
      label="文章类型"
      v-model="typename"
      class="mt-4"

    />
     
    
    </va-form>
<!-- 富文本 -->


    <div style="border: 1px solid #ccc">
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
      <Editor
        style="height: 400px; overflow-y: hidden;"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="handleCreated"
      />
     
    </div>


     <va-button :rounded="false" color="warning" class="mr-4 mb-2 mt-4" @click="btnClcik">发布文章</va-button>
        </div>
    </div>
</template>

<script>
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { ElMessage } from 'element-plus'
import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import axios from '../utils/axios'

      // import E from "wangeditor"
    export default {
        components:{ Editor, Toolbar},
         setup(){
                      //富文本
   const editorRef = shallowRef()

    // 内容 HTML
    const valueHtml = ref('<p>hello</p>')

    // 模拟 ajax 异步获取内容
    onMounted(() => {
        setTimeout(() => {
            valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
        }, 1500)
    })

    const toolbarConfig = {}
    const editorConfig = { placeholder: '请输入内容...' }

    // 组件销毁时，也及时销毁编辑器
    onBeforeUnmount(() => {
        const editor = editorRef.value
        if (editor == null) return
        editor.destroy()
    })

    const handleCreated = (editor) => {
      editorRef.value = editor // 记录 editor 实例，重要！
    }
            let message = ref('')
            let isShow = ref(false)
            let title = ref('')
            let content = ref('')
            let username = ref('')

            onMounted (()=>{
              axios.get('http://localhost:3007/my/userinfo').then(res=>{
              username.value = res.data.data.username
            })
           })
            let typename= ref('')
            const btnClcik = ()=>{
              axios.post('http://localhost:3007/my/article/add',{
                title:title.value,
                content:valueHtml.value,
                type:typename.value
              }).then(res=>{
                console.log(res)
                // isShow.value = true
                message.value= res.data.message
                if(res.data.status==0){
                ElMessage({
                showClose: true,
                message: message.value,
                type: 'success',
                 })
                }
                else{
                  ElMessage({
                showClose: true,
                message: message.value,
                type: 'warning',
                 })
                }
               
                 title.value = ''
                 content.value = ''
                 typename.value = ''
              },err=>{
                console.log(err)
                
                message.value= "身份认证错误"
                 ElMessage({
                showClose: true,
                message: message.value,
                type: 'warning',
                 })
              })
            }




            return{
                title,
                content,
                username,
                typename,
        
                btnClcik,
                isShow,
                message,
                   editorRef,
      valueHtml,
      mode: 'default', // 或 'simple'
      toolbarConfig,
      editorConfig,
      handleCreated
            }
         }
    }
</script>

<style lang="less" scoped>
.submit{
  overflow-y:auto;
    width: 100%;
    height: 100%;
    padding: 20px;
}
 .titleprofilter{
    font-size: 26px;
    font-weight: bold;
    padding:20px 0px ;
  }
  .va-form{
    margin-bottom: 30px;
  }
</style>