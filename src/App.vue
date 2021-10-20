<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapGetters(['permission_routes'])
  },
  watch: {
    '$route': {
      handler(n) {
        const routers = this.permission_routes
        const targetRoute = routers.length && routers.length >= 6 ? routers[6].children[0].name : 'Dashboard'
        console.log(targetRoute)
        if (n.name === 'Dashboard') {
          this.$router.push({
            name: targetRoute,
            redirect: true
          })
        }
      }
    }
  }
}
</script>
