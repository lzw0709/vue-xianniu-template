import Vue from 'vue'
import 'normalize.css/normalize.css'
import Element from 'element-ui'
import 'xianniu-elementui-theme/element-variables.scss'
import '@/styles/index.scss'
/* 全局自动化注册组件 */
import 'xianniu-components'
import App from './App'
import store from './store'
import router from './router'

import '@/api/index.js'

import './icons'
import './permission'

import * as directive from './directive'

import '@/utils/enums'

import utils from 'xianniu-tools'

import mixins from '@/mixins'

Object.keys(directive).forEach(key => {
  Vue.directive(key, directive[key])
})
Vue.use(Element, {
  size: 'small'
})
Vue.mixin(mixins)
Vue.use(utils)
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
