<template>
  <div class="dashboard-container">

    <!-- <div v-permission="['editor']">非管理员权限</div>
    <div v-permission="['admin']">管理员权限</div> -->

    <h2 class="text-center pt-30">欢迎您</h2>
    <!-- <el-button type="primary" size="default" @click="nihao">你好</el-button> -->

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {

  },
  methods: {

  }
}
</script>
