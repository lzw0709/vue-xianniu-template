<template>
  <xn-dialog
    :title="title"
    append-to-body
    :show.sync="show"
    :before-close="onClose"
    size="large"
    @on-open="onOpen"
  >
    <div class="flex justify-content-center">
      <el-steps
        :active="active"
        style="width: 80%"
        align-center
        finish-status="success"
        :process-status="active === 2 ? 'success' : 'process '"
      >
        <el-step v-for="(item, idx) in stepList" :key="idx" :title="item" />
      </el-steps>
    </div>
    <div v-show="active === 0">
      <xn-table
        class="mt-20"
        border
        :selection="data.purchaseSource === 1 && data.paymentWay !== 8"
        :data="list"
        :columns="listHeader"
        :page="pageQuery"
        @on-selection="onSelection"
      />
    </div>
    <div v-show="active === 1">
      <xn-tip class="mt-20">已选择服务项</xn-tip>
      <xn-table
        class="mt-10"
        border
        :data="selectedList"
        :columns="listHeader"
        :show-page="false"
      />
      <el-input
        v-model="keyName"
        style="width: 250px"
        class="mt-20"
        placeholder="工程师姓名/手机号"
        clearable
        @clear="onSearch"
      >
        <template slot="append">
          <el-button type="primary" icon="el-icon-search" @click="onSearch" />
        </template>
      </el-input>
      <xn-table
        ref="engList"
        :data="engList"
        border
        class="mt-10"
        selection
        :auto-height="false"
        :max="1"
        row-key="id"
        reserve-selection
        :columns="engListHeader"
        :page="engPageQuery"
        :get-list="fnGetEngList"
        @on-selection="onSelectionEng"
      />
    </div>
    <div v-show="active === 2">
      <el-result icon="success" title="派单成功" />
    </div>
    <template #footer>
      <el-button @click="onClose">关闭</el-button>
      <template v-if="active !== 2">
        <el-button
          v-show="
            active > 0 && data.purchaseSource === 1 && data.paymentWay !== 8
          "
          @click="onPrev"
        >上一步</el-button>
        <el-button type="primary" @click="onNext">{{
          active === 1 ? "确认选择" : "下一步"
        }}</el-button>
      </template>
    </template>
  </xn-dialog>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      active: 0,
      stepList: ['选择服务项', '派单工程师', '确认完成'],
      list: [],
      listHeader: [
        { label: '服务名称', prop: 'supportName' },
        { label: '预计工时', prop: 'workHours' },
        { label: '服务规格/描述', prop: 'supportDesc' }
      ],
      selectedList: [],
      keyName: '',
      engList: [],
      engListHeader: [
        { label: '工程师姓名', prop: 'engineerName' },
        { label: '工程师电话', prop: 'mobile' },
        { label: '工程师级别', prop: 'levelName' }
      ],
      engPageQuery: {
        pageNum: 1,
        pageSize: 15,
        total: 0
      },
      engSelectedList: [],
      sendOrderEngineerList: [],
      ids: {
        tsTenantEngineerIdList: [],
        salesSupportOrderIdList: []
      }
    }
  },
  computed: {
    title() {
      return this.stepList[this.active] || '确认完成'
    }
  },
  watch: {
    show(n) {
      if (!n) {
        this.active = 0
        this.selectedList = []
        this.engSelectedList = []
        this.sendOrderEngineerList = []
        this.engList = []
        this.list = []
        this.ids.tsTenantEngineerIdList = []
        this.ids.salesSupportOrderIdList = []
        this.$refs.engList.clearSelection()
      }
    }
  },
  methods: {
    onClose() {
      this.$emit('update:show', false)
    },
    onOpen() {
      this.ids.tsTenantEngineerIdList = []
      this.ids.salesSupportOrderIdList = []
      const {
        data: { sendOrderEngineerList }
      } = this
      sendOrderEngineerList.length &&
        sendOrderEngineerList.forEach((item) => {
          this.ids.tsTenantEngineerIdList.push(item.engineerId);
          ((itemChild = []) => {
            if (itemChild.pmsSupportDispatchDetailList.length) {
              itemChild.pmsSupportDispatchDetailList.forEach((itemC) => {
                this.ids.salesSupportOrderIdList.push(itemC.id)
              })
            }
          })(item)
        })
      this.fnGetList()
      this.fnGetEngList()
    },
    onSearch() {
      this.fnGetEngList()
    },
    async fnGetList() {
      const { code, data } = await this.$api.saleZhichi.serviceItemList({
        id: this.data.id,
        salesSupportOrderIdList: this.ids.salesSupportOrderIdList
      })
      if (code === 200) {
        if (this.data.purchaseSource === 2 || this.data.paymentWay === 8) {
          this.active = 1
          this.selectedList = data
        }
        this.list = data
      }
    },
    // 获取工程师列表
    async fnGetEngList() {
      const { code, data, count } = await this.$api.saleZhuchang.engList({
        tsTenantEngineerIdList: this.ids.tsTenantEngineerIdList,
        keyName: this.keyName,
        ...this.engPageQuery
      })
      if (code === 200) {
        this.engList = data
        this.engPageQuery.total = count
      }
    },
    onPrev() {
      if (this.active > 0) this.active -= 1
    },
    onNext() {
      if (this.active === 0) {
        if (!this.selectedList.length) {
          this.$message.warning('没有需要派单的服务项')
          return
        }
      }
      if (this.active === 1) {
        this.onSubmit()
        return
      }
      this.active += 1
    },
    onSelection(val) {
      this.selectedList = val
    },
    onSelectionEng(val) {
      this.engSelectedList = val
    },
    async onSubmit() {
      if (!this.selectedList.length) {
        this.$message.warning('请先选择服务项')
        return
      }
      if (!this.engSelectedList.length) {
        this.$message.warning('请选择要派单的工程师')
        return
      }
      this.sendOrderEngineerList = []
      this.sendOrderEngineerList.push({
        pmsSupportDispatchDetailList: this.selectedList,
        ...(this.engSelectedList.length && this.engSelectedList[0])
      })
      this.$bus.$emit('on-dispatch', this.sendOrderEngineerList)
      this.onClose()
    }
  }
}
</script>
