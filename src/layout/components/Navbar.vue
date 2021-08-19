<template>
  <div class="navbar">
    <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
    <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />
    <div class="right-menu">
      <el-dropdown trigger="click" class="avatar-container right-menu-item hover-effect">
        <div class="avatar-wrapper flex align-items-center">
          <el-image :src="user_info.icon" fit="cover" class="user-avatar">
            <div slot="error" class="image-slot el-icon-user-solid" />
          </el-image>

          <span class="username">{{ user_info.userName }}</span>
          <i class="el-icon-caret-bottom" />
        </div>
        <!-- <i class="el-icon-user-solid fz-18" /> -->
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <el-dropdown-item @click.native="logout">
            <span style="display:block;">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
// import ErrorLog from '@/components/ErrorLog'
// import Screenfull from '@/components/Screenfull'
// import SizeSelect from '@/components/SizeSelect'
// import Search from '@/components/HeaderSearch'

export default {
  components: {
    Breadcrumb,
    Hamburger
    // ErrorLog,
    // Screenfull,
    // SizeSelect,
    // Search
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'device',
      'user_info'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }

  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    // line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-flex;
    align-items: center;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        // margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 30px;
          height: 30px;
          line-height: 30px;
          background-color: #e2e2e2;
          border-radius: 30px;
          text-align: center;
          color: #fff;
        }
          .username{
            margin-left: 5px;
            font-size: 14px;
          }

        .el-icon-caret-bottom {
          // cursor: pointer;
          // position: absolute;
          // right: -20px;
          // top: 25px;
          margin-left: 5px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
