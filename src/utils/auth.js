import storage from 'good-storage'

const TokenKey = 'xnToken'

export default {
  getToken: () => storage.get(TokenKey),
  setToken: token => storage.set(TokenKey, token),
  removeToken: () => storage.remove(TokenKey),
  get: key => storage.get(key),
  remove: key => storage.remove(key),

  storage
}
