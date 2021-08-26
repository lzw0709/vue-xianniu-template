import storage from 'xianniu-tools/utils/storage'

const TokenKey = 'xnToken'

export default {
  getToken: () => storage.get(TokenKey),
  setToken: token => storage.set(TokenKey, token),
  removeToken: () => storage.remove(TokenKey),
  ...storage
}
