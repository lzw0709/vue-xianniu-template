import Vue from 'vue'
import XnProjectList from './XnProjectList/index'

const components = [
  XnProjectList
]
const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
if (typeof window !== 'undefined' && Vue) {
  install(Vue)
}
