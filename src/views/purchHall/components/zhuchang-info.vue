<template>
  <div>
    <xn-drawer
      :title="title"
      :show.sync="show"
      :before-close="onClose"
      @on-open="onOpen"
    >
      <common-info :form="form" :project-type="rowData.projectType" />
      <xn-description label-width="90px" title="服务要求">
        <xn-table
          :data="form.siteServiceDetailList"
          border
          :auto-height="false"
          :columns="listHeader"
        />
      </xn-description>
      <template #footer>
        <el-button @click="onClose">关闭</el-button>
        <el-button v-permission="['auth650']" type="primary" @click="onOffer">报价</el-button>
      </template>
    </xn-drawer>
    <zhuchang-offer :show.sync="isShowOffer" :row-data="rowData" />
  </div>
</template>
<script>
import mixin from '../mixins/index'
import zhuchangOffer from './zhuchang-offer.vue'
import commonInfo from './common-info.vue'
export default {
  components: { zhuchangOffer, commonInfo },
  mixins: [mixin],
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
      isShowOffer: false,
      list: [],
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
            return h('span', `${row.startTime}~${row.endTime}`)
          }
        }
      ],

      form: {},
      rules: {
        num: [{ required: true }],
        price: [{ required: true }]
      }
    }
  },
  computed: {
    title() {
      return `详情【${this.$enums.PROJECT_TYPE.getLabel(
        this.rowData.projectType
      )}】`
    }
  },
  methods: {
    onOpen() {
      this.fnGetInfo()
    },
    onClose() {
      this.$emit('update:show', false)
    },
    onOffer() {
      this.isShowOffer = true
    }
  }
}
</script>
