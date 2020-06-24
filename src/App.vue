<!--
 * @Descripttion: 文件说明
 * @version: 0.0.1
 * @Author: gaojiapeng
 * @Date: 2020-06-22 10:50:46
 * @LastEditors: gaojiapeng
 * @LastEditTime: 2020-06-24 11:13:05
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
