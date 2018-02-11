<template>
  <div class="app">
    <div class="bar">
      <router-link :to="{name: 'home'}">首页</router-link>
      <router-link :to="{name: 'test'}">test</router-link>
    </div>
    <transition name="router">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .bar {
    background: green;
    margin: 20px 0;
    padding: 10px;
    color: #fff;
    a {
      color: #fff;
      padding: 0 10px;
      text-decoration: none;
    }
  }

  .router-enter-to, .router-leave {
    transition: opacity 1.5s;
  }
  .router-enter, .router-leave-to {
    opacity: 0;
  }
</style>