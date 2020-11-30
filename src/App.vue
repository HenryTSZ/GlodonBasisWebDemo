<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mutations } from 'store'
export default {
  name: 'App',
  methods: {
    resize() {
      mutations.setBodyWidth(document.body.clientWidth)
      mutations.setBodyHeight(document.body.clientHeight)
    },
    debounce(fn, delay = 500) {
      let timer
      return function() {
        let th = this
        let args = arguments
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(function() {
          timer = null
          fn.apply(th, args)
        }, delay)
      }
    }
  },
  mounted() {
    this.resize()
    window.onresize = this.debounce(this.resize)
  }
}
</script>

<style lang="less">
#app {
  background: #fff;
}
</style>
