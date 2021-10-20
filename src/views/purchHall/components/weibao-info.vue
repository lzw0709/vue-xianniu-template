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
        <!-- 维保 -->
        <xn-table
          :data="form.pmsPurchaseDeviceDetailList"
          border
          :auto-height="false"
          :columns="listHeader"
          @handle-button="handleMoreBtns"
        />
      </xn-description>
      <template #footer>
        <el-button @click="onClose">关闭</el-button>
        <el-button v-permission="['auth650']" type="primary" @click="onOffer">报价</el-button>
      </template>
    </xn-drawer>
    <weibao-offer :show.sync="isShowOffer" :row-data="rowData" />
  </div>
</template>
<script>
import weibaoOffer from './weibao-offer.vue'
import mixin from '../mixins/index'
import commonInfo from './common-info.vue'
export default {
  components: { weibaoOffer, commonInfo },
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
        { label: '设备分类', prop: 'deviceTypeName' },
        { label: '厂商', prop: 'deviceVendor' },
        { label: '设备型号', prop: 'deviceName' },
        { label: '设备SN', prop: 'sn' },
        { label: '服务开始', prop: 'startDate' },
        { label: '服务结束', prop: 'endDate' },
        { label: '地区', prop: 'cityName' }
      ],

      form: {
      }
    }
  },
  computed: {
    title() {
      return `详情【${this.$enums.PROJECT_TYPE.getLabel(this.rowData.projectType)}】`
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
    },
    handleMoreBtns() {}
  }
}
</script>
