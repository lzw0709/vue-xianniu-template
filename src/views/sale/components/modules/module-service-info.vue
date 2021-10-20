<template>
  <!-- 服务信息 -->
  <div>
    <xn-description title="服务信息">
      <template #more>
        <el-button
          v-if="data.orderStatus === 2"
          v-permission="['auth664']"
          type="success"
          size="mini"
          @click="onDispatch"
        >派单工程师</el-button>
      </template>
      <xn-table
        border
        :data="data.pmsSalesSupportOrderDetailList"
        :columns="listHeader"
        :auto-height="false"
        :show-page="false"
      />
    </xn-description>
    <dispatch-order :data="data" :show.sync="isShowDispatch" />
  </div>
</template>

<script>
import dispatchOrder from '../dispatchOrder'
export default {
  components: { dispatchOrder },
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      isShowDispatch: false,
      list: [],
      listHeader: [
        { label: '服务名称', prop: 'supportName' },
        { label: '预计工时', prop: 'workHours' },
        { label: '服务规格/描述', prop: 'supportDesc' },
        {
          label: '成本价(不对外展示)',
          prop: '',
          render: (h, { row }) => {
            return h('span', this.$format.toText(row.supportCost))
          }
        },
        { label: '金额', prop: '',
          render: (h, { row }) => {
            return h('span', this.$format.toText(row.totalMoney))
          } }
      ]
    }
  },
  methods: {
    onDispatch() {
      this.isShowDispatch = true
    }
    // onReceiveServiceItem(val) {
    //   this.$emit('on-dispatch', val)
    // }
  }
}
</script>

<style>
</style>
