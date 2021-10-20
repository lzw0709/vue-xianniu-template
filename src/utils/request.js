import Request from 'xianniu-request'
import domain from '@/env-config'
import store from '@/store'
import { MessageBox } from 'element-ui'

const http = new Request({
  gateway: [
    { name: 'baseUrl', url: domain.apiUrl },
    { name: 'AUTH', url: domain.authUrl }
  ]
})

http.$on('error', function(res) {
  console.log('res', res)
})
http.$on('expire', async(res) => {
  // 过期
  if (res.code === 401 || res.code === 501) {
    await store.dispatch('user/logout')
    MessageBox({
      type: 'warning',
      title: '提示',
      message: '登录已过期，请重新登录！',
      confirmButtonText: '重新登录',
      showClose: false,
      closeOnPressEscape: false,
      closeOnClickModal: false
    }).then(async() => {
      // router.push(`/login?redirect=${router.app.$route.fullPath}`)
      if (process.env.CURRENTMODE !== 'dev') {
        window.parent.location.href = process.env.VUE_APP_LOGIN
      }
    })
  }
})
export default http
