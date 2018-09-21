// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' // 引入vue 模块
import App from './App' // 引入vue组件
import router from './router' // 引入路由配置


Vue.config.productionTip = false // 关闭生产模式下给出的提示

new Vue({ //创建一个Vue的实例
  el: '#app',// 挂载id,这个实例下所有的内容都会在index.html 一个id为app的div下显示
  router,// 注入路由配置。
  components: { App },//配置根模板 即打开页面显示那个组件
  template: '<App/>'// 注入组件
})
