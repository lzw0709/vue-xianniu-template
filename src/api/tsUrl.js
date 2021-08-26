// {url:'接口地址',type:'请求类型',method:'格式'}
/* 工程师资源池 */
const engineer = {
  osList: {
    url: '/tsAdEngineerResource/osList', // 自有工程师列表
    type: 'post'
  },
  ceList: {
    url: '/tsAdEngineerResourceRela/ceList', // 外采工程师列表
    type: 'post'
  }
}
const serveManage = {
  abnormalList: {
    url: '/serviceForm/seList', // 服务单管理列表查询
    type: 'post'
  },
  delServiceItem: {
    url: '/serviceForm/delServiceItem', // 删除服务项
    type: 'post',
    method: { method: 'formData' }
  },
  getList: {
    url: '/serviceForm/getList', // 获取列表
    type: 'get'
  }
}

const objUrls = {
  engineer: { ...engineer },
  serveManage: { ...serveManage }
}

// Object.defineProperty(Vue.prototype, "$apiUrl", { value: objUrls });
export default objUrls
