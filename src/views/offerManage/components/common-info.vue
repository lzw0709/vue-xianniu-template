<template>
  <xn-description label-width="90px" title="基本信息">
    <xn-description-item label="报价单号">
      {{ form.quoteCode || "-" }}
    </xn-description-item>
    <xn-description-item label="采购单号">{{
      form.purchaseCode || "-"
    }}</xn-description-item>
    <xn-description-item label="报价时间">{{
      form.quoteTime || "-"
    }}</xn-description-item>

    <xn-description-item :label="label">{{ time(form) }}</xn-description-item>
    <xn-description-item label="地区">{{
      form.regionName || "-"
    }}</xn-description-item>
    <xn-description-item label="报价是否含税">{{
      form.taxIncluded | taxIncluded
    }}</xn-description-item>
    <xn-description-item label="采购单来源">
      {{ form.quoteSoure | quoteSoure }}
    </xn-description-item>
    <xn-description-item label="报价有效期至">
      {{ form.termOfValidity || "-" }}
    </xn-description-item>
    <xn-description-item label="报价单状态">{{
      form.quoteStatus | quoteStatus
    }}</xn-description-item>
    <xn-description-item label="采购描述">{{
      form.purchaseDesc || "-"
    }}</xn-description-item>
    <xn-description-item label="结算方式">
      {{ form.paymentWay | settlementType }}
    </xn-description-item>
    <xn-description-item label="采购规则">
      {{ form.chooseRule | chooseRule }}
    </xn-description-item>
    <xn-description-item label="报价截止时间">
      {{ form.cutOfTime || "-" }}
    </xn-description-item>
    <xn-description-item label="备注信息" span="2">
      {{ form.purchaseRemark || "-" }}
    </xn-description-item>
  </xn-description>
</template>

<script>
export default {
  props: {
    form: {
      type: Object,
      default: () => {}
    },
    projectType: {
      type: Number,
      default: 0
    }
  },
  computed: {
    label() {
      return this.projectType === 3 ? '要求到货时间' : '服务时间'
    },
    time() {
      return (row) => {
        var t = '-'
        if (this.projectType === 1 || this.projectType === 4) {
          t = `${row.startTime}~${row.endTime}`
        } else {
          t = row.arrivalTime
        }
        return t
      }
    }
  }
}
</script>

<style>
</style>
