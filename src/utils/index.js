import Vue from 'vue'
import dayjs from 'dayjs'
import format from './formatPrice'
import storage from 'good-storage'
import cookie from './auth'
export function throttle(func, wait) {
  let previous = 0
  return function() {
    const now = Date.now()
    const context = this
    const args = arguments
    if (now - previous > wait) {
      func.apply(context, args)
      previous = now
    }
  }
}
export function debounce(func, wait) {
  let timer
  return function() {
    const context = this // 这边的 this 指向谁?
    const args = arguments // arguments中存着e

    if (timer) clearTimeout(timer)

    const callNow = !timer

    timer = setTimeout(() => {
      timer = null
    }, wait)

    if (callNow) func.apply(context, args)
  }
}
/**
 * This is just a simple version of deep copy
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 * @param {Object} source
 * @returns {Object}
 */
export function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'deepClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach(keys => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}
const isImg = (filePath) => {
  if (typeof filePath !== 'string' || !filePath) return
  var strFilter = '.jpeg|.gif|.jpg|.png|.bmp|.pic|.svg|'
  if (filePath.indexOf('.') > -1) {
    var p = filePath.lastIndexOf('.')
    var strPostfix = filePath.substring(p, filePath.length) + '|'
    strPostfix = strPostfix.toLowerCase()
    if (strFilter.indexOf(strPostfix) > -1) {
      return true
    }
  }
  return false
}

// 字节格式化
const bytesToSize = (bytes) => {
  if (bytes === 0) return '0 B'
  var k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i]
}
// 获取树结构父级 回显
const getParent = (data2, nodeId2, key = 'id', children = 'list', pid = 'parentId') => {
  var arrRes = []
  if (data2.length === 0) {
    if (nodeId2) {
      arrRes.unshift(data2)
    }
    return arrRes
  }
  const rev = (data, nodeId) => {
    for (var i = 0, length = data.length; i < length; i++) {
      const node = data[i]
      // eslint-disable-next-line eqeqeq
      if (node[key] == nodeId) {
        arrRes.unshift(node)
        rev(data2, node[pid]) // 注意这里是传入的tree，不要写成data了，不然遍历的时候一直都是node.children,不是从最顶层开始遍历的
        break
      } else {
        if (node[children]) {
          rev(node[children], nodeId)
        }
      }
    }
    return arrRes.map(item => item[key])
  }
  arrRes = rev(data2, nodeId2)
  return arrRes
}
// 根据某个key 对数组去重合并
const arrReset = (arr = [], key = 'categoryCode', value = 'categoryName') => {
  var map = {}; var result = []

  for (var i = 0; i < arr.length; i++) {
    var ai = arr[i]
    if (!map[ai[key]]) {
      result.push({
        [key]: ai[key],
        [value]: ai[value],
        children: [ai]
      })
      map[ai[key]] = ai
    } else {
      for (var j = 0; j < result.length; j++) {
        var dj = result[j]
        if (dj[key] === ai[key]) {
          dj.children.push(ai)
          break
        }
      }
    }
  }
  return result
}
const tools = {
  isImg,
  dayjs,
  format,
  deepClone,
  storage,
  bytesToSize,
  cookie,
  throttle,
  debounce,
  getParent,
  arrReset
}
Object.defineProperty(Vue.prototype, '$tools', { value: tools })
export default tools
// export {
//   fileType
// }
