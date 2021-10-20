<template>
  <div>
    <xn-drawer
      title="详情"
      :show.sync="show"
      :before-close="onClose"
      @on-open="onOpen"
    >
      <!-- <xn-description title="基本信息">
        <xn-description-item label="订单编号">{{
          form.salesCode || "-"
        }}</xn-description-item>
        <xn-description-item label="订单类型">
          {{ form.orderType | projectType }}
        </xn-description-item>
        <xn-description-item label="订单状态">
          {{ form.orderStatus | saleProductOrderStatus }}
        </xn-description-item>
        <xn-description-item label="下单账号">
          {{ form.orderAccount || "-" }}
        </xn-description-item>
        <xn-description-item label="所属企业">
          {{ form.orderTenantName || "-" }}
        </xn-description-item>
        <xn-description-item label="下单时间">
          {{ form.createDate || "-" }}
        </xn-description-item>
      </xn-description> -->

      <module-basic :data="form" />
      <module-pay auth-key="auth658" :data="form" @confirm-coll="onConfirmCollect" />
      <xn-description title="产品信息">
        <template #more>
          <el-button
            v-if="form.orderStatus === 2"
            v-permission="['auth659']"
            type="success"
            size="mini"
            :disabled="!selectedList.length"
            @click="onAddGoods"
          >添加发货信息</el-button>
        </template>
        <!-- {{ form.partInfoSearchList }} -->

        <xn-table
          border
          :selection="form.orderStatus === 2"
          :data="form.partInfoSearchList"
          :columns="partInfoSearchListHeader"
          :auto-height="false"
          :show-page="false"
          @on-selection="onSelectionProduct"
        />
      </xn-description>
      <xn-description title="产品明细">
        <xn-table
          border
          :data="form.productDetailList"
          :columns="productDetailListHeader"
          :auto-height="false"
          :page="pageQueryInfo"
          :get-list="fnProductDetailList"
        />
      </xn-description>
      <xn-description title="物流信息" label-width="90px">
        <template
          v-if="form.pmsLogisticsList &&
            form.pmsLogisticsList.length"
        >
          <div
            v-for="(item, idx) in form.pmsLogisticsList"
            :key="idx"
            style="width: 100%"
          >
            <el-divider
              content-position="left"
            ><span class="text-primary">物流信息【{{ idx + 1 }}】</span></el-divider>
            <xn-description-item label="物流公司">
              {{ item.logisticsCompany }}
            </xn-description-item>
            <xn-description-item label="物流单号">
              <span class="text-primary">
                {{ item.logisticsCode }}
              </span>
            </xn-description-item>
            <xn-description-item label="发货时间">
              {{ item.deliveryTime }}
            </xn-description-item>
            <xn-description-item label="物流备注">
              {{ item.logisticsRemark }}
            </xn-description-item>
            <xn-description-item
              label="实际物流费用"
              span="2"
            >
              {{ $format.toText(item.logisticsPrice) }}
            </xn-description-item>
            <xn-table
              border
              :data="item.pbLogisticsDetailList"
              :columns="productDetailListHeader"
              :auto-height="false"
              :show-page="false"
            />
          </div>
        </template>
        <xn-empty v-else desc="暂无物流信息" />
      </xn-description>
      <xn-description title="验收凭证">
        <template #more>
          <el-button
            v-if="form.orderStatus === 3||form.orderStatus === 4"
            v-permission="['auth660']"
            type="success"
            size="mini"
            @click="onSubmitFile"
          >提交凭证</el-button>
        </template>
        <xn-upload
          v-if="form.commitVoucherList.length"
          disabled
          :file-list.sync="form.commitVoucherList"
        />
        <xn-empty v-else desc="暂无凭证" />
      </xn-description>
      <xn-description title="收货人信息">
        <xn-description-item label="收货人姓名">
          {{ form.receiverName || "-" }}
        </xn-description-item>
        <xn-description-item label="手机号" span="2">
          {{ form.receiverMobile || "-" }}
        </xn-description-item>
        <xn-description-item label="收货地址" span="3">
          {{ `${form.regionName} `+`${form.receiverAddr || '-'}` }}
        </xn-description-item>
      </xn-description>
      <xn-description title="备注信息">
        <div v-if="form.orderDesc">
          {{ form.orderDesc }}
        </div>
        <xn-empty v-else desc="暂无备注" />
      </xn-description>
      <xn-description title="费用信息" :column="1">
        <template v-if="form.createSource === 1">
          <xn-description-item
            label="产品费"
          >{{ $format.toText(form.partOutlay) }}(含税)</xn-description-item>
          <xn-description-item
            label="物流费用"
          >{{ $format.toText(form.logisticsOutlay) }}(含税)</xn-description-item>
        </template>
        <xn-description-item label="订单金额">
          <span class="text-primary">{{ $format.toText(form.orderMoney ) }}</span>
        </xn-description-item>
      </xn-description>
    </xn-drawer>
    <submit-file :show.sync="isShowFile" :row-data="rowData" />
    <add-goods
      :show.sync="isShowGoods"
      :row-data="rowData"
      :list="selectedList"
    />
  </div>
