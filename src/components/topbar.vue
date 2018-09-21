<template>
    <div class="topBar">
  <el-button class="fr mr30 mt15" type="primary" size="small" @click="loginout">退出登录</el-button>
    </div>
</template>

<script>
    export default {
      data (){
        return {
          name: "topBar"
        }
      },
      methods: {
        loginOut(){

        }
      },
      mounted: {

      }
    }
</script>

<style lang="scss" scoped>
  .topBar{
    height: 60px;
    width: 100px;
  }
</style>
