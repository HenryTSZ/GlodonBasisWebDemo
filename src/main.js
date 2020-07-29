import 'babel-polyfill'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI, { size: 'small' })

import Page from 'rootPlugins/Page'
import NoData from 'rootPlugins/NoData'

const plugins = [Page, NoData]

plugins.forEach(item => {
  Vue.component(item.name, item)
})

import 'rootAssets/iconfont/iconfont.css'
import 'rootAssets/reset.css'
import 'rootAssets/style.less'

import api from 'api'
import axios from 'axios'
import { $get, $post } from 'rootUtils/request'

import utils from 'rootUtils'

Vue.prototype.$api = api
Vue.prototype.$get = $get
Vue.prototype.$post = $post
Vue.prototype.$axios = axios
Vue.prototype.$utils = utils

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
