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
  // eslint-disable-next-line eqeqeq
  if (value === '' || value == undefined) {
    return '-'
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
  // 结算方式
  SETTLEMENT_TYPE: new Enums({
    0: { label: '现结(验收前)', value: 1 },
    1: { label: '现结(验收后)', value: 2 },
    2: { label: '账期(月付)', value: 3 },
    3: { label: '账期(季付)', value: 4 },
    4: { label: '账期(半年付)', value: 5 },
    5: { label: '账期(年付)', value: 6 },
    6: { label: '背靠背', value: 7 },
    7: { label: '灵活用工', value: 8 }
  }),
  // 产品类型
  PROJECT_TYPE: new Enums({
    0: { label: '维保', value: 1 },
    1: { label: '支持', value: 2 },
    2: { label: '产品', value: 3 },
    3: { label: '驻场', value: 4 }
  }),
  // 采购单来源
  PURCHASE_RESOURCE: new Enums({
    0: { label: '平台', value: 1 },
    1: { label: '服务企业', value: 2 }
  }),
  // 采购单报价管理- 报价来源
  QUOTE_SOURE: new Enums({
    0: { label: '合作企业', value: 0 },
    1: { label: '平台', value: 1 }
  }),
  // 报价是否含税
  TAXINCLUDED: new Enums({
    0: { label: '不含税', value: 0 },
    1: { label: '含税', value: 1 }
  }),
  // 采购规则
  CHOOSE_RULES: new Enums({
    0: { label: '价低者得', value: 1 },
    1: { label: '综合评选', value: 2 }
  }),
  // 报价单状态
  QUOTE_STATUS: new Enums({
    0: { label: '已报价', value: 0 },
    1: { label: '已成单', value: 1 },
    2: { label: '未成单', value: 2 }
  }),
  // 采购单报价状态
  CG_QUOTE_STATUS: new Enums({
    0: { label: '未报价', value: 0 },
    1: { label: '已报价', value: 1 }
  }),
  // 订单状态
  ORDER_STATUS: new Enums({
    0: { label: '待付款', value: 0 },
    1: { label: '待商家收款', value: 1 },
    2: { label: '待发货', value: 2 },
    3: { label: '待收货', value: 3 },
    4: { label: '已完成', value: 4 },
    5: { label: '已取消', value: -1 }
  }),
  // 支付状态
  PAY_STATUS: new Enums({
    0: { label: '未支付', value: 0 },
    1: { label: '已支付', value: 1 },
    2: { label: '支付中', value: 2 }
  }),
  // 采购单
  CREATE_SOURCE: new Enums({
    0: { label: '采购单', value: 1 },
    1: { label: '询价单', value: 2 }
  }),
  // 支付方式
  PAY_TYPE: new Enums({
    0: { label: '企业支付', value: 0 },
    1: { label: '线下转账', value: 1 }
  }),
  // 销售订单状态 支持订单（0待收款；1待确认收款；2待派单；3服务中；4等待客户验收；5已完成；-1已取消）
  SALE_ZHICHI_ORDER_STATUS: new Enums({
    0: { label: '待收款', value: 0 },
    1: { label: '待确认收款', value: 1 },
    2: { label: '待派单', value: 2 },
    3: { label: '服务中', value: 3 },
    4: { label: '等待客户验收', value: 4 },
    5: { label: '已完成', value: 5 },
    6: { label: '已取消', value: -1 }
  }),
  // 销售订单状态  产品订单（0待收款；1待确认收款；2待发货；3已发货；4已完成；-1已取消）
  SALE_PRODUCT_ORDER_STATUS: new Enums({
    0: { label: '待收款', value: 0 },
    1: { label: '待确认收款', value: 1 },
    2: { label: '待发货', value: 2 },
    3: { label: '已发货', value: 3 },
    4: { label: '已完成', value: 4 },
    6: { label: '已取消', value: -1 }
  }),
  // 销售订单状态  维保订单（0待收款；1待确认收款；2已完成；）
  SALE_WEIBAO_ORDER_STATUS: new Enums({
    0: { label: '待收款', value: 0 },
    1: { label: '待确认收款', value: 1 },
    2: { label: '已完成', value: 2 }
  }),
  // 销售订单状态  驻场订单（0待付款；1待商家收款；2已完成；）
  SALE_ZHUCHANG_ORDER_STATUS: new Enums({
    0: { label: '待付款', value: 0 },
    1: { label: '待商家收款', value: 1 },
    2: { label: '待派单', value: 2 },
    3: { label: '已完成', value: 3 }
  }),
  CHECK_STATUS: new Enums({
    0: { label: '待验收', value: 0 },
    1: { label: '验收通过', value: 1 },
    2: { label: '验收驳回', value: 2 }
  }),
  // 售后状态
  AFTERSALE_STATUS: new Enums({
    0: { label: '待处理', value: 0 },
    1: { label: '已拒绝', value: 1 },
    2: { label: '处理中/待发货', value: 2 },
    3: { label: '待收货', value: 3 },
    4: { label: '已完成', value: 4 },
    5: { label: '已撤销', value: 5 }
  }),
  // 售后类型
  AFTERSALE_TYPE: new Enums({
    0: { label: '退款', value: 1 },
    1: { label: '换货', value: 2 },
    2: { label: '退款退货', value: 3 }
  })

}
Object.defineProperty(Vue.prototype, '$enums', { value: enums })
export default enums
