<template>
  <div>
    <xn-drawer
      :title="title"
      :show.sync="show"
      :before-close="onClose"
      @on-open="onOpen"
    >
      <common-info :form="form" :project-type="rowData.projectType" />
      <xn-description label-width="90px" title="产品信息">
        <xn-table
          :data="form.pmsPurchasePartList"
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
    <cp-offer :show.sync="isShowOffer" :row-data="rowData" />
  </div>
</template>
<script>
import mixin from '../mixins/index'
import cpOffer from './cp-offer.vue'
import commonInfo from './common-info.vue'
export default {
  components: { cpOffer, commonInfo },
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
        { label: '备件厂商', prop: 'partVendor' },
        { label: '备件分类', prop: 'partTypeName' },
        { label: '备件PN', prop: 'pn' },
        { label: '备件描述', prop: 'partDesc' },
        { label: '微码版本', prop: 'microcode' },
        { label: '发货特殊要求', prop: 'specialRequest' },
        { label: '需求数量', prop: 'totalCount' }
      ],

      form: {

      },
      rules: {

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
