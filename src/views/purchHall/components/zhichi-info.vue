<template>
  <div>
    <xn-drawer
      :title="title"
      :show.sync="show"
      :before-close="onClose"
      @on-open="onOpen"
    >
      <common-info :form="form" :project-type="rowData.projectType" />
      <xn-description label-width="90px" title="服务项">
        <!-- 维保 -->
        <xn-table
          :data="form.pmsPurchaseSupportDetailList"
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
    <zhichi-offer :show.sync="isShowOffer" :row-data="rowData" />
  </div>
</template>
<script>
import mixin from '../mixins/index'
import zhichiOffer from './zhichi-offer.vue'
import commonInfo from './common-info.vue'
export default {
  components: { zhichiOffer, commonInfo },
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
        { label: '服务名称', prop: 'supportName' },
        {
          label: '预计工时',
          prop: 'workHours',
          render: (h, { row }) => {
            return h(
              'span',
              // eslint-disable-next-line eqeqeq
              row.workHours != undefined && row.workHours === 0
                ? '-'
                : row.workHours
            )
          }
        },
        { label: '服务描述', prop: 'supportDesc' }
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
