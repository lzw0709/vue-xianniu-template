import store from '@/store'

function checkPermission(el, binding) {
  const { value } = binding
  const roles = store.getters && store.getters.roles

  if (value) {
    let hasPermission = null
    const permissionRoles = value
    if (value instanceof Array) {
      if (value.length > 0) {
        hasPermission = roles.some(role => {
          return permissionRoles.includes(role)
        })
      }
    } else {
      hasPermission = roles.includes(permissionRoles)
    }
    if (!hasPermission) {
      el.parentNode && el.parentNode.removeChild(el)
    }
  } else {
    throw new Error(`需要填写权限，比如这样： v-permission="['admin','editor']"`)
  }
}

export default {
  inserted(el, binding) {
    checkPermission(el, binding)
  },
  update(el, binding) {
    checkPermission(el, binding)
  }
}
