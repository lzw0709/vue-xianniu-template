<template>
  <xn-description class="pl-20 pr-20" label-width="90px" title="采购信息">
    <xn-description-item label="采购单号">
      {{ form.purchaseCode || "-" }}
    </xn-description-item>
    <xn-description-item label="下单时间">{{
      form.createDate || "-"
    }}</xn-description-item>
    <xn-description-item label="采购截止时间">{{
      form.cutOfTime || "-"
    }}</xn-description-item>
    <xn-description-item :label="label">{{ time(form) }}</xn-description-item>
    <xn-description-item label="地区">{{
      form.regionName || "-"
    }}</xn-description-item>
    <xn-description-item label="报价是否含税">{{
      form.taxIncluded | taxIncluded
    }}</xn-description-item>
    <xn-description-item label="采购单来源">
      {{ form.purchaseSourceNew | purchaseResource }}
    </xn-description-item>
    <xn-description-item label="采购项目">{{
      form.projectType | projectType
    }}</xn-description-item>
    <xn-description-item label="采购企业">{{
      form.buyerTenantName || "-"
    }}</xn-description-item>
    <xn-description-item label="采购描述">
      {{ form.purchaseDesc || "-" }}
    </xn-description-item>
    <xn-description-item label="结算方式">
      {{ form.paymentWay | settlementType }}
    </xn-description-item>
    <xn-description-item label="采购规则">
      {{ form.chooseRule | chooseRule }}
    </xn-description-item>
    <xn-description-item label="备注信息">
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
        var t = ''
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
