export function getQueryStringArgs(url) {
  url = url == null ? window.location.href : url
  var qs = url.substring(url.lastIndexOf('?') + 1)
  var args = {}
  var items = qs.length > 0 ? qs.split('&') : []
  var item = null
  var name = null
  var value = null
  for (var i = 0; i < items.length; i++) {
    item = items[i].split('=')
    // 用decodeURIComponent()分别解码name 和value（因为查询字符串应该是被编码过的）。
    name = decodeURIComponent(item[0])
    value = decodeURIComponent(item[1])

    if (name.length) {
      args[name] = value
    }
  }

  return args
}

export function isDev() {
  return process.env.VUE_APP_CURRENTMODE === 'dev'
}
