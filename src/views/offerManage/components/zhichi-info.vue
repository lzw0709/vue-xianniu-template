<template>
  <xn-drawer
    title="详情"
    :show.sync="show"
    :before-close="onClose"
    @on-open="onOpen"
  >
    <common-info :form="form" :project-type="rowData.projectType" />
    <xn-description title="服务项">
      <xn-table
        :data="form.pmsPurchaseQuoteSupportDetailList"
        border
        :auto-height="false"
        :columns="listHeader"
        :show-page="false"
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
          <el-form-item label="报价总额">
            <span class="text-primary">
              {{ $format.toText(form.quoteMoney) }}
            </span>
          </el-form-item>
        </div>
      </xn-description>
    </el-form>
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
        { label: '服务名称', prop: 'supportName' },
        { label: '预计工时', prop: 'workHours' },
        { label: '服务描述', prop: 'supportDesc' },
        {
          label: '成本价（不对外展示）',
          prop: 'supportCost',
          render: (h, { row }) => {
            return h('span', this.$format.toText(row.supportCost))
          }
        },
        {
          label: '报价金额',
          prop: 'totalMoney',
          render: (h, { row }) => {
            return h('span', this.$format.toText(row.totalMoney))
          }
        }
      ]
    }
  },
  methods: {
    onOpen() {
      this.fnGetInfo()
    },
    onClose() {
      this.$emit('update:show', false)
    }
  }
}
</script>
