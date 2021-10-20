<template>
  <xn-dialog title="服务信息" :show.sync="show" size="medium" :before-close="onClose" :show-confirm="false" @on-open="onOpen">
    <xn-table :data="list" border :columns="listHeader" :show-page="false" />
  </xn-dialog>
</template>
<script>
const HEADER1 = [
  { label: '服务名称', prop: 'supportName' },
  { label: '预计工时', prop: 'workHours' },
  { label: '服务描述', prop: 'supportDesc' }
]
const HEADER2 = [
  { label: '服务名称', prop: '' },
  { label: '服务规格', prop: '' },
  { label: '数量', prop: '' }
]
export default {
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
      list: []
    }
  },
  computed: {
    listHeader() {
      return this.rowData.createSource === 1 ? HEADER1 : HEADER2
    }
  },
  methods: {
    onClose() {
      this.$emit('update:show', false)
    },
    onOpen() {
      this.fnGetInfo()
    },
    async fnGetInfo() {
      const { code, data } = await this.$api.saleZhichi.serviceInfo({ id: this.rowData.id })
      if (code === 200) {
        this.list = data
      }
    }
  }
}
</script>
