<template>
  <div class="app-container">
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <xn-search
        :form-data="formSearch"
        @on-search="onSearch"
        @on-reset="onReset"
      />
    </el-card>

    <el-card class="mt-20" shadow="always" :body-style="{ padding: '20px' }">
      <xn-table
        :data="list"
        :columns="listHeader"
        :get-list="fnGetList"
        :page="pageQuery"
        @handle-buttons="handleMoreBtns"
      />
    </el-card>
    <service-info :show.sync="isShowService" :row-data="row" />
    <zhichi-info :show.sync="isShowInfo" :row-data="row" />
  </div>
</template>

<script>
import serviceInfo from './components/service-info'
import zhichiInfo from './components/zhichi-info'
export default {
  components: { serviceInfo, zhichiInfo },
  data() {
    return {
      isShowService: false,
      isShowInfo: false,
      formSearch: [
        // {
        //   label: '商品名称',
        //   type: 'input',
        //   placeholder: '请填写商品名称',
        //   prop: ''
        // },
        {
          label: '订单号',
          type: 'input',
          placeholder: '请填写订单号',
          prop: 'salesCode'
        },
        {
          label: '订单状态',
          placeholder: '选择订单状态',
          type: 'select',
          data: this.$enums.SALE_ZHICHI_ORDER_STATUS.getList(),
          prop: 'orderStatus'
        },
        {
          label: '下单日期',
          type: 'daterange',
          options: {
            start: 'orderTimeLeft',
            end: 'orderTimeRight'
          }
        },
        {
          label: '下单账号',
          type: 'input',
          placeholder: '请填写下单账号',
          prop: 'orderAccount'
        },
        {
          label: '所属企业',
          type: 'input',
          placeholder: '请填写下单人所属企业',
          prop: 'orderTenantName'
        },
        {
          label: '支付状态',
          placeholder: '选择支付状态',
          type: 'select',
          data: this.$enums.PAY_STATUS.getList(),
          prop: 'payStatus'
        },
        {
          label: '结算方式',
          placeholder: '选择结算方式',
          type: 'select',
          data: this.$enums.SETTLEMENT_TYPE.getList(),
          prop: 'paymentWay'
        }
      ],
      list: [],
      listHeader: [
        {
          label: '订单号',
          width: '180px',
          prop: 'salesCode',
          render: (h, { row }) =>
            h('el-link', { props: { type: 'primary' }, on: { click: () => this.onInfo(row) }}, row.salesCode)
        },
        {
          label: '订单来源',
          prop: '',
          render: (h, { row }) => {
            return h(
              'span',
              this.$enums.CREATE_SOURCE.getLabel(row.createSource)
            )
          }
        },
        { label: '下单账号', prop: 'orderAccount' },
        { label: '下单人所属企业', prop: 'orderTenantName' },
        {
          label: '服务信息',
          prop: '',
          render: (h, { row }) => {
            return h(
              'el-link',
              {
                props: {
                  type: 'primary'
                },
                on: {
                  click: () => this.onServiceInfo(row)
                }
              },
              '点击查看'
            )
          }
        },
        { label: '服务时间', prop: 'arrivalTime', sortable: true },
        {
          label: '结算方式',
          prop: '',
          render: (h, { row }) => {
            return h(
              'span',
              this.$enums.SETTLEMENT_TYPE.getLabel(row.paymentWay)
            )
          }
        },
        {
          label: '订单金额',
          prop: '',
          sortable: true,
          render: (h, { row }) => {
            return h('span', this.$format.toText(row.orderMoney))
          }
        },
        {
          label: '支付状态',
          prop: '',
          render: (h, { row }) => {
            return h('span', this.$enums.PAY_STATUS.getLabel(row.payStatus))
          }
        },
        {
          label: '订单状态',
          prop: '',
          render: (h, { row }) => {
            return h(
              'span',
              this.$enums.SALE_ZHICHI_ORDER_STATUS.getLabel(row.orderStatus)
            )
          }
        },
        { label: '下单时间', prop: 'createDate', sortable: true },
        {
          label: '操作',
          prop: '',
          fixed: 'right',
          more: {
            options: [{ label: '详情', methods: 'info', show: () => this.$permission(['auth662']) }]
          }
        }
      ],
      row: {}
    }
  },
  created() {
    this.fnGetList()
  },
  mounted() {

  },
  beforeDestroy() {
  },
  methods: {
    onSearch(val) {
      this.fnGetList(val)
    },
    onReset() {},
    async fnGetList(search = {}) {
      const { code, data, count } = await this.$api.saleZhichi.list({
        ...this.pageQuery,
        ...search
      })
      if (code === 200) {
        this.list = data
        this.pageQuery.total = count
      }
    },
    handleMoreBtns({ method, row }) {
      if (method === 'info') this.onInfo(row)
    },
    onInfo(row) {
      this.row = this.$lodash.cloneDeep(row)
      this.isShowInfo = true
    },
    onServiceInfo(row) {
      this.row = this.$lodash.cloneDeep(row)
      this.isShowService = true
    }
  }
}
</script>

<style>
</style>
