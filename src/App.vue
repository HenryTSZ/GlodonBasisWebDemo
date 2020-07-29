<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'App',
  methods: mapMutations(['setBodyWidth', 'setBodyHeight']),
  mounted() {
    this.setBodyWidth(document.body.clientWidth)
    this.setBodyHeight(document.body.clientHeight)
    window.onresize = () => {
      this.setBodyWidth(document.body.clientWidth)
      this.setBodyHeight(document.body.clientHeight)
    }
  }
}
</script>

<style lang="less">
#app {
  background: #fff;
}
</style>
