<template>
    <div class="settingleft">
       <va-sidebar-item
     v-for="(route, idx) in items" :key="idx"
    :active="isRouteActive(route)"
    @click="setRouteActive(route)"
  >
    <va-sidebar-item-content>
      <va-sidebar-item-title>
        {{ route.name}}
      </va-sidebar-item-title>
    </va-sidebar-item-content>
  </va-sidebar-item>
    </div>
</template>

<script setup>
import {useRouter} from 'vue-router'
import {ref} from 'vue'
 const router = useRouter()
  let items = [
        { name: '个人资料' ,path:'profiler'},
        { name: '账号管理' ,path:'account'},
        { name: '发布文章' ,path:'submit'},
        { name: '管理文章' ,path:'delete'},
        { name: '管理评论' ,path:'comment'},
        { name: '更换头像' ,path:'image'},
      ]
    let activeRouteName = ref('个人资料')
    let isRouteActive =function (route){
        return activeRouteName.value === route.name
    }

    const setRouteActive = function(route) {
      activeRouteName.value = route.name
      router.push("/setting/"+route.path)  
    }
</script>

<style lang="less" scoped>
.settingleft{
    height: 100%;
    width: 100%;
}
</style>