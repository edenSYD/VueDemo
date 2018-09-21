<template>
  <div id="login">
    <el-form :model="loginForm">
      <h2>Ray商城登录</h2>
      <el-form-item>
        <!--v-model: 数据绑定-->
        <el-input :model="loginForm.username" name="username" placeholder="请输入用户名" auto-complete="on"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input :model="loginForm.password" name="password" placeholder="请输入密码" auto-complete="on"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        loginForm: {
          username: '',
          password: '',
        }
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .el-input {
    width: 300px;
  }
</style>
