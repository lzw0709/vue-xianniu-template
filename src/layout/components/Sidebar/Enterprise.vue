<template>
  <div class="enterprise-box">
    <!-- <div class="enterprise-show">
      <div class="text-ell-1">{{ user_info.tenantName }}</div>
      <div class="mt-10 text-ell-1">企业ID:{{ user_info.tenantCode }}</div>
      <el-button class="mt-10" type="primary" size="mini" @click="onOpenEnterprise">切换企业</el-button>

    </div>
    <el-tooltip effect="dark" content="切换企业" placement="right">
      <div class="enterprise-hide" @click="onOpenEnterprise">
        <i class="el-icon-s-operation" />
      </div>
    </el-tooltip> -->
    <!-- <enterprise-dialog :show.sync="isShowEnterprise" /> -->
  </div>
</template>

<script>
// import EnterpriseDialog from './EnterpriseDialog'
import { mapGetters } from 'vuex'
export default {
  // components: { EnterpriseDialog },
  data() {
    return {
      isShowEnterprise: false
    }
  },
  computed: {
    ...mapGetters(['user_info'])
  },
  methods: {
    onOpenEnterprise() {
      this.isShowEnterprise = true
    }
  }
}
</script>

<style>

</style>
