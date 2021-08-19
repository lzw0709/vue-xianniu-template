// import Vue from "vue";

/* 物流信息 */
const logistics = {
  trajectory: {
    url: '/express/rejectOrder', // 物流实时轨迹查询
    type: 'post',
    method: { method: '' }
  }
}

const objTpUrls = {
  logistics: { ...logistics }
}

export default objTpUrls
