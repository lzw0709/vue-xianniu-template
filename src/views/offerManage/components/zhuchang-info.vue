<template>
  <xn-drawer
    title="详情"
    :show.sync="show"
    :before-close="onClose"
    @on-open="onOpen"
  >
    <div class="pl-20 pr-20">
      <common-info :form="form" :project-type="rowData.projectType" />
      <xn-description title="服务要求">
        <xn-table
          :data="form.pmsPurchaseQuoteOnSiteDetailList"
          border
          :auto-height="false"
          :columns="listHeader"
          :page="pageQuery"
          @handle-buttons="handleMoreBtns"
        />
      </xn-description>
      <el-form ref="form" :model="form" label-width="80px">
        <xn-description title="报价单附件">
          <xn-upload :file-list.sync="form.pmsAccessoryList" disabled />
        </xn-description>
        <xn-description title="报价金额">
          <el-form-item label="报价总额">
            <span class="text-primary">
              {{ $format.toText(form.quoteMoney ) }}
            </span>
          </el-form-item>
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
      listHeader: [
        { label: '工程师类型', prop: 'engineerTypeName' },
        { label: '工程师级别', prop: 'engineerLevelName' },
        { label: '服务级别', prop: 'slaName' },
        { label: '学历', prop: 'educationName' },
        { label: '工作年限', prop: 'workYearsName' },
        { label: '工程师数量', prop: 'numberOfPeople' },
        { label: '其他要求', prop: 'requirement' },
        {
          label: '服务时间',
          prop: '',
          render: (h, { row }) => {
            return h(
              'span',
              `${this.$dayjs(row.startTime).format('YYYY-MM-DD')}~${this.$dayjs(
                row.endTime
              ).format('YYYY-MM-DD')}`
            )
          }
        },
        { label: '可供数量', prop: 'numberOfEngineer' },
        {
          label: '成本价（不对外展示）',
          render: (h, { row }) => {
            return h('span', this.$format.toText(row.itemCost))
          }
        },
        { label: '报价金额', render: (h, { row }) => {
          return h('span', this.$format.toText(row.totalMoney))
        } }
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
