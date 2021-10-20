<template>
  <div>
    <xn-description title="申请售后产品信息">
      <el-card shadow="always" class="cus-el-card" :body-style="{ padding: '15px' }">
        <div slot="header">
          <span>工程师姓名：xxx</span>
          <span class="ml-20">手机号：xxx</span>
          <span class="ml-20">接单时间：xxx</span>
        </div>
        <xn-table border :data="list" :columns="listHeader" :auto-height="false" />
      </el-card>
    </xn-description>
    <xn-description title="售后说明">
      <p>{{ data.afterSaleReasonOther ||'' }}</p>
      <xn-upload disabled :file-list.sync="data.pmsAfterSaleImgList" />
    </xn-description>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      listHeader: [
        { label: '服务名称', prop: 'supportName' },
        { label: '服务规格/描述', prop: '' },
        { label: '数量', prop: '' },
        { label: '单价', prop: '' }
      ],
      list: []
    }
  },
  computed: {
    // 发货前
    serviceItemList() {
      const val = []

      return val
    },
    // 发货后
    pmsAfterSaleDispatchList() {
      const val = []

      return val
    }
  }
}
</script>

<style>

</style>
