<template>
  <div>
    <xn-description title="服务信息">
      <template #more>
        <el-button
          v-if="data.orderStatus === 2"
          v-permission="['auth704']"
          type="success"
          size="mini"
          @click="onDispatch"
        >派单工程师</el-button>
      </template>
      <xn-table
        border
        :data="data.pmsSalesOnSiteOrderDetailList"
        :columns="listHeader"
        :auto-height="false"
        :show-page="false"
      />
    </xn-description>
    <dispatch-engineer :show.sync="isShowDispatch" :data="data" />
  </div>
</template>

<script>
import dispatchEngineer from '../dispatchEngineer'
export default {
  components: { dispatchEngineer },
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      isShowDispatch: false,
      listHeader: [
        { label: '工程师类型', prop: 'engineerTypeName' },
        { label: '工程师级别', prop: 'engineerLevelName' },
        { label: '服务级别', prop: 'slaName' },
        { label: '学历', prop: 'educationName' },
        { label: '工作年限', prop: 'workYearsName' },
        { label: '工程师数量', prop: 'numberOfEngineer' },
        { label: '其他要求', prop: 'requirement' },
        {
          label: '服务时间',
          prop: '',
          render: (h, { row }) => {
            return h('span', `${row.startTime}~${row.endTime}`)
          }
        },
        {
          label: '金额',
          prop: '',
          render: (h, { row }) => {
            return h('span', this.$format.toText(row.totalMoney))
          }
        }
      ],
      engineerIdList: []
    }
  },
  methods: {
    onDispatch() {
      this.isShowDispatch = true
    }
  }
}
</script>

<style>
</style>
