<template>
  <xn-dialog title="产品信息" :show.sync="show" size="medium" :before-close="onClose" :show-confirm="false" @on-open="onOpen">
    <xn-table border :data="list" :columns="listHeader" :show-page="false" />
  </xn-dialog>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    rowData: {
      type: Object,
      default: () => []
    }
  },
  data() {
    return {
      list: [],
      listHeader: [
        { label: '备件厂商', prop: 'partVendor' },
        { label: '备件名称', prop: 'partName' },
        { label: '备件PN', prop: 'pn' },
        { label: '备件规格', prop: 'configName' },
        { label: '数量', prop: 'numberOfPart' },
        { label: '单价', prop: 'unitPrice' }
      ]
    }
  },
  methods: {
    onClose() {
      this.$emit('update:show', false)
    },
    onOpen() {
      this.fnGetList()
    },
    async fnGetList() {
      const { code, data } = await this.$api.sale.partInfo({ id: this.rowData.id })
      if (code === 200) {
        this.list = data
      }
    }
  }
}
</script>
