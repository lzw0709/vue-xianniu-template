<template>
  <xn-drawer
    title="详情"
    :show.sync="show"
    :before-close="onClose"
    @on-open="onOpen"
  >
    <div class="pl-20 pr-20">
      <common-info :form="form" :project-type="rowData.projectType" />
      <xn-description title="备件信息">
        <xn-table
          :data="form.pmsPurchasePartList"
          border
          :auto-height="false"
          :columns="listPartHeader"
          :page="pageQuery"
          @handle-buttons="handleMoreBtns"
        />
      </xn-description>
      <xn-description title="报价产品">
        <xn-table
          :data="form.pmsPurchaseQuotePartDetailVO"
          border
          :auto-height="false"
          :columns="listQuoteHeader"
          :page="pageQuery"
          @handle-buttons="handleMoreBtns"
        />
      </xn-description>
      <el-form ref="form" :model="form" label-width="80px">
        <xn-description title="报价单附件">
          <div style="width: 100%">
            <xn-upload
              v-if="form.pmsAccessoryList&&form.pmsAccessoryList.length"
              :file-list.sync="form.pmsAccessoryList"
              disabled
            />
            <div v-else class="text-center">
              <el-empty :image-size="60" description="暂无报价单" />
            </div>
          </div>
        </xn-description>
        <xn-description title="报价金额">
          <div>
            <el-form-item label="备件费用">
              <span>
                {{ $format.toText(form.partOutlay) }}
              </span>
            </el-form-item>
            <el-form-item label="物流费用">
              <span>
                {{ $format.toText(form.logisticsOutlay) }}
              </span>
            </el-form-item>
            <el-form-item label="报价总额">
              <span class="text-primary">
                {{ $format.toText(form.quoteMoney) }}
              </span>
            </el-form-item>
          </div>
        </xn-description>
      </el-form>
    </div>
  </xn-drawer>
</template>
<script>
import commonInfo from './common-info'
import mixins from '../mixins'
export default {
  components: {
    commonInfo
  },
  mixins: [mixins],
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
      form: {},
      listPart: [],
      listPartHeader: [
        { label: '备件厂商', prop: 'partVendor' },
        { label: '备件分类', prop: 'partTypeName' },
        { label: '备件PN', prop: 'pn' },
        { label: '备件描述', prop: 'partDesc' },
        { label: '微码版本', prop: 'microcode' },
        { label: '发货特殊要求', prop: 'specialRequest' },
        { label: '需求数量', prop: 'totalCount' }
      ],
      listQuoteHeader: [
        { label: '备件厂商', prop: 'partVendor' },
        { label: '备件名称', prop: 'partName' },
        { label: '备件PN', prop: 'pn' },
        { label: '备件规格', prop: 'configName' },
        { label: '备件描述', prop: 'partDesc' },
        { label: '可供数量', prop: 'quoteCount' },
        { label: '单价', prop: 'unitPrice' },
        { label: '金额小计', prop: 'totalMoney' }
      ]
    }
  },
  methods: {
    onOpen() {
      this.fnGetInfo()
    },
    onClose() {
      this.$emit('update:show', false)
    },
    handleMoreBtns() {}
  }
}
</script>
