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
        :data="list"
        :columns="listHeader"
        :get-list="fnGetList"
        :page="pageQuery"
        @handle-buttons="handleMoreBtns"
      />
    </el-card>
    <xn-drawer
      :title="title"
      :show.sync="isShow"
      :before-close="() => (isShow = false)"
      @on-open="onOpen"
    >
      <info-common :data="info" :row-data="row" />
      <info-product
        v-if="row.orderType === 3"
        :data="info"
        @on-changeprice="onChangePrice"
      />
      <info-zhichi v-if="row.orderType === 2" :data="info" />

      <template #footer>
        <span>
          <el-button
            v-if="row.afterSaleStatus === 0"
            class="mr-10"
            type="danger"
            @click="onReject"
          >驳回</el-button>
        </span>
        <span>
          <el-button
            v-if="row.afterSaleStatus === 0 && row.afterSaleType === 1"
            class="mr-10"
            type="success"
            @click="onResolve"
          >同意退款</el-button>
        </span>
        <span>
          <el-button
            v-if="row.afterSaleStatus === 0 && row.afterSaleType === 2"
            class="mr-10"
            type="success"
            @click="onResolve"
          >同意换货</el-button>
        </span>
        <span>
          <el-button
            v-if="row.afterSaleStatus === 0 && row.afterSaleType === 3"
            class="mr-10"
            type="success"
            @click="onResolve"
          >确认收货并退款</el-button>
        </span>
        <span>
          <el-button
            v-if="row.afterSaleStatus === 3"
            class="mr-10"
            type="primary"
            @click="onConfirmChange"
          >确认收货并生成换新单</el-button>
        </span>
        <span>
          <el-button @click="isShow = false">关闭</el-button>
        </span>
      </template>
    </xn-drawer>

    <xn-dialog
      title="驳回"
      :show.sync="isShowReject"
      :before-close="() => (isShowReject = false)"
      @on-confirm="onSubmitReject"
    >
      <el-form ref="form" :model="form" :rules="rules">
        <el-form-item label="" label-width="0" prop="rejectReason">
          <el-input
            v-model="form.rejectReason"
            :autosize="{ minRows: 4 }"
            type="textarea"
            placeholder="请填写驳回原因"
          />
        </el-form-item>
      </el-form>
    </xn-dialog>
    <!-- 产品信息 -->
    <xn-dialog
      :title="productDialogTitle"
      :show-confirm="false"
      size="large"
      :show.sync="showProduct"
      :before-close="() => (showProduct = false)"
    >
      <xn-table
        :data="listProduct"
        border
        :columns="listProductHeader"
        :auto-height="false"
      />
    </xn-dialog>
  </div>
</template>

<script>
import infoCommon from './components/common-info'
import infoProduct from './components/info-product'
import infoZhichi from './components/info-zhichi'

