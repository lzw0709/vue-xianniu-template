
const purchHall = {
  list: {
    url: '/purchaseDemandHall/listHall',
    type: 'post'
  },
  detail: {
    url: '/purchaseDemandHall/hallDetail',
    type: 'post'
  },
  // 报价
  offer: {
    url: '/purchaseDemandHall/hallQuote',
    type: 'post'
  },
  // 报价产品列表
  quoteList: {
    url: '/purchaseDemandHall/productQuoteList',
    type: 'post'
  }
}
// 采购单报价管理
const purchaseQuote = {
  list: {
    url: '/purchaseQuote/list',
    type: 'post'
  },
  detail: {
    url: '/purchaseQuote/quoteCheckDetail',
    type: 'post'
  }
}
// 销售
const sale = {
  list: {
    url: '/salesOrder/salesPartList',
    type: 'post'
  },
  detail: {
    url: '/salesOrder/salesPartDetail',
    type: 'post',
    method: { method: 'formData' }
  },
  // 详情-产品明细列表
  detailSnList: {
    url: '/salesOrder/salesPartDetailSnList',
    type: 'post'
  },
  // 提交凭证
  commitVoucher: {
    url: '/salesOrder/commitVoucher',
    type: 'post'
  },
  // 添加发货信息
  addLogistics: {
    url: '/salesOrder/addLogistics',
    type: 'post'
  },
  // 列表点击查看 产品信息
  partInfo: {
    url: '/salesOrder/partInfo',
    type: 'post',
    method: { method: 'formData' }
  },
  // 确认收款
  confirmReceiptPartOrder: {
    url: '/salesOrder/confirmReceiptPartOrder',
    type: 'post',
    method: { method: 'formData' }
  }

}
const saleZhichi = {
  list: {
    url: '/salesOrder/salesSupportList',
    type: 'post'
  },
  // 详情
  detail: {
    url: '/salesOrder/salesSupportDetail',
    type: 'post',
    method: { method: 'formData' }
  },
  // 列表服务详情
  serviceInfo: {
    url: '/salesOrder/serviceInfo',
    type: 'post',
    method: { method: 'formData' }
  },
  // 支持订单销售列表-服务项列表
  serviceItemList: {
    url: '/salesOrder/serviceItemList',
    type: 'post'
  },
  sendOrder: {
    url: '/salesOrder/sendOrder',
    type: 'post'
  },
  // 提交服务报告
  submitReport: {
    url: '/salesOrder/submitReport',
    type: 'post'
  }
}
const saleWeibao = {
  list: {
    url: '/salesOrder/salesMaintenanceList',
    type: 'post'
  },
  detail: {
    url: '/salesOrder/salesMaintenanceDetail',
    type: 'post',
    method: { method: 'formData' }
  },
  deviceList: {
    url: '/salesOrder/deviceList',
    type: 'post'
  }
}

const saleZhuchang = {
  list: {
    url: '/salesOrder/salesOnSiteOrderList',
    type: 'post'
  },
  engList: {
    url: '/salesOrder/osList',
    type: 'post'
  },
  // 派单
  sendOrderOnSite: {
    url: '/salesOrder/sendOrderOnSite',
    type: 'post'
  },
  detail: {
    url: '/salesOrder/salesOnSiteOrderDetail',
    type: 'post',
    method: { method: 'formData' }
  }
}

const shoukuan = {
  // 确认收款 - 产品
  confirmReceiptPartOrder: {
    url: '/salesOrder/confirmReceiptPartOrder',
    type: 'post',
    method: { method: 'formData' }
  },
  // 驻场
  confirmReceiptOnSiteOrder: {
    url: '/salesOrder/confirmReceiptOnSiteOrder',
    type: 'post',
    method: { method: 'formData' }
  },
  // 维保
  confirmReceiptSalesMaintenance: {
    url: '/salesOrder/confirmReceiptSalesMaintenance',
    type: 'post',
    method: { method: 'formData' }
  },
  // 支持
  confirmReceiptSupportOrder: {
    url: '/salesOrder/confirmReceiptSupportOrder',
    type: 'post',
    method: { method: 'formData' }
  }
}

const afterSale = {
  list: {
    url: '/salesOrderSynergy/pageList',
    type: 'post'
  },
  detail: {
    url: '/salesOrderSynergy/afterSaleDetails',
    type: 'post',
    method: { method: 'formData' }
  },
  // 产品信息
  afterSalesInfo: {
    url: '/salesOrderSynergy/afterSalesInfo',
    type: 'post'
  },
  // 同意申请
  agreementApply: {
    url: '/salesOrderSynergy/agreementApply',
    type: 'post'
  },
  // 驳回申请
  reject: {
    url: '/salesOrderSynergy/reject',
    type: 'post'
  },
  // 确认收货并生成换新单
  confirmAddRenew: {
    url: '/salesOrderSynergy/confirmAddRenew',
    type: 'post',
    method: { method: 'formData' }
  }
}
export default {
  purchHall,
  purchaseQuote,
  sale,
  saleZhichi,
  saleWeibao,
  shoukuan,
  saleZhuchang,
  afterSale
}

