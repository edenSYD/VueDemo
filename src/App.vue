<template>
  <div id="app">
    <p>是不是有问题</p>
    <router-view ></router-view>
  </div>
</template>

<script>
  export default {
  name: 'App'
}
</script>

<style lang="scss">
 $background:#cccccc;
  body{
    background: $background;
  }
</style>
