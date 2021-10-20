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
    <weibao-info :show.sync="showWeibao" :row-data="rowData" />
    <zhichi-info :show.sync="showZhichi" :row-data="rowData" />
    <zhuchang-info :show.sync="showZhuchang" :row-data="rowData" />
    <cp-info :show.sync="showCP" :row-data="rowData" />
  </div>
</template>
<script>
import weibaoInfo from './components/weibao-info'
import zhichiInfo from './components/zhichi-info'
import zhuchangInfo from './components/zhuchang-info'
import cpInfo from './components/cp-info'
export default {
  components: {
    zhuchangInfo,
    cpInfo,
    weibaoInfo,
    zhichiInfo
  },
  data() {
    return {
      showCP: false,
      showZhuchang: false,
      showWeibao: false,
      showZhichi: false,
      formSearch: [
        {
          label: '采购单号',
          type: 'input',
          placeholder: '请填写采购单号',
          prop: 'purchaseCode'
        },
        {
          label: '报价单号',
          type: 'input',
          placeholder: '请填写报价单号',
          prop: 'quoteCode'
        },
        {
          label: '报价状态',
          type: 'select',
          placeholder: '请选择状态',
          prop: 'quoteStatus',
          data: this.$enums.QUOTE_STATUS.getList()
        },
        {
          label: '报价时间',
          type: 'daterange',
          options: {
            isShortcut: true,
            start: 'quoteTimeLeft',
            end: 'quoteTimeRight'
          }
        }
      ],
      listHeader: [
        {
          label: '报价单号',
          prop: 'quoteCode',
          render: (h, { row }) => {
            return h(
              'span',
              {
                props: {
                  type: 'primary'
                }
              },
              row.quoteCode
            )
          }
        },
        {
          label: '采购单号',
          prop: 'purchaseCode',
          render: (h, { row }) => {
            return h(
              'el-link',
              {
                props: {
                  type: 'primary'
                },
                on: {
                  click: () => this.onInfo(row)
                }
              },
              row.purchaseCode
            )
          }
        },
        {
          label: '报价项目',
          render: (h, { row }) => {
            return h(
              'span',
              this.$enums.PROJECT_TYPE.getLabel(row.projectType)
            )
          }
        },
        { label: '采购企业', prop: 'buyerTenantName' },
        { label: '报价有效期至', prop: 'termOfValidity' },
        { label: '报价时间', prop: 'createDate', sortable: true },
        {
          label: '报价金额',
          prop: 'quoteMoney',
          render: (h, { row }) => {
            return h(
              'span',
              {
                class: ['text-danger']
              },
              this.$format.toText(row.quoteMoney)
            )
          }
        },
        {
          label: '报价状态',
          prop: '',
          render: (h, { row }) => {
            return h(
              'span',
              this.$options.filters.dealFlag(row.dealFlag)
            )
          }
        },
        {
          label: '操作',
          show: () => this.$permission(['auth654']),
          more: {
            options: [{ label: '详情', methods: 'info', show: () => this.$permission(['auth654']) }]
          }
        }
      ],
      list: [],
      rowData: {}
    }
  },
  created() {
    this.fnGetList()
  },
  methods: {
    onSearch(val) {
      this.fnGetList(val)
    },
    onReset() {
      this.pageQuery.pageNum = 1
    },
    async fnGetList(search = {}) {
      const { code, data, count } = await this.$api.purchaseQuote.list({
        ...this.pageQuery,
        ...search
      })
      if (code === 200) {
        this.list = data
        this.pageQuery.total = count
      }
    },
    handleMoreBtns({ method, row, idx }) {
      if (method === 'info') {
        this.onInfo(row)
      }
    },
    onInfo(row) {
      this.rowData = this.$lodash.cloneDeep(row)
      if (row.projectType === 1) this.showWeibao = true
      if (row.projectType === 2) this.showZhichi = true
      if (row.projectType === 3) this.showCP = true
      if (row.projectType === 4) this.showZhuchang = true
    }
  }
}
</script>

<style>
</style>
