<template>
  <xn-dialog
    title="派单工程师"
    append-to-body
    :show.sync="show"
    :before-close="onClose"
    size="medium"
    @on-open="onOpen"
    @on-confirm="onConfirmSelection"
  >
    <el-alert show-icon :is-big="false" :type="maxEng === engSelectList.length ? 'success' : 'warning'" close-text="知道了" :title="`需要 ${maxEng} 名工程师，已选择：${engSelectList.length}`" />
    <el-input
      v-model="keyName"
      class="mt-20"
      style="width: 250px"
      placeholder="工程师名称/手机号"
      clearable
      @clear="onClear"
    >
      <template slot="append">
        <el-button type="primary" icon="el-icon-search" @click="fnGetList" />
      </template>
    </el-input>
    <xn-table
      ref="engList"
      border
      class="mt-20"
      :data="list"
      selection
      :max="maxEng"
      row-key="id"
      reserve-selection
      :columns="listHeader"
      :page="pageQueryEng"
      :get-list="fnGetList"
      @on-selection="onSelectEng"
    />
    <!-- <template #footer>
      <el-button @click="onClose">取消</el-button>
      <el-button type="primary" @click="onClose">确认</el-button>
    </template> -->
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
      pageQueryEng: {
        pageNum: 1,
        pageSize: 10,
        total: 0
      },
      keyName: '',
      list: [],
      listHeader: [
        { label: '工程师姓名', prop: 'engineerName' },
        { label: '工程师电话', prop: 'mobile' },
        { label: '工程师级别', prop: 'levelName' }
      ],
      engSelectList: []
    }
  },
  computed: {
    // 要求最多勾选工程师
    maxEng() {
      const { data: { pmsSalesOnSiteOrderDetailList }} = this
      const num = pmsSalesOnSiteOrderDetailList && pmsSalesOnSiteOrderDetailList.reduce((num, v) => {
        return num + v.numberOfEngineer
      }, 0)
      return num || 0
    },
    // 根据 勾选生成的对象 转化为最终的数组
    newSelectList() {
      return (obj) => {
        return Object.values(obj)
      }
    }
  },
  watch: {
    show(n) {
      if (!n) {
        this.engSelectList = []
        this.list = []
        this.keyName = ''
        this.$refs.engList.clearSelection()
      }
    }
  },
  methods: {
    onClose() {
      this.$emit('update:show', false)
    },
    onOpen() {
      this.fnGetList()
    },
    onClear() {
      this.pageQueryEng.pageNum = 1
      this.fnGetList()
    },
    async fnGetList() {
      if (this.engSelectList.length) {
        this.engSelectList = []
        this.$refs.engList.clearSelection()
      }
      var ids = this.engSelectList.map(item => item.id)
      const { code, data, count } = await this.$api.saleZhuchang.engList({
        ...this.pageQueryEng,
        keyName: this.keyName,
        tsTenantEngineerIdList: ids
      })
      if (code === 200) {
        this.list = data
        this.pageQueryEng.total = count
      }
    },
    onSelectEng(selection) {
      this.engSelectList = selection
    },
    onConfirmSelection() {
      if (this.maxEng !== this.engSelectList.length) {
        this.$message.warning(`需要 ${this.maxEng} 名工程师，还差${this.maxEng - this.engSelectList.length}名`)
        return
      }
      this.$bus.$emit('on-engineer', this.engSelectList)
      this.onClose()
    }
  }
}
</script>
