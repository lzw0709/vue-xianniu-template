import Vue from 'vue'
import store from '@/store'
// 基础配置 路由权限开关
import { routerAuth } from '@/settings'
// 生成的权限Code
import AUTH_CODE from '@/auth/index'
/**
 * @param {Array} value 传过来的值
 * @param {Array} permissionList // 数据权限集合
 * @param {String} specialRole // 特殊权限角色 例：1、2
 * @returns {Boolean}
 */

const HAS_PERMISSION = [1, 2] // 特殊角色
export function permission(value = []) {
  const { permissionList, identityType } = store.getters && store.getters.roles
  if (!permissionList.length) {
    throw new Error(`缺少权限吗集合`)
  }
  if (typeof value !== 'string' && !Array.isArray(value) && value !== true) {
    throw new Error(`必须是数组类型或者字符串类型，['auth'] or 'auth'`)
  }
  // 默认值给个 true ,默认有权限，防止dom被移除掉
  if (value === true) return true
  // 如果是数组类型 就遍历找到对应权限码
  if (value && Array.isArray(value)) {
    value = value.map(item => {
      if (AUTH_CODE[item]) {
        return AUTH_CODE[item]
      } else if (item === 0) {
        return 0
      }
    })
  }

  // 如果是开发环境 返回true
  if (!routerAuth) return true

  // 如果是特殊角色 true
  if ((HAS_PERMISSION.includes(identityType) && identityType)) return true
  // 如果存在
  if (value) {
    let hasPermission = null
    const permissionRoles = value
    if (value && value instanceof Array && value.length > 0) {
      hasPermission = permissionList.some(role => {
        return permissionRoles.includes(role)
      })
    } else {
      hasPermission = permissionList.includes(permissionRoles)
    }
    return hasPermission
  } else {
    throw new Error(`需要填写权限，比如这样： v-permission="['1001','1002']"`)
  }
}
// 把权限码挂到vue
Object.defineProperty(Vue.prototype, '$auth', { value: AUTH_CODE })
// 把判断权限的方法挂到vue
Object.defineProperty(Vue.prototype, '$permission', { value: permission })
