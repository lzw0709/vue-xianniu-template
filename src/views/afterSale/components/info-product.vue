<template>
  <div>
    <xn-description title="申请售后产品信息">
      <xn-table
        border
        :data="list"
        :columns="listHeader"
        :auto-height="false"
      />
    </xn-description>
    <xn-description title="售后原因">
      <xn-empty v-if="!data.afterSaleReasonOther" desc="暂无售后原因" />
      <p v-else>
        {{ data.afterSaleReasonOther }}
      </p>
    </xn-description>
    <xn-description title="收货人信息" label-width="90px">
      <xn-description-item label="收货人姓名">{{ data.receiverName ||'-' }}</xn-description-item>
      <xn-description-item label="收货人手机号">{{
        data.receiverMobile || "-"
      }}</xn-description-item>
      <xn-description-item label="收货地址" span="3">{{
        `${data.regionName || '-'} ` + `${data.receiverAddr || '-'}`
      }}</xn-description-item>
    </xn-description>
    <xn-description title="退入物流信息" label-width="90px">
      <template #more>
        <el-button type="success" size="mini">查看物流</el-button>
      </template>
      <xn-description-item label="物流公司">{{ data.logisticsCompany ||'-' }}</xn-description-item>
      <xn-description-item label="物流单号">{{ data.logisticsCode || '-' }}</xn-description-item>
    </xn-description>
    <xn-description title="金额信息" label-width="90px">
      <el-form ref="form" :model="form" :rules="rules" label-width="100px">
        <el-form-item label="商品金额">{{
          $format.toText(data.partOutlay) || "-"
        }}</el-form-item>
        <el-form-item label="运费">{{
          $format.toText(data.logisticsOutlay) || "-"
        }}</el-form-item>
        <el-form-item label="订单总额">{{ $format.toText(data.orderFee) || "-" }}</el-form-item>
        <el-form-item label="退款金额" prop="value">
          <el-input
            v-if="data.afterSaleStatus === 0"
            v-model="form.value"
            style="width: 200px"
            clearable
            placeholder="退款金额"
            @change="onChangePrice"
          >
            <span slot="suffix">￥</span>
          </el-input>
          <template v-else>
            {{ $format.toText(data.refundFee) }}
          </template>
        </el-form-item>
      </el-form>
    </xn-description>
    <xn-description v-if="data.afterSaleStatus === 1" title="驳回原因" label-width="90px">
      <div>{{ data.rejectReason ||'-' }}</div>
    </xn-description>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      // 生成换新单
      // listHeader: [
      //   { label: '备件厂商', prop: '' },
      //   { label: '备件名称', prop: '' },
      //   { label: '备件 PN', prop: '' },
      //   { label: '备件描述', prop: '' },
      //   { label: '备件SN', prop: '' }
      // ],
      //   // 基于SN
      //   listHeader: [
      //     { label: '备件厂商', prop: '' },
      //     { label: '备件名称', prop: '' },
      //     { label: '备件 PN', prop: '' },
      //     { label: '备件描述', prop: '' },
      //     { label: '备件SN', prop: '' },
      //     { label: '金额', prop: '' }
      //   ],
      //   // 基于产品整单
      //   listHeader: [
      //     { label: '备件厂商', prop: '' },
      //     { label: '备件名称', prop: '' },
      //     { label: '备件 PN', prop: '' },
      //     { label: '备件规格', prop: '' },
      //     { label: '备件描述', prop: '' },
      //     { label: '数量', prop: '' },
      //     { label: '备件单价', prop: '' }
      //   ],
      // list: [],
      form: {
        value: ''
      },
      rules: {
        value: [
          {
            pattern: this.$reg.checkNumber,
            message: '请填写正确数字类型',
            trigger: ['change', 'blur']
          },
          {
            min: 0,
            type: 'number',
            message: '最少不能小于0',
            trigger: ['change', 'blur'],
            transform: (value) => this.$options.filters.strToNum(value)
          },
          {
            type: 'number',
            validator: (rule, value, callback) => {
              if (value > this.data.orderFee) {
                callback(new Error('最大不能超过总金额'))
              } else {
                callback()
              }
            },
            trigger: ['change', 'blur'],
            transform: (value) => this.$options.filters.strToNum(value)
          }
        ]
      }
    }
  },
  computed: {
    listHeader() {
      let val = []
      const {
        data,
        data: { refundType = 1 }
      } = this
      if (data && refundType === 1) {
        val = [
          { label: '备件厂商', prop: 'partVendor' },
          { label: '备件名称', prop: 'partName' },
          { label: '备件 PN', prop: 'pn' },
          { label: '备件规格', prop: 'configName' },
          { label: '备件描述', prop: 'partDesc' },
          { label: '数量', prop: 'numberOfPart' },
          {
            label: '备件单价',
            prop: '',
            render: (h, { row }) => {
              return h('span', this.$format.toText(row.unitPrice))
            }
          }
        ]
      } else if (data && refundType === 2) {
        val = [
          { label: '备件厂商', prop: 'partVendor' },
          { label: '备件名称', prop: '' },
          { label: '备件 PN', prop: 'pn' },
          { label: '备件描述', prop: 'partDesc' },
          { label: '备件SN', prop: 'sn' },
          {
            label: '金额',
            prop: '',
            render: (h, { row }) => {
              return h('span', this.$format.toText(row.unitPrice))
            }
          }
        ]
      }
      return val
    },
    list() {
      const {
        data,
        data: {
          refundType = 1,
          pmsAfterSalePartDetailList = [],
          pmsAfterSalePartPnDetailList = []
        }
      } = this
      let val = []
      console.log(refundType)
      if (data && refundType === 1 && pmsAfterSalePartPnDetailList) {
        val = pmsAfterSalePartPnDetailList
      }
      if (data && refundType === 2 && pmsAfterSalePartDetailList) {
        val = pmsAfterSalePartDetailList
      }
      return val
    }
  },
  methods: {
    onChangePrice(val) {
      this.$emit('on-changeprice', val)
    }
  }
}
</script>

<style>
</style>
