import Vue from 'vue'
function Enums(enums) {
  this.enums = enums
}
Enums.prototype.getList = function(value) {
  const isArr = value instanceof Array // 数组判断
  const list = []
  /* 传空数组直接返回 */
  if (isArr && value.length === 0) {
    return list
  }
  for (const key in this.enums) {
    if (value && value.length > 0) {
      if (value.indexOf(this.enums[key].code) > -1) {
        list.push(this.enums[key])
      }
    } else {
      list.push(this.enums[key])
    }
  }
  return list
}
Enums.prototype.getLabel = function(value = '') {
  if (value === '' || value < 0) {
    return ''
  }
  const valueList = []
  const valueIsList = value instanceof Array
  for (const key in this.enums) {
    if (valueIsList) {
      if (
        value.includes(this.enums[key].value) ||
            value.includes(Number(this.enums[key].value))
      ) {
        valueList.push(this.enums[key].label)
      }
    // eslint-disable-next-line eqeqeq
    } else if (this.enums[key].value == value) {
      return this.enums[key].label
    }
  }

  return valueIsList ? valueList.join('、') : ''
}

const enums = {
  
}
Object.defineProperty(Vue.prototype, '$enums', { value: enums })
