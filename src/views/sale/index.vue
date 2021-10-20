<template>
  <div class="app-container">
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <xn-search
        label-width="110px  "
        :form-data="formSearch"
        @on-search="onSearch"
        @on-reset="onReset"
      />
    </el-card>
    <el-card shadow="always" class="mt-20" :body-style="{ padding: '20px' }">
      <xn-table
        :data="list"
        :columns="listHeader"
        :page="pageQuery"
        @handle-buttons="handleMoreBtns"
      />
    </el-card>
    <product-info :show.sync="isShowInfo" :row-data="row" />
    <product-list :show.sync="isShowProjectList" :row-data="row" />
  </div>
</template>

<script>
import productInfo from './components/product-info'
import productList from './components/product-list'

export default {
  components: { productInfo, productList },
  data() {
    return {
      isShowInfo: false,
      isShowProjectList: false,
      formSearch: [
        // {
        //   label: '商品名称',
        //   type: 'input',
        //   prop: '',
        //   placeholder: '请输入商品名称'
        // },
        {
          label: '订单号',
          type: 'input',
          prop: 'salesCode',
          placeholder: '请输入订单号'
        },
        {
          label: '商品编码(PN)',
          type: 'input',
          prop: 'pn',
          placeholder: '请输入商品编码'
        },
        {
          label: '订单状态',
          type: 'select',
          prop: 'orderStatus',
          data: this.$enums.SALE_PRODUCT_ORDER_STATUS.getList(),
          placeholder: '请选择订单状态'
        },
        {
          label: '下单日期',
          type: 'datetimerange',
          options: { start: 'orderTimeLeft', end: 'orderTimeRight' }
        },
        {
          label: '下单账号',
          type: 'input',
          prop: 'orderAccount',
          placeholder: '请输入下单账号'
        },
        {
          label: '下单人所属企业',
          type: 'input',
          prop: 'orderTenantName',
          placeholder: '请输入下单人所属企业'
        },
        {
          label: '支付状态',
          type: 'select',
          prop: 'payStatus',
          data: this.$enums.PAY_STATUS.getList(),
          placeholder: '请选择支付状态'
        },
        {
          label: '结算方式',
          type: 'select',
          prop: 'paymentWay',
          data: this.$enums.SETTLEMENT_TYPE.getList(),
          placeholder: '请选择结算方式'
        }
      ],
      list: [],
      listHeader: [
        {
          label: '订单号',
          width: '180px',
          prop: 'salesCode',
          render: (h, { row }) => {
            return h(
              'el-link',
              {
                props: {
                  type: 'primary'
                },
                on: {
                  click: () => this.onProjectInfo(row)
                }
              },
              row.salesCode
            )
          }
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
          label: '产品信息',
          prop: '',
          render: (h, { row }) => {
            return h(
              'el-link',
              {
                props: {
                  type: 'primary'
                },
                on: {
                  click: () => this.onProjectList(row)
                }
              },
              '点击查看'
            )
          }
        },
        {
          label: '订单金额',
          prop: 'orderMoney',
          sortable: true,
          render: (h, { row }) => {
            return h('span', this.$format.toText(row.orderMoney))
          }
        },
        {
          label: '结算方式',
          prop: '',
          render: (h, { row }) => {
            return h(
              'span',
              this.$options.filters.settlementType(row.paymentWay)
            )
          }
        },
        {
          label: '支付金额',
          prop: '',
          render: (h, { row }) => {
            return h('span', this.$format.toText(row.orderMoney))
          }
        },
        {
          label: '支付状态',
          prop: '',
          render: (h, { row }) => {
            return h('span', this.$options.filters.payStatus(row.payStatus))
          }
        },
        {
          label: '订单状态',
          prop: '',
          render: (h, { row }) => {
            return h(
              'span',
              this.$options.filters.saleProductOrderStatus(row.orderStatus)
            )
          }
        },
        { label: '下单时间', prop: 'createDate', sortable: true },
        {
          label: '操作',
          fixed: 'right',
          prop: '',
          more: {
            options: [{ label: '详情', methods: 'info', show: () => this.$permission(['auth657']) }]
          }
        }
      ],
      row: {}
    }
  },
  created() {
    this.fnGetList()
  },
  methods: {
    onSearch(form) {
      this.fnGetList(form)
    },
    onReset() {},
    async fnGetList(search = {}) {
      const { code, data, count } = await this.$api.sale.list({
        ...this.pageQuery,
        ...search
      })
      if (code === 200) {
        this.list = data
        this.pageQuery.total = count
      }
    },
    handleMoreBtns({ method, row }) {
      if (method === 'info') {
        this.onProjectInfo(row)
      }
    },
    onProjectInfo(row) {
      this.row = this.$lodash.cloneDeep(row)
      this.isShowInfo = true
    },
    onProjectList(row) {
      this.row = this.$lodash.cloneDeep(row)
      this.isShowProjectList = true
    }
  }
}
</script>

<style>
</style>
