<template>
  <div id="loginBox">
    <div class="loginBox-mask"></div>
    <div class="login-main">
      <div class="login-logo">
        <div class="login-img">logo占位</div>
        <p style="color: #999999;font-size: 22px;">智能语音管理系统</p>
      </div>
      <div class="login_Form" v-model="loginForm">
        <div class="form-detail">
          <p>账号:</p>
          <!--v-model: 数据绑定-->
          <input type="text" placeholder="请输入" v-model="loginForm.userAccount">
        </div>
        <div class="form-detail">
          <p>密码:</p>
          <input type="text" placeholder="请输入" v-model="loginForm.password">
        </div>
        <div>
          <el-button type="primary" class="loginBtn" @click.native.prevent="loginSubmit">登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        loginForm: {
          userAccount: '',
          password: '',
        }
      }
    },
    methods: {
      loginSubmit:function () {
        var that = this;
        console.log(this.loginForm);
        this.$axios.post('/api/login',{userAccount:that.loginForm.userAccount,password:that.loginForm.password}).then((response) =>{
          console.log(response);
          if (response.data().code == 0) {
            console.log('登陆成功')
            localStorage.setItem('userAccount',that.loginForm.userAccount);
            that.$router.push({
              path: '/home_page'
            })
          } else {
            console.log(response.data());
            that.$util.failCallback(response.data(),that);
          }
        }).catch((error) =>{
          console.log(error);
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .loginBox{
    position: fixed;
    display: block;
    z-index: 0;
    top: 0;
    left: 0px;
    width: 100%;
    height: 100%;
    background-image: url(../assets/background.jpg);
    background-size: cover;
    background-position: center;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .loginBox-mask{
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: #000000;
    opacity: .4;
  }
  .login-main{
    background-color: #ffffff;
    opacity: .9;
    width: 555px;
    height: 571px;
  }
  .login-logo{
    .login-img{
      margin-top: 48px;
      height: 84px;
    }
  }
  .login_Form{
    margin-top: 58px;
    .form-detail{
      margin-bottom: 34px;
      p{
        color: #666666;
        font-size: 16px;
        margin-right: 280px;
      }
      .input {
        width: 320px;
        outline: none;
        border: none;
        border-bottom: 2px solid #3e3e5b;
        font-size: 14px;
        padding-top: 12px;
      }
    }
    .loginBtn{
      width: 331px;
      font-size: 20px;
      margin-top: 54px;
    }
  }
  .el-form{width: 350px;margin: 0 auto}

</style>

