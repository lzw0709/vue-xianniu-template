<template>
  <xn-dialog
    title="切换企业"
    append-to-body
    :show.sync="show"
    :before-close="onClose"
    width="600px"
    :show-confirm="false"
    @on-open="onOpen"
  >
    <el-row v-if="list.length" :gutter="20">
      <el-col
        v-for="(item, idx) in list"
        :key="idx"
        class="mb-20"
        :span="8"
        :offset="0"
      >
        <el-card class="item" :class="{'is-active':item.isActive}" :body-style="{ padding: '0px' }" @click.native="onChange(item)">
          <el-tag class="is-default" :type="item.isDefault == 1 ? 'success' : 'info'" size="mini" effect="dark" @click.stop="onChangeDefault(item)">
            {{ item.isDefault == 1 ? '默认' : '设为默认' }}
          </el-tag>
          <el-image :src="item.logoUrl" class="cus-el-image" fit="cover">
            <div slot="error" class="image-slot">
              暂无企业LOGO
            </div>
          </el-image>
          <div style="padding: 10px">
            <span>{{ item.tenantName }}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <xn-empty v-else text="暂无企业" />
  </xn-dialog>
</template>
<script>
import { mapGetters } from 'vuex'
import router from '@/router'
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      form: {
        val: ''
      }
      // list: []
    }
  },
  computed: {
    list() {
      return this.enterprise_list
    },
    ...mapGetters(['user_info', 'enterprise_list'])
  },
  mounted() {

  },
  methods: {
    onClose() {
      this.$emit('update:show', false)
    },
    async onChange({ bossUserId, tenantId, isActive }) {
      if (tenantId === this.user_info.tenantId && this.list.length === 1) {
        this.$message.warning('当前企业只有一个，无法切换')
        return
      }
      if (isActive) {
        return
      }
      const { code, data: { token }, data } = await this.$api.person.changeTenant({ bossUserId })
      if (code === 200) {
        this.$message.success('切换成功')
        this.$store.commit('user/SET_TOKEN', token)
        this.$store.commit('user/SET_USER_INFO', data)
        const { roles } = await this.$store.dispatch('user/getInfo')
        const accessRoutes = await this.$store.dispatch('permission/generateRoutes', roles)
        router.addRoutes(accessRoutes);
        (this.list || []).forEach(item => {
          item.isActive = false
          if (item.tenantId === tenantId) {
            item.isActive = true
          }
        })
        this.onClose()
      }
      // this.currentCard = idx
    },
    onOpen() {
      this.init()
    },
    init() {
      (this.list || []).forEach(item => {
        if (item.tenantId === this.user_info.tenantId) {
          item.isActive = true
        }
      })
    },
    // async fnGetList() {
    //   const { code, data } = await this.$api.person.findTenantMessage()
    //   if (code === 200) {
    //     data.forEach(item => {
    //       item.isActive = false
    //     })
    //     this.list = data
    //     this.init()
    //   }
    // },
    // async onSwitch() {
    //   const bossUserId = this.list.filter(item => item.isActive).map(item => item.bossUserId).join('')
    //   const { code, msg } = await this.$api.person.updDefaultTenant({ bossUserId })
    //   if (code === 200) {
    //     this.$message.success(msg)
    //   }
    // },
    async onChangeDefault({ isDefault, bossUserId }) {
      // eslint-disable-next-line eqeqeq
      if (isDefault != 1) {
        this.$confirm('确定设为默认企业吗？', '提示', { type: 'warning' }).then(async() => {
          const { code, msg } = await this.$api.person.updDefaultTenant({ bossUserId })
          if (code === 200) {
            this.$message.success(msg)
            this.$store.dispatch('user/getEnterprise')
          }
        })
      }
    }
  }
}
</script>
<style scoped lang="scss">
.item {
  cursor: pointer;
  position: relative;
  min-height: 174px;
  &.is-active,&:hover{
      border-color:#1890ff;
      box-shadow: 0 2px 12px 0 rgba(#1890ff, 0.4)
  }
  .is-default{
    position: absolute;
    right: 5px;
    top: 5px;
    z-index: 10;
  }
}
</style>
