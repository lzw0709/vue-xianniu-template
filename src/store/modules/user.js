import { api } from '@/api'
import storage from '@/utils/auth'
import { resetRouter } from '@/router'
import vm from '@/main'
import { appNo, routerAuth } from '@/settings'
const state = {
  token: storage.getToken(),
  roles: [],
  user_info: storage.get('USER_INFO') || {},
  tags: {}
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
    token !== '' ? storage.setToken(token) : storage.removeToken()
  },

  SET_USER_INFO: (state, user_info) => {
    state.user_info = user_info
    user_info !== '' ? storage.set('USER_INFO', user_info) : storage.remove('USER_INFO')
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
  login({ commit }, userInfo) {
    const { username, password, xnToken } = userInfo
    return new Promise((resolve, reject) => {
      if (routerAuth) {
        commit('SET_TOKEN', xnToken)
        resolve()
      } else {
        api.user.login({ loginName: username.trim(), password: password }).then(response => {
          const { data } = response
          commit('SET_TOKEN', data.token)
          commit('SET_USER_INFO', data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      }
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      if (routerAuth) {
        api.ts.getUserRules().then(({ data }) => {
          const obj = {
            permissionList: [''],
            identityType: data.identityType
          }
          const arr = []
          if (data.menus && data.menus.length) {
            const list = vm.$lodash.filter(data.menus, { appCode: appNo })
            list.forEach(item => {
              const { subList, permissionCode } = item
              if (subList && subList.length) {
                subList.forEach(todo => {
                  arr.push(todo.permissionCode)
                })
              }
              arr.push(permissionCode)
            })
          }
          if (arr && arr.length) {
            obj.permissionList = arr
          }
          commit('SET_ROLES', obj)
          resolve({ roles: obj })
        })
      } else {
        commit('SET_ROLES', { permissionList: ['7001_1001'] })
        resolve({ roles: { permissionList: [''] }})
      }
    })
  },
  // user logout
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      commit('SET_USER_INFO', '')
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

      storage.removeToken()
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
