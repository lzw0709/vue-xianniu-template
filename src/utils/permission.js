// import Vue from 'vue'
// import store from '@/store'
/**
 * @param {Array} value
 * @param {Array} permissionList // 数据权限集合
 * @param {String} specialRole // 特殊权限角色 例：1、2
 * @returns {Boolean}
 */

const HAS_PERMISSION = [1, 2] // 特殊角色
export default function permission(value = [], permissionList = [], specialRole = null) {
  if (!permissionList.length) {
    throw new Error(`缺少权限吗集合`)
  }

  // 如果是特殊角色 true
  if (HAS_PERMISSION.includes(specialRole) && specialRole) return true

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
// Object.defineProperty(Vue.prototype, '$permission', { value: permission })
