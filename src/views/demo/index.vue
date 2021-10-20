<template>
  <div class="app-container">
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <!-- <el-form ref="formSearch" :model="formSearch" label-width="80px" inline>
        <el-form-item label="条件">
          <el-input v-model="formSearch.value" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search">查询</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form> -->
      <xn-search
        :form-data="formTypeData"
        @on-search="onSearch"
        @on-reset="onReset"
      />
    </el-card>
    <el-card class="mt-20" shadow="always" :body-style="{ padding: '20px' }">
      <div class="">
        <el-button type="primary" @click="isShow = true">按钮</el-button>
      </div>
      <xn-table :data="list" class="mt-20" selection :get-list="fnGetList" :columns="headerColumns" />
      <!-- <xn-page /> -->
      <!-- <xn-page
        :total="pageQuery.total"
        :page.sync="pageQuery.pageNum"
        :limit.sync="pageQuery.pageSize"
        @pagination="fnGetList"
      /> -->
    </el-card>
    <xn-dialog title="啊实打实" :show="isShow" :before-close="()=>{isShow = false}" />
    <!-- <el-dialog
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
    </el-dialog> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      formTypeData: [
        {
          label: '名称',
          placeholder: '请输入要查询的公司名称',
          type: 'input',
          prop: 'name'
        },
        {
          label: '合同类型',
          placeholder: '请选择合同类型',
          type: 'select',
          data: [
            { label: '执行中', value: 10 },
            { label: '已结束', value: 20 }
          ],
          prop: 'status'
        },

        {
          label: '日期',
          placeholder: '日期',
          type: 'date',
          prop: 'date',
          options: {
            start: 'startDate',
            end: 'endDate'
          }
        }

      ],
      headerColumns: [
        { prop: 'id', label: '字段1' },
        { prop: 'id', label: '字段1' },
        { prop: 'id', label: '字段1' },
        { prop: 'id', label: '字段1' },
        { prop: 'id', label: '字段1' },
        { prop: 'id', label: '字段1' },
        { prop: 'id', label: '字段1' },
        { prop: 'id', label: '字段1' },
        { prop: 'id', label: '字段1' },
        { prop: 'id', label: '字段1' },
        { prop: 'id', label: '字段1' },
        { prop: 'id', label: '字段1' },
        { prop: 'id', label: '字段1' },
        { prop: 'id', label: '字段1' },
        { prop: 'id', label: '字段1' },
        { prop: 'id', label: '字段1' },
        { prop: 'id', label: '字段1' },
        { prop: 'id', label: '字段1' },
        { prop: 'id', label: '字段1' },
        { prop: 'id', label: '字段1' },
        { prop: 'id', label: '字段1' },
        { prop: 'id', label: '字段1' },
        { prop: 'id', label: '字段1' },
        { prop: 'id', label: '字段1' },
        { prop: 'id', label: '字段1' },
        { prop: 'id', label: '字段1' },
        { prop: 'id', label: '字段1' },
        { prop: 'id', label: '字段1' },
        { prop: 'id', label: '字段1' },
        { prop: 'id', label: '字段1' },
        {
          label: '操作',
          fixed: 'right',
          width: '150px,',
          more: {
            options: [
              {
                label: '按钮1',
                methods: 'handleClick1',
                icon: 'el-icon-delete'
              },
              {
                label: '按钮1',
                methods: 'handleClick1',
                icon: 'el-icon-delete'
              }
            ]
          }
        }
      ],
      list: [
        { id: 1, label: '你好', age: 12 },
        { id: 1, label: '你好', age: 12 },
        { id: 1, label: '你好', age: 12 },
        { id: 1, label: '你好', age: 12 },
        { id: 1, label: '你好', age: 12 },
        { id: 1, label: '你好', age: 12 },
        { id: 1, label: '你好', age: 12 },
        { id: 1, label: '你好', age: 12 },
        { id: 1, label: '你好', age: 12 },
        { id: 1, label: '你好', age: 12 },
        { id: 1, label: '你好', age: 12 },
        { id: 1, label: '你好', age: 12 },
        { id: 1, label: '你好', age: 12 },
        { id: 1, label: '你好', age: 12 },
        { id: 1, label: '你好', age: 12 },
        { id: 1, label: '你好', age: 12 },
        { id: 1, label: '你好', age: 12 },
        { id: 1, label: '你好', age: 12 },
        { id: 1, label: '你好', age: 12 },
        { id: 1, label: '你好', age: 12 },
        { id: 1, label: '你好', age: 12 },
        { id: 1, label: '你好', age: 12 },
        { id: 1, label: '你好', age: 12 }
      ],
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
        //
      }
    }
  },
  created() {

  },
  methods: {
    onSearch(val) {
      console.log(val)
    },
    onReset() {
    },

    onSubmit() {
      this.$refs.form.validate((valid) => {
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
