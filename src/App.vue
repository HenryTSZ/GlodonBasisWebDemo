<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mutations } from 'store'
export default {
  name: 'App',
  mounted() {
    mutations.setBodyWidth(document.body.clientWidth)
    mutations.setBodyHeight(document.body.clientHeight)
    window.onresize = () => {
      mutations.setBodyWidth(document.body.clientWidth)
      mutations.setBodyHeight(document.body.clientHeight)
    }
  }
}
</script>

<style lang="less">
#app {
  background: #fff;
}
</style>
