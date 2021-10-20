<template>
  <xn-description title="设备列表">
    <xn-table border :data="list" :columns="listHeader" :auto-height="false" :page="page" :get-list="getList" />
  </xn-description>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => {}
    },
    getList: {
      type: Function,
      default: () => {}
    },
    page: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      listHeader: [
        { label: '设备分类', prop: 'deviceTypeName' },
        { label: '厂商', prop: 'deviceVendor' },
        { label: '设备型号', prop: 'deviceName' },
        { label: '设备SN', prop: 'sn' },
        { label: '服务开始', prop: 'startTime' },
        { label: '服务结束', prop: 'endTime' },
        { label: '地区', prop: 'cityName' }
      ]
    }
  }
}
</script>

<style>

</style>
