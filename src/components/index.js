import Vue from 'vue'

const components = [
]
const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
if (typeof window !== 'undefined' && Vue) {
  install(Vue)
}
