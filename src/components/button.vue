<template>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="primary" icon="el-icon-search">搜索</el-button>
  <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
  <!--按钮组-->
  <el-button-group>
    <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
    <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
  </el-button-group>
  <el-button-group>
    <el-button type="primary" icon="el-icon-edit">编辑</el-button>
    <el-button type="primary" icon="el-icon-share">分享</el-button>
    <el-button type="primary" icon="el-icon-delete">删除</el-button>
  </el-button-group>
</template>

<script>
    export default {
        name: "button"
    }
</script>

<style scoped>

</style>
