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
    <xn-drawer
      title="详情"
      :show.sync="isShowInfo"
      :before-close="onClose"
      @on-open="onOpen"
    >
      <module-basic :data="info" />
      <module-pay auth-key="auth671" :data="info" @confirm-coll="onColl" />
      <module-ask :data="info" />
      <module-engineer-info :data="info" />
      <module-address :data="info" />
      <module-price :data="info" />
      <template #footer>
        <el-button v-if="info.orderStatus === 2" type="primary" @click="onDispatchSubmit">确认派单</el-button>
        <el-button @click="isShowInfo = false">关闭</el-button>
      </template>
    </xn-drawer>
  </div>
</template>

<script>
import moduleBasic from './components/modules/module-basic'
import modulePay from './components/modules/module-pay'
import moduleAddress from './components/modules/module-service-address'
import modulePrice from './components/modules/module-service-price'
import moduleAsk from './components/modules/module-service-ask'
import moduleEngineerInfo from './components/modules/module-engineer-info'

export default {
  components: { moduleBasic, modulePay, moduleAddress, modulePrice, moduleAsk, moduleEngineerInfo },
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
          label: '订单状态',
          type: 'select',
          prop: 'orderStatus',
          data: this.$enums.SALE_ZHUCHANG_ORDER_STATUS.getList(),
          placeholder: '请选择订单状态'
        },
        {
          label: '下单日期',
          type: 'daterange',
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
          label: '服务时间',
          prop: '',
          render: (h, { row }) => {
            return h('span', `${row.startTime}~${row.endTime}`)
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
        // {
        //   label: '支付金额',
        //   prop: '',
        //   render: (h, { row }) => {
        //     return h('span', this.$format.toText(row.orderMoney))
        //   }
        // },
        {
          label: '订单金额',
          prop: 'orderMoney',
          sortable: true,
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
              this.$options.filters.saleZhuchangOrderStatus(row.orderStatus)
            )
          }
        },
        { label: '下单时间', prop: 'createDate', sortable: true },
        {
          label: '操作',
          fixed: 'right',
          prop: '',
          more: {
            options: [{ label: '详情', methods: 'info', show: () => this.$permission(['auth670']) }]
          }
        }
      ],
      row: {},
      info: {},
      devicePage: {
        pageNum: 1,
        pageSize: 10,
        total: 0
      },
      sendOrderEngineerList: []
    }
  },
  created() {
    this.fnGetList()
  },
  mounted() {
    this.$bus.$on('on-engineer', (v) => {
      this.sendOrderEngineerList = v
    })
  },
  beforeDestroy() {
    this.$bus.$off('on-engineer')
  },
  methods: {
    onSearch(form) {
      this.fnGetList(form)
    },
    onReset() {},
    onOpen() {
      this.fnGetInfo()
    },
    onClose() {
      this.isShowInfo = false
    },
    async fnGetList(search = {}) {
      const { code, data, count } = await this.$api.saleZhuchang.list({
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

    async fnGetInfo() {
      const { code, data } = await this.$api.saleZhuchang.detail({
        id: this.row.id
      })
      if (code === 200) {
        this.info = data
      }
    },
    onColl() {
      this.fnGetInfo()
    },
    // 派单
    onDispatchSubmit() {
      const { sendOrderEngineerList, row: { id }} = this
      if (!sendOrderEngineerList.length) {
        this.$message.warning('请选择派单工程师')
        return
      }
      this.$confirm('确认派单吗？', '提示', { type: 'warning' }).then(async() => {
        const { code, msg } = await this.$api.saleZhuchang.sendOrderOnSite({ id, sendOrderEngineerList })
        if (code === 200) {
          this.$message.success(msg)
          this.fnGetInfo()
        }
      })
    }
  }
}
</script>

<style>
</style>
