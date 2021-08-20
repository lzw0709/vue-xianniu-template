import Request from 'xianniu-request'
import domain from '@/env-config'
const http = new Request({
  token: '1231223',
  gateway: [
    { name: 'baseUrl', url: domain.apiUrl },
    { name: 'AUTH', url: 'asdasd' },
    { name: 'BBBB', url: 'ggggggg' }
  ]
})
console.log(http)
http.$on('expire', function(res) {
  // 过期
  console.log(res, self)
})
export default http
