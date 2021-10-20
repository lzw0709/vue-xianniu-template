<template>
  <!-- <div>基本信息</div> -->
  <xn-description title="基本信息">
    <xn-description-item label="订单编号">{{ data.salesCode || '-' }}</xn-description-item>
    <xn-description-item label="订单类型">{{ data.orderType | projectType }}</xn-description-item>
    <xn-description-item label="订单状态">
      {{ orderStatus }}
    </xn-description-item>
    <xn-description-item label="下单账号">
      {{ data.orderAccount || '-' }}
    </xn-description-item>
    <xn-description-item label="所属企业">
      {{ data.orderTenantName || '-' }}
    </xn-description-item>
    <xn-description-item label="下单时间">
      {{ data.createDate || '-' }}
    </xn-description-item>
    <xn-description-item v-if="data.arrivalTime" label="服务时间">
      {{ data.arrivalTime || '-' }}
    </xn-description-item>
    <xn-description-item label="下单来源">
      {{ data.createSource | createSource }}
    </xn-description-item>
  </xn-description>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => { }
    }
  },
  computed: {
    orderStatus() {
      var status = null
      switch (this.data.orderType) {
        case 1: // 维保
          status = 'saleWeibaoOrderStatus'
          break
        case 2: // 支持
          status = 'saleZhichiOrderStatus'
          break
        case 3: // 产品
          status = 'saleProductOrderStatus'
          break
        case 4: // 驻场
          status = 'saleZhuchangOrderStatus'
          break
      }
      return status ? this.$options.filters[status](this.data.orderStatus) : '-'
    }
  }
}
</script>

<style>

</style>
