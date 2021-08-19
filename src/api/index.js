import http from '@/utils/request'
import Vue from 'vue'
import objUrls from './tsUrl'
import objTpUrls from './tpUrl'

const collectionApi = {}
const apis = function(item, parentKey, suffix) {
  collectionApi[parentKey] = {}
  for (const key in item) {
    /* console.log(key)
    console.log(item[key]) */
    const { type, url, showLoading, method = {}} = item[key]
    collectionApi[parentKey][key] = params =>
      http[type](`${suffix}${url}`, params, {
        showLoading: showLoading,
        ...method
      })
  }
}

for (const key in objUrls) {
  apis(objUrls[key], key, 'ts')
}

for (const key in objTpUrls) {
  apis(objTpUrls[key], key, 'tp')
}

Object.defineProperty(Vue.prototype, '$apiUrl', {
  value: collectionApi
})
// Object.defineProperty(Vue.prototype, "$apiUrl", { value: objUrls });

// export default
