<template>
  <!-- 工程师信息 -->
  <xn-description title="工程师信息">
    <template v-if="list.length">
      <el-card
        v-for="(item, idx) in list"
        :key="idx"
        :class="{ 'mt-10': idx !== 0 }"
        shadow="always"
        :body-style="{ padding: '20px' }"
      >
        <div slot="header" class="flex justify-content-between">
          <div>
            <span>【{{ idx + 1 }}】</span>
            <span class="ml-20">工程师姓名：{{ item.engineerName }}</span>
            <span class="ml-20">手机号：{{ item.mobile || item.phone }}</span>
            <span
              v-if="item.createDate"
              class="ml-20"
            >接单时间：{{ item.createDate }}</span>
          </div>
          <el-link
            v-if="data.orderStatus === 2"
            type="primary"
            icon="el-icon-delete"
            @click="onRemoveEng(item)"
          >移除</el-link>
        </div>
        <xn-table
          :data="childList(item)"
          border
          :auto-height="false"
          :columns="listHeader"
          :show-page="false"
        />
      </el-card>
    </template>
    <xn-empty v-else desc="暂无工程师信息" />
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
  data() {
    return {
      listHeader: [
        { label: '服务名称', prop: 'supportName' },
        { label: '预计工时', prop: 'workHours' },
        { label: '服务描述', prop: 'supportDesc' }
      ]
    }
  },
  computed: {
    list() {
      var list = []
      if (this.data.orderStatus === 2) {
        if (this.data.sendOrderEngineerList && this.data.sendOrderEngineerList.length) {
          list = this.data.sendOrderEngineerList
        }
      } else {
        list = this.data.pmsSupportDispatchList || []
      }
      return list
    },
    childList() {
      return (item) => {
        const { data } = this
        return data.orderStatus === 2
          ? item.pmsSupportDispatchDetailList
          : item.serviceItemList
      }
    }
  },
  mounted() {
  },
  methods: {
    onRemoveEng(item) {
      this.$emit('on-remove', item)
    }
  }
}
</script>

<style>
</style>
