// import Vue from "vue";

/* 物流信息 */
const logistics = {
  trajectory: {
    url: '/express/rejectOrder', // 物流实时轨迹查询
    type: 'post',
    method: { method: '', requestBaseUrl: 'AUTH' }
  },
  asd: {
    url: '/express/rejectOrder1', // 物流实时轨迹查询
    type: 'post',
    method: { method: '' }
  },
  ffff: {
    url: '/express/rejectOrder2', // 物流实时轨迹查询
    type: 'post',
    method: { method: '', requestBaseUrl: 'BBBB' }
  }
}

const objTpUrls = {
  logistics: { ...logistics }
}

export default objTpUrls
