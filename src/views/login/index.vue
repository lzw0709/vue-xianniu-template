<template>
  <component :is="login" />
</template>

<script>
import loginDev from './login-dev'
import loginTest from './login-test'
import { isDev } from '@/utils'
export default {
  name: 'Login',
  components: { loginDev, loginTest },
  data() {
    return {}
  },
  computed: {
    login() {
      return isDev() ? loginDev : loginTest
    }
  }

}
</script>

<style lang="scss">

</style>
