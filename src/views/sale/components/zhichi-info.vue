<template>
  <xn-drawer
    title="详情"
    :show.sync="show"
    append-to-body
    :before-close="onClose"
    @on-open="onOpen"
  >
    <module-basic :data="form" />
    <module-pay auth-key="auth663" :data="form" @confirm-coll="onColl" />
    <module-service-info ref="serviceInfo" :data="form" />
    <module-service-engineer :data="form" @on-remove="onRemoveEngineer" />
    <module-service-address :data="form" />
    <module-service-report :data="form" />
    <module-service-price :data="form" />
    <template #footer>
      <el-button
        v-if="form.orderStatus === 2"
        type="primary"
        @click="onSubmit"
      >确认派单</el-button>
      <span v-permission="['auth665']" class="mr-10">
        <el-button
          v-if="form.orderStatus === 3"
          type="primary"
          @click="onSubmitReport"
        >提交报告</el-button>
      </span>
      <el-button @click="onClose">关闭</el-button>
    </template>
  </xn-drawer>
</template>
<script>
import moduleBasic from './modules/module-basic'
import modulePay from './modules/module-pay'
import moduleServiceInfo from './modules/module-service-info'
import moduleServiceAddress from './modules/module-service-address'
import moduleServicePrice from './modules/module-service-price'
import moduleServiceEngineer from './modules/module-service-engineer'
import moduleServiceReport from './modules/module-service-report'
export default {
  components: {
    moduleBasic,
    modulePay,
    moduleServiceInfo,
    moduleServiceAddress,
    moduleServicePrice,
    moduleServiceEngineer,
    moduleServiceReport
  },
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
      form: {
        sendOrderEngineerList: []
      },
      pmsAccessoryList: []
    }
  },
  computed: {},
  mounted() {
    this.$bus.$on('on-dispatch', (v) => {
      this.onReceiveServiceItem(v)
    })
    this.$bus.$on('on-report', (arr) => {
      this.pmsAccessoryList = arr
    })
  },
  beforeDestroy() {
    this.$bus.$off('on-dispatch')
    this.$bus.$off('on-report')
    // this.$bus.$off('on-remove-engineer')
  },
  methods: {
    onClose() {
      this.$emit('update:show', false)
    },
    onOpen() {
      this.fnGetInfo()
    },
    async fnGetInfo() {
      const { code, data } = await this.$api.saleZhichi.detail({
        id: this.rowData.id
      })
      if (code === 200) {
        this.form = data
        if (!data.pmsSupportCheckRecordVO) {
          this.$set(data, 'pmsSupportCheckRecordVO', { pmsAccessoryList: [] })
        }
        this.$set(this.form, 'sendOrderEngineerList', [])
      }
    },
    // 接收传过来的派单
    onReceiveServiceItem(val) {
      const ids = this.form.sendOrderEngineerList.map(
        (item) => item.engineerId
      )
      if (ids.length) {
        val.forEach((item) => {
          if (!ids.includes(item.engineerId)) {
            this.form.sendOrderEngineerList.unshift(item)
          } else {
            this.form.sendOrderEngineerList.forEach((itemP) => {
              itemP.pmsSupportDispatchDetailList = [
                ...item.pmsSupportDispatchDetailList,
                ...itemP.pmsSupportDispatchDetailList
              ]
            })
          }
        })
      } else {
        this.form.sendOrderEngineerList = val
      }
    },
    // 移除工程师信息
    onRemoveEngineer(v) {
      const {
        form: { sendOrderEngineerList }
      } = this
      sendOrderEngineerList.length &&
        sendOrderEngineerList.forEach((item, idx, arr) => {
          if (v.id === item.id) {
            arr.splice(idx, 1)
          }
        })
    },
    // 确认收款
    onColl() {
      this.fnGetInfo()
    },
    async onSubmit() {
      const {
        form: { sendOrderEngineerList },
        rowData: { id }
      } = this
      if (!sendOrderEngineerList.length) {
        this.$message.warning('请先派单工程师')
        this.$refs.serviceInfo.onDispatch()
        return
      }
      const { code, msg } = await this.$api.saleZhichi.sendOrder({
        id,
        sendOrderEngineerList
      })
      if (code === 200) {
        this.$message.success(msg)
        this.fnGetInfo()
      }
    },
    // 提交验收报告
    async onSubmitReport() {
      const { pmsAccessoryList } = this
      if (!pmsAccessoryList.length) {
        this.$message.warning('请上传验收附件')
        return
      }
      const { code, msg } = await this.$api.saleZhichi.submitReport({
        pmsAccessoryList,
        id: this.rowData.id
      })
      if (code === 200) {
        this.$message.success(msg)
        this.fnGetInfo()
        this.$parent.fnGetList()
      }
    }
  }
}
</script>