export default {
  components: { infoCommon, infoProduct, infoZhichi },
  data() {
    return {
      isShow: false,
      isShowReject: false,
      showProduct: false,
      formSearch: [
        {
          label: '售后单号',
          type: 'input',
          placeholder: '售后单号',
          prop: 'afterSaleCode'
        },
        {
          label: '订单号',
          type: 'input',
          placeholder: '订单号',
          prop: 'purchaseCode'
        },
        {
          label: '订单类型',
          type: 'select',
          data: this.$enums.PROJECT_TYPE.getList().filter(
            (item) => item.value === 2 || item.value === 3
          ),
          placeholder: '订单类型',
          prop: 'orderType'
        },
        {
          label: '售后状态',
          type: 'select',
          data: this.$enums.AFTERSALE_STATUS.getList(),
          placeholder: '售后状态',
          prop: 'afterSaleStatus'
        },
        {
          label: '售后类型',
          type: 'select',
          data: this.$enums.AFTERSALE_TYPE.getList(),
          placeholder: '售后类型',
          prop: 'afterSaleType'
        },
        {
          label: '下单账号',
          type: 'input',
          placeholder: '下单账号',
          prop: ''
        },
        {
          label: '下单人所属企业',
          type: 'input',
          placeholder: '下单人所属企业',
          prop: ''
        }
      ],
      list: [],
      listHeader: [
        {
          label: '售后单号',
          prop: 'afterSaleCode',
          width: '150px',
          render: (h, { row }) => {
            return h(
              'el-link',
              { props: { type: 'primary' }},
              row.afterSaleCode
            )
          }
        },
        {
          label: '关联订单',
          prop: 'purchaseCode',
          width: '180px',
          render: (h, { row }) => {
            return h('span', { props: { type: 'primary' }}, row.purchaseCode)
          }
        },
        {
          label: '售后类型',
          prop: '',
          render: (h, { row }) => {
            return h(
              'span',
              this.$enums.AFTERSALE_TYPE.getLabel(row.afterSaleType)
            )
          }
        },
        {
          label: '订单类型',
          prop: '',
          render: (h, { row }) => {
            return h(
              'span',
              this.$enums.AFTERSALE_TYPE.getLabel(row.orderType)
            )
          }
        },
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
                  click: () => this.onProductInfo(row)
                }
              },
              '点击查看'
            )
          }
        },
        {
          label: '退款金额',
          prop: '',
          render: (h, { row }) => {
            return h('span', this.$format.toText(row.refundFee))
          }
        },
        {
          label: '订单金额',
          prop: '',
          render: (h, { row }) => {
            return h('span', this.$format.toText(row.orderFee))
          }
        },
        {
          label: '支付方式',
          prop: '',
          render: (h, { row }) => {
            return h('span', this.$enums.PAY_TYPE.getLabel(row.payType))
          }
        },
        {
          label: '售后状态',
          prop: '',
          render: (h, { row }) => {
            return h(
              'span',
              this.$enums.AFTERSALE_STATUS.getLabel(row.afterSaleStatus)
            )
          }
        },
        { label: '申请售后账号', prop: 'loginName' },
        { label: '申请售后所属企业', prop: 'addTenantName' },
        { label: '申请售后时间', prop: 'addTime' },
        {
          label: '操作',
          fixed: 'right',
          prop: '',
          more: {
            options: [{ label: '详情', methods: 'info' }]
          }
        }
      ],
      row: {},
      form: {
        rejectReason: ''
      },
      rules: {},
      PRODUCT_HEADER1: [
        { label: '备件厂商', prop: 'partVendor' },
        { label: '备件分类', prop: 'partTypeName' },
        { label: 'PN', prop: 'pn' },
        { label: '描述', prop: 'partDesc' },
        {
          label: '单价',
          prop: 'unitPrice',
          render: (h, { row }) =>
            h('span', this.$format.toText(row.totalMoney))
        }
      ],
      PRODUCT_HEADER2: [
        { label: '服务项名称', prop: 'supportName' },
        { label: '服务项编号', prop: 'supportCode' },
        { label: '预计工时', prop: 'workHours' },
        { label: '服务描述', prop: 'supportDesc' },
        {
          label: '报价金额',
          prop: 'totalMoney',
          render: (h, { row }) =>
            h('span', this.$format.toText(row.totalMoney))
        }
      ],
      listProductHeader: [],
      listProduct: [],
      info: {},
      refundFee: '' // 退款金额
    }
  },
  computed: {
    productDialogTitle() {
      return this.row.orderType === 2 ? '支持产品信息' : '产品商品信息'
    },
    title() {
      return `详情【${this.$enums.PROJECT_TYPE.getLabel(this.row.orderType)}】`
    }
  },
  watch: {
    isShowReject(n) {
      if (!n) {
        this.$refs.form.resetFields()
      }
    }
  },
  created() {
    this.fnGetList()
  },
  methods: {
    onSearch(val) {
      this.pageQuery.pageNum = 1
      this.fnGetList(val)
    },
    onReset() {},
    async fnGetList(search = {}) {
      const { code, data, count } = await this.$api.afterSale.list({
        ...this.pageQuery,
        ...search
      })
      if (code === 200) {
        this.list = data
        this.pageQuery.total = count
      }
    },
    async fnGetInfo() {
      //
      const {
        code,
        data: { partAfterSalesDetailVO, supportAfterSalesDetailVO }
      } = await this.$api.afterSale.detail({ id: this.row.id })
      if (code === 200) {
        this.info =
          this.row.orderType === 2
            ? supportAfterSalesDetailVO
            : partAfterSalesDetailVO
      }
    },
    handleMoreBtns({ method, row }) {
      this.row = this.$lodash.cloneDeep(row)
      if (method === 'info') {
        this.onInfo(row)
      }
    },
    onInfo(row) {
      this.row = this.$lodash.cloneDeep(row)
      this.isShow = true
    },
    onOpen() {
      this.fnGetInfo()
    },
    onReject() {
      this.isShowReject = true
    },
    // 驳回提交
    async onSubmitReject() {
      const {
        row: { id },
        form: { rejectReason }
      } = this
      const { code, msg } = await this.$api.afterSale.reject({
        id,
        rejectReason
      })
      if (code === 200) {
        this.$message.success(msg)
        this.fnGetInfo()
        this.isShowReject = false
      }
    },
    // 同意换货 同意申请
    onResolve() {
      const {
        row: { id, afterSaleType },
        refundFee
      } = this
      const textArr = ['确定同意退款吗？', '确定同意换货吗？', '确定同意退款退货吗？']
      // const title =
      //   afterSaleType === 2 ? '' : ''

      if (refundFee === '' && afterSaleType === 1) {
        this.$message.warning('请填写退款金额')
        return false
      }
      this.$confirm(textArr[afterSaleType - 1], '提示', { type: 'warning' }).then(async() => {
        const { code, msg } = await this.$api.afterSale.agreementApply({
          id,
          refundFee
        })
        if (code === 200) {
          this.$message.success(msg)
          this.fnGetInfo()
        }
      })
    },
    // 确认收货并生成换新单
    onConfirmChange() {
      const {
        row: { id }
      } = this
      this.$confirm('确认收货并生成换新单吗？', '提示', {
        type: 'warning',
        confirmButtonText: '确认'
      }).then(async() => {
        const { code, msg } = await this.$api.afterSale.confirmAddRenew({ id })
        if (code === 200) {
          this.$message.success(msg)
          this.fnGetInfo()
        }
      })
    },
    // 退款 输入退款金额
    onChangePrice(val) {
      this.refundFee = val
    },
    // 产品信息弹窗
    async onProductInfo({ id, orderType }) {
      // 2支持 3产品
      // console.log(row)
      if (orderType === 3) this.listProductHeader = this.PRODUCT_HEADER1
      if (orderType === 2) this.listProductHeader = this.PRODUCT_HEADER2
      this.showProduct = true
      const {
        code,
        data: { pmsAfterSalePartDetailList, pmsAfterSaleSupportDetailList }
      } = await this.$api.afterSale.afterSalesInfo({ id, orderType })
      if (code === 200) {
        if (orderType === 3) this.listProduct = pmsAfterSalePartDetailList
        if (orderType === 2) this.listProduct = pmsAfterSaleSupportDetailList
      }
    }
  }
}
</script>

<style>
</style>
