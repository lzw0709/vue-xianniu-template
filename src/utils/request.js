import axios from 'axios'
import store from '@/store'
import qs from 'qs'
import tools from '@/utils'
import { MessageBox, Message, Loading } from 'element-ui'
import domain from '@/env-config/index'
// import vm from '@/main'
let loadingInit = null
const loadConfig = { fullscreen: true, text: '玩命加载中...', background: 'rgba(0,0,0,0)', customClass: 'xn-loading' }
let requestConfig = {
  showLoading: true,
  requestBaseUrl: '',
  responseType: '',
  method: ''
}

const instance = axios.create({
  baseURL: domain.apiUrl,
  timeout: 30000
})
function resetConfig() {
  requestConfig = {
    showLoading: true,
    requestBaseUrl: '',
    responseType: '',
    method: ''
  }
}
function toggleLoading(value = false) {
  store.commit('loading/TOGGLE_LOADING', value)
}
instance.interceptors.request.use(
  config => {
    let _config = config.config
    _config = Object.assign(requestConfig, _config)
    if (_config.method === 'formData') {
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
      config.data = qs.stringify(config.data)
    }
    if (_config.responseType === 'blob') {
      config.responseType = 'blob'
    }
    if (store.getters.token) {
      config.headers['xnToken'] = tools.cookie.getToken()
    }
    if (_config.showLoading) {
      loadingInit = Loading.service(loadConfig)
      toggleLoading(true)
    }
    switch (_config.requestBaseUrl) {
      case 'AUTH':
        config.baseURL = domain.apiUrl
        break
      default:
        config.baseURL = domain.authUrl
        break
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    const res = response.data
    if (loadingInit) {
      loadingInit.close()
    }
    toggleLoading(false)
    // 重置
    resetConfig()
    if (response.config.responseType !== 'blob') {
      if (res.code !== 200) {
        if (res.code === 401 || res.code === 501) {
          MessageBox.confirm('你的登录状态已过期，请重新登录', '提示', {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            store.dispatch('user/resetToken').then(() => {
              // vm.$router.replace(`/login?redirect=${location.hash.substring(1)}`)
              window.open(process.env.VUE_APP_LOGIN)
            })
          })
        }
        const _msg = res.msg || '未知错误'
        Message({
          message: _msg,
          type: 'error',
          duration: 5 * 1000
        })
        /** code 300 登录过期 */
        return Promise.reject(new Error(_msg))
      } else {
        return res
      }
    } else {
      return res
    }
  },
  error => {
    if (loadingInit) {
      loadingInit.close()
    }
    toggleLoading(false)
    // 重置
    resetConfig()
    Message({
      message: error.msg || error,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
class Http {
  static async get(url, params, config = {}) {
    return await instance.get(url, { params, config })
  }
  static async post(url, params, config = {}) {
    return await instance.post(url, params, { config })
  }
  static async upload(url, params, config = {}) {
    const formData = new FormData()
    formData.append('file', params)
    return await instance.post(url, formData, { config })
  }
  static async download(url, params, config = { responseType: 'blob', showLoading: false }) {
    return await instance.post(url, params, { config })
  }
}

export default Http
