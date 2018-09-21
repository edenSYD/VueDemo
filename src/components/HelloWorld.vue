<template>
  <div class="hello">
    <span :title="msg">
      鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </span>
    <p v-if="seen">现在你看到我了</p>
    <!--<ol>-->
      <!--<todo-item-->
        <!--v-for="item in groceryList"-->
        <!--v-bind:todo="item"-->
        <!--v-bind:key="item.id">-->
      <!--</todo-item>-->
    <!--</ol>-->
    <p>{{msg}}</p>
    <input v-model="msg">
    <button @click="reverseMessage">逆转消息</button>
  </div>

</template>

<script>
  // Vue.component('todo-item',{props: ['todo'],
  // template:'<li>{{todo.text}}</li>'})
export default {
  name: 'HelloWorld',
  data () {
    return {
      seen: true,
      msg: '页面加载于' + new Date().toLocaleString(),
      todos: [
        {text: '学习JavaScript'},
        {text: '学习Vue'},
        {text:'整个牛逼项目玩一下'}
      ],
      groceryList:[
        {id: 0, text: '蔬菜'},
        {id: 1, text: '奶酪'},
        {id: 2, text: '随便吃点汉堡'}
      ]
    }
  },
  methods: {
    reverseMessage: function () {
      this.msg = this.msg.split('').reverse().join('')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
