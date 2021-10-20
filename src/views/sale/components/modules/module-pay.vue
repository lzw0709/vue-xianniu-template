<template>
  <!-- <div>支付信息</div> -->
  <xn-description title="支付信息">
    <template #more>
      <div v-permission="authKey">
        <el-button
          v-if="orderStatus"
          type="success"
          size="mini"
          @click="onConfirmCollect"
        >确认收款</el-button>
      </div>
    </template>
    <xn-description-item label="支付方式">
      {{ data.payInfoVO && data.payInfoVO.payMethod | payType }}
    </xn-description-item>
    <xn-description-item label="应收金额">
      {{ data.payInfoVO && this.$format.toText(data.payInfoVO.payAmount) }}
    </xn-description-item>
    <xn-description-item label="已收金额">
      {{ data.payInfoVO && this.$format.toText(data.payInfoVO.payNowAmount) }}
    </xn-description-item>
    <xn-description-item label="支付时间">
      {{ (data.payInfoVO && data.payInfoVO.payTime) || "-" }}
    </xn-description-item>
    <xn-description-item label="交易流水">
      {{ (data.payInfoVO && data.payInfoVO.payWater) || "-" }}
    </xn-description-item>
    <xn-description-item label="结算方式">
      {{ data.payInfoVO && data.payInfoVO.paymentWay | settlementType }}
    </xn-description-item>
    <xn-description-item label="支付状态">
      {{ data.payInfoVO && data.payInfoVO.payFlag | payStatus }}
    </xn-description-item>
    <!-- <xn-description-item label="备注" span="2">
      {{ data.payInfoVO && data.payInfoVO.payRemark || "-" }}
    </xn-description-item> -->
    <xn-description-item label="支付凭证" span="3">
      <xn-upload
        v-if="data.payInfoVO && data.payInfoVO.pmsAccessoryList.length"
        disabled
        :file-list.sync="data.payInfoVO.pmsAccessoryList"
      />
      <span v-else>暂无凭证</span>
    </xn-description-item>
  </xn-description>
</template>

<script>
export default {
  props: {
    authKey: {
      type: String,
      default: ''
    },
    data: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    apiName() {
      let name = ''
      switch (this.data.orderType) {
        case 1:
          // 维保
          //   /salesOrder/confirmReceiptSalesMaintenance
          name = 'confirmReceiptSalesMaintenance'
          break
        case 2:
          // 支持
          //   /salesOrder/confirmReceiptSupportOrder
          name = 'confirmReceiptSupportOrder'
          break
        case 3:
          // 产品
          name = 'confirmReceiptPartOrder'
          break
        case 4:
          // 驻场
          // /salesOrder/confirmReceiptOnSiteOrder
          name = 'confirmReceiptOnSiteOrder'
          break
      }
      return name
    },
    orderStatus() {
      var status = null
      switch (this.data.orderType) {
        case 1: // 维保
          status = this.data.orderStatus === 1
          break
        case 2: // 支持
          status = this.data.orderStatus === 1
          break
        case 3: // 产品
          status = this.data.orderStatus === 1
          break
        case 4: // 驻场
          status = this.data.orderStatus === 1
          break
      }
      return status
    }
  },
  methods: {
    onConfirmCollect() {
      this.$confirm('是否确认收款？', '提示', { type: 'warning' }).then(
        async() => {
          const { code, msg } = await this.$api.shoukuan[this.apiName]({
            id: this.data.id
          })
          if (code === 200) {
            this.$message.success(msg)
            //   this.fnGetInfo()
            this.$emit('confirm-coll')
          }
        }
      )
    }
  }
}
</script>

<style>
</style>
