import Vue from 'vue'
import Router from 'vue-router'

// 登录
import Login from '../view/Login'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})
//  判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
  // console.log(to)
  if (to.matched.some(res => res.meta.requireAuth)) { // 判断是否需要登录权限
    if (localStorage.getItem('userAccount')) { // 判断是否登录
      next()
    } else { // 没登录则跳转到登录界面
      next({
        path: '/login'
        // query: {
        //     redirect: to.fullPath
        // } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})
