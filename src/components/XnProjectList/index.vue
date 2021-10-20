<template>
  <xn-dialog
    title="选择报价产品"
    :show.sync="show"
    :before-close="onClose"
    size="large"

    append-to-body
    @on-open="onOpen"
  >
    <el-form ref="form" :model="form" label-width="0">
      <el-form-item label="" prop="key">
        <el-input v-model="form.key" style="width:280px" placeholder="请填写名称或PN或厂商" clearable @clear="onSearch">
          <el-button slot="append" icon="el-icon-search" @click="onSearch" />
        </el-input>
      </el-form-item>
    </el-form>

    <xn-table
      ref="projectList"
      :page="pageQuery"
      border
      :data="list"
      row-key="id"
      selection
      :get-list="fnGetProjectList"
      @on-selection="selection"
    >
      <!--  -->
      <el-table-column prop="pn" label="备件PN" />
      <el-table-column prop="goodsName" label="备件名称" />
      <el-table-column prop="configName" label="规格" />
      <el-table-column prop="vendorName" label="厂商" />
      <el-table-column prop="partDesc" label="备件描述" />
      <el-table-column prop="typeAName" label="备件分类(一级)" />
      <el-table-column prop="typeBName" label="备件分类(二级)" />
      <el-table-column prop="price" label="单价" />
    </xn-table>
    <template #footer>
      <el-button @click="onClose">取消</el-button>
      <el-button type="primary" @click="onSubmit"><span v-if="len"> 已选择({{ len }})</span> <span v-else>确认</span> </el-button>
    </template>
  </xn-dialog>
</template>

<script>
export default {
  name: 'XnProjectList',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    ids: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selectObj: {},
      list: [],
      selected: [],
      form: {
        key: ''
      }
    }
  },
  computed: {
    // 根据 勾选生成的对象 转化为最终的数组
    newSelectList() {
      return (obj) => {
        return Object.values(obj)
      }
    },
    len() {
      return this.selected.length
    }
  },

  methods: {
    onClose() {
      this.$emit('update:show', false)
    },
    onOpen() {
      this.fnGetProjectList()
    },
    onSearch() {
      this.pageQuery.pageNum = 1
      this.fnGetProjectList()
    },
    async fnGetProjectList() {
      const { code, data, count } = await this.$api.purchHall.quoteList({
        key: this.form.key,
        ...this.pageQuery
      })
      if (code === 200) {
        this.selected = []
        this.list = data
        this.pageQuery.total = count
        this.$nextTick(() => {
          this.checkSelect()
          this.setItemSelect(this.ids)
        })
      }
    },
    // 检查选中
    checkSelect() {
      this.list.forEach((row) => {
        if (this.isHasField(this.selectObj, row.id)) {
          this.$refs.projectList.toggleRowSelection(row, true)
        } else {
          this.$refs.projectList.toggleRowSelection(row, false)
        }
      })
    },
    // 编辑状态找到对应的勾选
    setItemSelect(ids = []) {
      const _ids = ids.map(item => item.id)
      this.$refs.projectList.clearSelection()
      this.list.forEach((row) => {
        if (_ids.includes(row.id)) {
          this.$refs.projectList.toggleRowSelection(row, true)
        }
      })
    },
    // 检查对象下某个字段是否存在
    isHasField(obj, field) {
      return Object.prototype.hasOwnProperty.call(obj, field)
    },
    selection(selection) {
      this.list.forEach((row) => {
        if (this.isHasField(this.selectObj, row.id)) {
          selection.length ? null : delete this.selectObj[row.id]
        } else {
          this.selectObj[row.id] = row
        }
      })
      this.selected = selection
    },
    onSubmit() {
      this.$emit('on-select', this.selected, this.newSelectList(this.selectObj))
    }
  }
}
</script>

<style>
</style>
