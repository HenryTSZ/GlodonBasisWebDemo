import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bodyWidth: 0,
    bodyHeight: 0
  },
  mutations: {
    setBodyWidth(state, value) {
      state.bodyWidth = value
    },
    setBodyHeight(state, value) {
      state.bodyHeight = value
    }
  },
  actions: {}
})
