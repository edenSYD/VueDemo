<template>
  <div id="app">
    <!--外层容器,垂直从上而下-->
    <el-container>
      <!--顶栏容器-->
      <el-header><header-nav></header-nav></el-header>
      <!--<el-container>-->
        <!--&lt;!&ndash;侧边栏容器&ndash;&gt;-->
        <el-aside width="50px">
          <!-- 侧边栏 -->
          <!--<left-nav></left-nav>-->
        </el-aside>
         <el-main>
        <!--主要区域内容-->
        <router-view></router-view>
        </el-main>
        <!--&lt;!&ndash;底栏内容&ndash;&gt;-->
        <!--<el-footer></el-footer>-->
      <!--</el-container>-->
    </el-container>
    <!-- 登录页 -->
    <!--<router-view ></router-view>-->
  </div>
</template>

<script>
  import TopNav from './components/topbar'
  import LeftNav from './components/snav-component'
export default {
  name: 'App',
  components: {
    headerNav: TopNav,
    leftNav: LeftNav
  }
}
</script>

<style>

</style>
