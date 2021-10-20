<template>
  <!-- 订单金额 -->
  <xn-description title="订单金额" label-width="90px" middle>
    <!-- 支持 -->
    <xn-description-item v-if="data.orderType === 2" label="服务产品费用" span="3">
      {{ $format.toText(data.servicePartMoney) }}
    </xn-description-item>
    <!-- 产品 -->
    <template v-if="data.orderType === 3">
      <xn-description-item
        label="产品费"
      >{{ $format.toText(data.partOutlay) }}(含税)</xn-description-item>
      <xn-description-item
        label="物流费用"
      >{{ $format.toText(data.logisticsOutlay) }}(含税)</xn-description-item>
    </template>
    <xn-description-item label="订单金额">
      <span class="text-primary"> {{ $format.toText(data.orderMoney ) }}</span>
    </xn-description-item>
  </xn-description>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  methods: {

  }
}
</script>

<style>
</style>
