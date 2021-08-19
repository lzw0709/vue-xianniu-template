// import { getUserRules } from '@/api/user'

import tools from '@/utils'
import { resetRouter } from '@/router'

const state = {
  token: tools.cookie.getToken(),
  roles: [],
  user_info: tools.storage.get('USER_INFO') || {},
  tags: {}
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
    tools.cookie.setToken(token)
  },

  SET_USER_INFO: (state, user_info) => {
    state.user_info = user_info
    user_info !== '' ? tools.storage.set('USER_INFO', user_info) : tools.storage.remove('USER_INFO')
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_TAGS: (state, tags) => {
    state.tags = Object.assign(state.tags, tags)
  }
}

const actions = {
  // user login
  login({ commit }, { xnToken }) {
    // const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN', xnToken)
      // commit('SET_USER_INFO', xnToken)
      resolve()
      // login({ loginName: username.trim(), password: password }).then(response => {
      //   const { data } = response
      //   commit('SET_TOKEN', data.token)
      //   commit('SET_USER_INFO', data)

      //   resolve()
      // }).catch(error => {
      //   reject(error)
      // })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      commit('SET_ROLES', { permissionList: [''] })
      resolve({ roles: { permissionList: [''] }})
      // getUserRules().then(({ data }) => {
      //   data.permissionList = data.permissionList.length ? data.permissionList : ['']
      //   commit('SET_ROLES', data)
      //   resolve({ roles: data })
      // })
    })
  },
  // user logout
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      commit('SET_USER_INFO', '')
      tools.cookie.removeToken()
      resetRouter()
      // reset visited views and cached views
      // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
      dispatch('tagsView/delAllViews', null, { root: true })

      resolve()
    })
  },
  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])

      tools.cookie.removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
