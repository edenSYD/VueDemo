import {
  Message,
  Container
} from 'element-ui'
// 功能：接口错误处理
// 入参:res.data ，this,回调函数
var failCallback = function(data, that, cb) {
  if (data.code === 2102) {
    // 清用户信息
    localStorage.removeItem('username')
    Message({
      type: 'info',
      message: '登录超时，请重新登录'
    })
    // 跳转登录页面
    setTimeout(() => {
      that.$router.push({
        path: '/login'
      })
    }, 1000)
  } else {
    if (cb) {
      cb(that)
    } else {
      Message({
        type: 'error',
        message: data.msg
      })
    }
  }
}
// 表单验证
var formRule = {
  // 不能为空
  blank: {
    required: true,
    message: '必填项',
    trigger: 'blur'
  },
  blank2: {
    required: true,
    message: '必填项',
    trigger: 'change'
  },
  userAccount: {
    pattern: /^[A-Za-z0-9]{3,8}$/,
    message: '长度在 3 到 8 个字符',
    trigger: 'blur'
  },
  password: {
    // pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/,
    pattern: /^[A-Za-z0-9]{6,16}$/,
    message: '长度在 6 到 16 个字符',
    trigger: 'blur'
  }
}

var LABEL_WIDTH = '80px'
export {
  failCallback,
  LABEL_WIDTH,
  formRule
}
