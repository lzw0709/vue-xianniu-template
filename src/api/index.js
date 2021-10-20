import http from '@/utils/request'
import Vue from 'vue'
import xt from './xt'
const collectionApi = {}
const apis = function(item, parentKey, suffix) {
  collectionApi[parentKey] = {}
  for (const key in item) {
    const { type, url, showLoading = true, method = {}} = item[key]
    collectionApi[parentKey][key] = params =>
      http[type](`${suffix}${url}`, params, {
        showLoading: showLoading,
        ...method
      })
  }
}
for (const key in xt) {
  apis(xt[key], key, '/pms')
}
Object.defineProperty(Vue.prototype, '$api', {
  value: collectionApi
})
export {
  collectionApi as api
}
