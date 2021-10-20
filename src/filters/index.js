/* eslint-disable eqeqeq */

import enums from '@/utils/enums'
// 字符串转换为数字
export const strToNum = (value, type = 'number') => {
  value = (value + '').replace(/(^\s*)|(\s*$)/g, '') // 先去除前后空格，排除都是空格的情况
  switch (type) {
    case 'number':
      value = value || value === 0 ? Number(value) : ''
      break
  }
  return value
}
// 结算方式
export const settlementType = (val) => {
  if (val == undefined) return '-'
  return enums.SETTLEMENT_TYPE.getLabel(val) || '-'
}
// 采购项目类型
export const projectType = (val) => {
  if (val == undefined) return '-'
  return enums.PROJECT_TYPE.getLabel(val) || '-'
}
// 采购单来源
export const purchaseResource = (val) => {
  if (val == undefined) return '-'
  return enums.PURCHASE_RESOURCE.getLabel(val) || '-'
}
// 报价来源
export const quoteSoure = (val) => {
  if (val == undefined) return '-'
  return enums.QUOTE_SOURE.getLabel(val) || '-'
}
// 报价是否含税
export const taxIncluded = (val) => {
  if (val == undefined) return '-'
  return enums.TAXINCLUDED.getLabel(val) || '-'
}
// 采购规则
export const chooseRule = (val) => {
  if (val == undefined) return '-'
  return enums.CHOOSE_RULES.getLabel(val) || '-'
}

// 报价单状态
export const quoteStatus = (val) => {
  if (val == undefined) return '-'
  return enums.CG_QUOTE_STATUS.getLabel(val) || '-'
}

// 支付状态
export const payStatus = (val) => {
  if (val == undefined) return '-'
  return enums.PAY_STATUS.getLabel(val) || '-'
}
// 订单状态
export const orderStatus = (val) => {
  if (val == undefined) return '-'
  return enums.ORDER_STATUS.getLabel(val) || '-'
}
// 销售单  来源
export const createSource = (val) => {
  if (val == undefined) return '-'
  return enums.CREATE_SOURCE.getLabel(val) || '-'
}
// 支付方式
export const payType = (val) => {
  if (val == undefined) return '-'
  return enums.PAY_TYPE.getLabel(val) || '-'
}
// 销售单订单状态 - 产品订单
export const saleProductOrderStatus = (val) => {
  if (val == undefined) return '-'
  return enums.SALE_PRODUCT_ORDER_STATUS.getLabel(val) || '-'
}
// 销售单订单状态 - 支持订单
export const saleZhichiOrderStatus = (val) => {
  if (val == undefined) return '-'
  return enums.SALE_ZHICHI_ORDER_STATUS.getLabel(val) || '-'
}
// 销售单订单状态 - 维保订单
export const saleWeibaoOrderStatus = (val) => {
  if (val == undefined) return '-'
  return enums.SALE_WEIBAO_ORDER_STATUS.getLabel(val) || '-'
}
// 销售单订单状态 - 驻场订单
export const saleZhuchangOrderStatus = (val) => {
  if (val == undefined) return '-'
  return enums.SALE_ZHUCHANG_ORDER_STATUS.getLabel(val) || '-'
}
// 采购单报价管理-列表 报价状态
export const dealFlag = (val) => {
  if (val == undefined) return '-'
  return enums.QUOTE_STATUS.getLabel(val) || '-'
}
// 售后类型
export const afterSaleType = (val) => {
  if (val == undefined) return '-'
  return enums.AFTERSALE_TYPE.getLabel(val) || '-'
}
// 售后状态
export const afterSaleStatus = (val) => {
  if (val == undefined) return '-'
  return enums.AFTERSALE_STATUS.getLabel(val) || '-'
}
