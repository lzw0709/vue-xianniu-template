<template>
  <xn-drawer
    title="详情"
    :show.sync="show"
    :before-close="onClose"
    @on-open="onOpen"
  >
    <common-info :form="form" :project-type="rowData.projectType" />
    <xn-description title="设备维保">
      <xn-table
        :data="partList"
        border
        :auto-height="false"
        :columns="listdeviceHeader"
        :page="pageQuery"
      />
    </xn-description>
    <xn-description title="人工服务">
      <xn-table
        :data="serviceList"
        border
        :auto-height="false"
        :columns="listManHeader"
        :page="pageQuery"
      />
    </xn-description>
    <el-form ref="form" :model="form" label-width="80px">
      <xn-description title="报价单附件">
        <div style="width: 100%">
          <xn-upload
            v-if="!form.pmsAccessoryList"
            :file-list.sync="form.pmsAccessoryList"
            disabled
          />
          <div v-else class="text-center">
            <el-empty :image-size="60" description="暂无报价单" />
          </div>
        </div>
      </xn-description>
      <xn-description title="报价金额">
        <div>
          <el-form-item label="报价总额">
            <span class="text-primary">
              {{ $format.toText(form.quoteMoney) }}
            </span>
          </el-form-item>
        </div>
      </xn-description>
    </el-form>
  </xn-drawer>
</template>
<script>
import commonInfo from './common-info'
import mixins from '../mixins'
export default {
  components: {
    commonInfo
  },
  mixins: [mixins],
  props: {
    show: {
      type: Boolean,
      default: false
    },
    rowData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      form: {},
      partList: [],
      serviceList: [],
      listdeviceHeader: [
        { label: '服务名称', prop: 'name' },
        {
          label: '税率',
          prop: 'tax',
          render: (h, { row }) => {
            return h('span', row.tax !== '-' ? `${row.tax}%` : '-')
          }
        },
        {
          label: '报价',
          prop: 'price',
          render: (h, { row }) => {
            return h('span', this.$format.toText(row.price))
          }
        }
      ],
      listManHeader: [
        { label: '服务名称', prop: 'name' },
        {
          label: '税率',
          prop: 'tax',
          render: (h, { row }) => {
            return h('span', row.tax !== '-' ? `${row.tax}%` : '-')
          }
        },
        {
          label: '报价',
          prop: 'price',
          render: (h, { row }) => {
            return h('span', this.$format.toText(row.price))
          }
        }
      ]
    }
  },
  methods: {
    onOpen() {
      this.fnGetInfo()
    },
    onClose() {
      this.$emit('update:show', false)
    }
  }
}
</script>
