import Vue from 'vue'
import XnPage from './Pagination/index'
const components = [
  XnPage
]
const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
if (typeof window !== 'undefined' && Vue) {
  install(Vue)
}

