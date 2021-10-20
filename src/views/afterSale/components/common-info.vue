<template>
  <div>
    <xn-description label-width="90px">
      <xn-description-item label="售后单编号">{{ info.afterSaleCode || '-' }}</xn-description-item>
      <xn-description-item label="售后类型">
        {{ info.afterSaleType | afterSaleType }}
      </xn-description-item>
      <xn-description-item label="售后状态">
        {{ info.afterSaleStatus | afterSaleStatus }}
      </xn-description-item>
      <xn-description-item label="售后原因">
        {{ info.afterSaleReason || '-' }}
      </xn-description-item>
      <xn-description-item label="申请售后时间">
        {{ info.addTime || '-' }}
      </xn-description-item>
    </xn-description>
    <xn-description title="基本信息" label-width="90px">
      <xn-description-item label="订单编号">
        {{ info.purchaseCode ||'-' }}
      </xn-description-item>
      <xn-description-item label="下单账号">
        {{ info.orderAccount ||'-' }}
      </xn-description-item>
      <xn-description-item label="所属企业">
        {{ info.orderTenantName ||'-' }}
      </xn-description-item>
      <xn-description-item label="下单时间">
        {{ info.createDate || '-' }}
      </xn-description-item>
    </xn-description>
    <xn-description title="支付信息" label-width="90px">
      <xn-description-item label="支付方式">
        {{ payInfoVO.payMethod | payType }}
      </xn-description-item>
      <xn-description-item label="支付单号">
        {{ payInfoVO.payWater || '-' }}
      </xn-description-item>
      <xn-description-item label="支付金额">
        {{ $format.toText(payInfoVO.payNowAmount) }}
      </xn-description-item>
      <xn-description-item label="支付时间">
        {{ payInfoVO.payTime||'-' }}
      </xn-description-item>
    </xn-description>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    rowData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {

    }
  },
  computed: {
    info() {
      const { data, rowData: { orderType }} = this
      let value = null
      if (orderType === 2) {
        value = data
      } else if (orderType === 3) {
        value = data
      }
      return value || {}
    },
    payInfoVO() {
      const { info } = this
      return info && info.payInfoVO ? info.payInfoVO : {}
    }
  }
}
</script>

<style>

</style>