</template>
<script>
import submitFile from './submitFile'
import addGoods from './addGoods'
import modulePay from './modules/module-pay'
import moduleBasic from './modules/module-basic'
export default {
  components: { submitFile, addGoods, modulePay, moduleBasic },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    rowData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      isShowFile: false,
      isShowGoods: false,
      pageQueryInfo: {
        total: 0,
        pageNum: 1,
        pageSize: 10
      },
      partInfoSearchListHeader: [
        { label: '备件厂商', prop: 'partVendor' },
        { label: '备件名称', prop: 'partName' },
        { label: '备件PN', prop: 'pn' },
        { label: '备件规格', prop: 'configName' },
        { label: '备件描述', prop: 'partDesc' },
        { label: '数量', prop: 'numberOfPart' },
        { label: '备件单价', prop: 'unitPrice' },
        { label: '金额小计', prop: 'totalMoney', render: (h, { row }) => h('span', this.$format.toText(row.totalMoney)) }
      ],
      productDetailListHeader: [
        { label: '备件厂商', prop: 'partVendor' },
        { label: '备件名称', prop: 'partName' },
        { label: '备件PN', prop: 'pn' },
        { label: '备件规格', prop: 'appearance' },
        { label: '备件SN', prop: 'sn' }
      ],
      form: {
        productDetailList: [],
        partInfoSearchList: [],
        commitVoucherList: []
      },
      selectedList: [],
      // 获取物流信息中的产品信息
      logisticsProductList: []
    }
  },
  methods: {
    onOpen() {
      this.fnGetInfo()
    },
    onClose() {
      this.$emit('update:show', false)
    },
    async fnGetInfo() {
      const { code, data, data: { partInfoSearchList }} = await this.$api.sale.detail({
        id: this.rowData.id
      })
      if (code === 200) {
        if (partInfoSearchList.length) {
          partInfoSearchList.forEach(item => {
            if (item.deliverFlag) {
              this.$set(item, 'isDisabled', true)
            }
          })
        }
        this.form = data
        this.fnProductDetailList()
      }
    },
    // 产品明细列表
    async fnProductDetailList() {
      const { code, data, count } = await this.$api.sale.detailSnList({
        id: this.rowData.id,
        ...this.pageQueryInfo
      })
      if (code === 200) {
        this.$set(this.form, 'productDetailList', data)
        this.pageQueryInfo.total = count
      }
    },
    // 确认收款
    onConfirmCollect() {
      this.fnGetInfo()
    },
    // 提交凭证
    onSubmitFile() {
      this.isShowFile = true
    },
    // 添加发货信息
    onAddGoods() {
      if (!this.selectedList.length) {
        this.$message.warning('请先选择发货PN')
        return
      }
      this.isShowGoods = true
    },
    // 选择的产品
    onSelectionProduct(val) {
      const arr = this.$lodash.cloneDeep(val)
      this.selectedList = arr
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
