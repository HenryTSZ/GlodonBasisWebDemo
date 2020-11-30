import Vue from 'vue'

// 通过 Vue.observable 创建一个可响应的对象
export const store = Vue.observable({
  bodyWidth: 0,
  bodyHeight: 0
})

// 定义 mutations 修改属性
export const mutations = {
  setBodyWidth(value) {
    store.bodyWidth = value
  },
  setBodyHeight(value) {
    store.bodyHeight = value
  }
}
