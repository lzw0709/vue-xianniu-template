import Cookies from 'js-cookie'

const TokenKey = 'xnToken'

export default {
  getToken: () => Cookies.get(TokenKey),
  setToken: (token) => Cookies.set(TokenKey, token),
  removeToken: () => Cookies.remove(TokenKey),
  Cookies
}
