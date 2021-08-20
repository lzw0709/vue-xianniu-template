<template>
  <div class="app-container">
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <el-form ref="formSearch" :model="formSearch" label-width="80px" inline>
        <el-form-item label="条件">
          <el-input v-model="formSearch.value" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search">查询</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>

    </el-card>
    <el-card class="mt-20" shadow="always" :body-style="{ padding: '20px' }">
      <el-table :data="list" hover stripe>
        <el-table-column label="字段" width="" prop="id" />
        <el-table-column label="label" width="" prop="label" />
        <el-table-column label="age" width="" prop="age" />
        <el-table-column label="操作" width="" prop="">
          <template slot-scope="{row}">
            <el-button type="primary" @click="handleBtn(row)">按钮</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- <xn-page /> -->
      <!-- <xn-page
        :total="pageQuery.total"
        :page.sync="pageQuery.pageNum"
        :limit.sync="pageQuery.pageSize"
        @pagination="fnGetList"
      /> -->
    </el-card>
    <el-dialog
      title="弹窗"
      :visible.sync="isShow"
      width="720px"
      @close="isShow = false"
    >
      <div class="pl-30 pr-30">
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
          <el-form-item label="表单1" prop="field1">
            <el-input v-model="form.field1" clearable placeholder="请填写" />
          </el-form-item>
          <el-form-item label="表单1" prop="field1">
            <el-input v-model="form.field1" clearable placeholder="请填写" />
          </el-form-item>
          <el-form-item label="表单1" prop="field1">
            <el-input v-model="form.field1" clearable placeholder="请填写" />
          </el-form-item>
          <el-form-item label="表单1" prop="field1">
            <el-input v-model="form.field1" clearable placeholder="请填写" />
          </el-form-item>
          <el-form-item label="表单1" prop="field1">
            <el-input v-model="form.field1" clearable placeholder="请填写" />
          </el-form-item>
        </el-form>

      </div>
      <span slot="footer">
        <el-button @click="isShow = false">取消</el-button>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [{ id: 1, label: '你好', age: 12 }],
      formSearch: {
        value: ''
      },
      form: {
        field1: ''
      },
      rules: {
        field1: [
          { required: true, message: '填写', trigger: ['change', 'blur'] }
        ]
      },
      isShow: false
    }
  },
  watch: {
    isShow(n) {
      if (!n) {
        this.isShow = false
        this.$refs.form.resetFields()
      }
    }
  },
  created() {
    this.fnGetList()
    this.fnGetList1()
    this.fnGetList2()
  },
  methods: {
    async fnGetList() {
      await this.$apiUrl.logistics.trajectory({ a: 123123 })
    },
    async fnGetList1() {
      await this.$apiUrl.logistics.asd({})
    },
    async fnGetList2() {
      await this.$apiUrl.logistics.ffff({})
    },
    handleBtn(row) {
      console.log(row)
      this.isShow = true
    },
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          //
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style>

</style>
