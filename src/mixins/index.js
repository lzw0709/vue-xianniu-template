export default {
  data() {
    return {
      pageQuery: {
        pageNum: 1,
        pageSize: 10,
        total: 0
      }
    }
  },
  computed: {
    notroles0() {
      return this.$store.getters.roles.id !== 0
    },
    rolesD() {
      return this.$store.getters.roles.tenantTypeCode === 'D'
    }
  }
}
