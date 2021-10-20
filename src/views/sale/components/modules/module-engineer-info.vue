<template>
  <div>
    <xn-description title="工程师信息">
      <xn-table
        v-if="list.length"
        border
        :data="list"
        :columns="listHeader"
        :auto-height="false"
        :show-page="false"
      />
      <xn-empty v-else desc="暂无工程师信息，请派单工程师" />
    </xn-description>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      listHeader: [
        { label: '工程师姓名', prop: 'engineerName' },
        { label: '工程师电话', prop: 'mobile' },
        { label: '工程师级别', prop: 'levelName' }
      ]
    }
  },
  mounted() {
    this.$bus.$on('on-engineer', (v) => {
      this.list = v
    })
  },
  beforeDestroy() {
    this.$bus.$off('on-engineer')
  }
}
</script>

<style>

</style>
