<template>
  <div class="app-container">
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <xn-search
        :form-data="formData"
        @on-search="onSearch"
        @on-reset="onReset"
      />
    </el-card>
    <el-card class="mt-20" shadow="always" :body-style="{ padding: '20px' }">
      <xn-table
        index
        :data="list"
        :columns="listHeader"
        :get-list="fnGetList"
      />
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: [
        {
          label: '服务单号',
          placeholder: '请输入服务单号',
          type: 'input',
          prop: 'name'
        },
        {
          label: '来源',
          placeholder: '请选择来源',
          type: 'select',
          prop: 'a'
        },
        {
          label: '创建时间',
          type: 'daterange',
          prop: 'time',
          options: {
            start: 'asd',
            end: 'dfg',
            isShortcut: true,
            startPlaceholder: '开始日期',
            endPlaceholder: '结束日期'
          }
        }
      ],
      list: [
        {
          id: 1
        }
      ],
      listHeader: [
        { label: '单号', prop: 'id' },
        { label: '事项名称', prop: 'id' },
        { label: '创建时间', prop: 'id', sortable: true },
        {
          label: '操作',
          more: {
            options: [{ label: '你好', methods: 'asd' }]
          }
        }
      ]
    }
  },
  methods: {
    onSearch(val) {
      console.log(val)
    },
    onReset() {},
    fnGetList() {}
  }
}
</script>

<style>
</style>
