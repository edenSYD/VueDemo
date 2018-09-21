import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueResource from 'vue-resource'

import Welcome from '../components/welcome'
import TopBar from '../components/topbar'
import snavComponent from '../components/snav-component'
Vue.use(Router)
Vue.use(VueResource)
Vue.use(ElementUI)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/topBar',
      name: 'TopBar',
      component: TopBar
    },
    {
      path: '/navtopComponent',
      name: 'navtopComponent',
      component: snavComponent
    }
  ]
})
