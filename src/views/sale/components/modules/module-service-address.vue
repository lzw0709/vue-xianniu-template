<template>
  <!-- 服务地址信息 -->
  <xn-description title="服务地址信息">
    <xn-description-item label="联系人">
      {{ data.linkName || "-" }}
    </xn-description-item>
    <xn-description-item label="联系方式">
      {{ data.linkMobile || '-' }}
    </xn-description-item>
    <xn-description-item label="服务地址" span="3">
      {{ `${data.regionName} `+`${data.addr || "-"}` }}
    </xn-description-item>
  </xn-description>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  methods: {

  }
}
</script>

<style>
</style>
