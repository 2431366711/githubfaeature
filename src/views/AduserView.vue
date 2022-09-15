<template>
    <div class="user">
       <div class="title">
         <h1>用户信息</h1>
       </div>
       <div class="content">
  
    <el-table :data="tableData" height="600" style="width: 1200px; border:1px solid #eee">
    <el-table-column prop="date" label="用户id" width="130" />
    <el-table-column prop="name" label="用户名" width="200" />
    <el-table-column prop="address" label="用户手机号" width="200" />
    <el-table-column prop="address" label="用户邮箱" width="200"/>
    <el-table-column prop="address" label="用户性别" width="130"/>
    <el-table-column prop="address" label="用户微信" width="200"/>
    <el-table-column prop="address" label="用户github" width="200"/>
    <el-table-column fixed="right" label="操作" width="120">
      <template #default>
        <el-button link type="primary" size="small" @click="handleClick"
          >Detail</el-button
        >
        <el-button link type="primary" size="small">Edit</el-button>
      </template>
    </el-table-column>
    </el-table>

       </div>
    </div>
</template>

<script setup>
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<style lang="less" scoped>
.user{
  padding: 20px;
}
h1{
    font-size: 26px;
    margin-bottom: 30px;
}
.content{
    height: 100px;

}
</style>