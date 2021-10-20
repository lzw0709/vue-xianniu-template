<template>
  <div class="app-container">
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <xn-search
        label-width="110px"
        :form-data="formSearch"
        @on-search="onSearch"
        @on-reset="onReset"
      />
    </el-card>

    <el-card class="mt-20" shadow="always" :body-style="{ padding: '20px' }">
      <xn-table
        index
        :data="list"
        :columns="listHeader"
        :get-list="fnGetList"
        :page="pageQuery"
        @handle-buttons="onMore"
      />
    </el-card>
    <!-- 维保 -->
    <weibao-info :show.sync="isShow" :row-data="row" />
    <weibao-offer :show.sync="isShowOffer" :row-data="row" />
    <!-- 技术支持 -->
    <zhichi-info :show.sync="isShowZC" :row-data="row" />
    <zhichi-offer :show.sync="isShowZCOffer" :row-data="row" />
    <!-- 产品 -->
    <cp-info :show.sync="isShowCP" :row-data="row" />
    <cp-offer :show.sync="isShowCPOffer" :row-data="row" />
    <!-- 驻场 -->
    <zhuchang-info :show.sync="isShowZhuChang" :row-data="row" />
    <zhuchang-offer :show.sync="isShowZhuChangOffer" :row-data="row" />
  </div>
</template>

<script>
import weibaoInfo from './components/weibao-info.vue'
import weibaoOffer from './components/weibao-offer.vue'
import zhichiInfo from './components/zhichi-info.vue'
import zhichiOffer from './components/zhichi-offer.vue'
import cpInfo from './components/cp-info.vue'
import cpOffer from './components/cp-offer.vue'
import zhuchangInfo from './components/zhuchang-info.vue'
import zhuchangOffer from './components/zhuchang-offer.vue'
export default {
  components: { weibaoInfo, weibaoOffer, zhichiInfo, zhichiOffer, cpInfo, cpOffer, zhuchangInfo, zhuchangOffer },
  data() {
    return {
      isShow: false,
      isShowOffer: false,
      isShowZC: false,
      isShowZCOffer: false,
      isShowCP: false,
      isShowCPOffer: false,
      isShowZhuChang: false,
      isShowZhuChangOffer: false,
      formSearch: [
        {
          label: '采购单号',
          placeholder: '请输入采购单号',
          type: 'input',
          prop: 'purchaseCode'
        },
        {
          label: '下单时间',
          type: 'daterange',
          options: {
            start: 'orderTimeLeft',
            end: 'orderTimeRight'
          }
        },
        {
          label: '采购企业',
          placeholder: '请输入采购企业',
          type: 'input',
          prop: 'buyerTenantName'
        },
        {
          label: '采购截止时间',
          type: 'daterange',
          options: {
            start: 'deadlineTimeLeft',
            end: 'deadlineTimeRight'
          }
        }
      ],
      list: [
      ],
      listHeader: [
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
                  'click': () => {
                    this.onInfo(row)
                  }
                }
              },
              row.purchaseCode
            )
          }
        },
        {
          label: '采购单来源',
          prop: '',
          render: (h, { row }) => {
            return h(
              'span',
              {},
              this.$options.filters.purchaseResource(row.purchaseResource)
            )
          }
        },
        {
          label: '采购项目',
          prop: '',
          render: (h, { row }) => {
            return h(
              'span',
              {},
              this.$options.filters.projectType(row.projectType)
            )
          }
        },
        {
          label: '采购描述',
          prop: '',
          render: (h, { row }) => {
            return h('span', {}, row.purchaseDesc)
          }
        },
        { label: '采购企业', prop: 'buyerTenantName' },
        { label: '采购截止时间', prop: 'cutOfTime' },
        {
          label: '结算方式',
          prop: 'span',
          render: (h, { row }) => {
            return h(
              'span',
              {},
              this.$options.filters.settlementType(row.paymentWay)
            )
          }
        },
        { label: '地区', prop: 'regionName' },
        { label: '下单时间', prop: 'createDate', sortable: true },
        {
          label: '操作',
          fixed: 'right',
          prop: '',
          more: {
            options: [
              { label: '详情', methods: 'info', show: () => this.$permission(['auth648']) },
              { label: '报价', methods: 'offer', show: () => this.$permission(['auth649']) }
            ]
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
    this.$bus.$on('on-offer', () => {
      this.fnGetList()
    })
  },
  beforeDestroy() {
    this.$bus.$off('on-offer')
  },
  methods: {
    onSearch(search) {
      this.pageQuery.pageNum = 1
      this.fnGetList(search)
    },
    onReset() {},
    async fnGetList(search = {}) {
      const { code, data, count } = await this.$api.purchHall.list({
        ...this.pageQuery,
        ...search
      })
      if (code === 200) {
        this.list = data
        this.pageQuery.total = count
      }
    },
    onMore({ method, row, idx }) {
      if (method === 'info') {
        this.onInfo(row)
      }
      if (method === 'offer') {
        this.onOffer(row)
      }
    },
    onInfo(row) {
      this.row = row
      if (row.projectType === 1) this.isShow = true
      if (row.projectType === 2) this.isShowZC = true
      if (row.projectType === 3) this.isShowCP = true
      if (row.projectType === 4) this.isShowZhuChang = true
    },
    onOffer(row) {
      this.row = row
      if (row.projectType === 1) this.isShowOffer = true
      if (row.projectType === 2) this.isShowZCOffer = true
      if (row.projectType === 3) this.isShowCPOffer = true
      if (row.projectType === 4) this.isShowZhuChangOffer = true
    }
  }
}
</script>

<style>
</style>
