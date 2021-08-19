import Vue from 'vue'
import storage from 'good-storage'
import 'normalize.css/normalize.css'
import Element from 'element-ui'
import 'xianniu-elementui-theme/element-variables.scss'
import '@/styles/index.scss'

import App from './App'
import store from './store'
import router from './router'
import '@/utils/reg'
import '@/api/index.js'

import '@/components'

import './icons'
import './permission'

import * as directive from './directive'

import '@/utils/enums'

import '@/utils'
import '@/utils/reg'

// import './utils/error-log'

import mixins from '@/mixins'

Object.keys(directive).forEach(key => {
  Vue.directive(key, directive[key])
})
Vue.use(Element, {
  size: storage.get('size') || 'small'
})
Vue.mixin(mixins)
// 修改全局默认配置：点击遮罩层关闭dialog、ESC关闭dialog
Element.Dialog.props.closeOnClickModal.default = false
Element.Dialog.props.closeOnPressEscape.default = false
Vue.config.productionTip = false
const vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
export default vm
