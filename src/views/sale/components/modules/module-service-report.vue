<template>
  <div>
    <xn-description title="服务验收报告" :middle="false">
      <xn-description-item label="验收附件" span="3">
        <xn-upload
          v-if="
            data.pmsSupportCheckRecordVO &&
              data.pmsSupportCheckRecordVO.pmsAccessoryList
          "
          :file-list.sync="data.pmsSupportCheckRecordVO.pmsAccessoryList"
          :limit="9"
          :preview="data.orderStatus !== 3"
          :disabled="data.orderStatus !== 3"
          :accept="['jpg', 'jpeg', 'png', 'xls', 'xlsx', 'pdf', 'docx']"
          :tip="data.orderStatus === 3 ? '支持jpg,png,word,excel,pdf' : ''"
          @on-success="onChange"
        />
      </xn-description-item>
      <xn-description-item label="验收结果" span="3">
        <template v-if="data && data.pmsSupportCheckRecordList">
          <el-table :data="data.pmsSupportCheckRecordList" border stripe>
            <el-table-column prop="checkRemark" label="说明" />
            <el-table-column prop="createDate" label="时间" />
            <el-table-column label="状态">
              <template slot-scope="{ row }">
                <span>{{ $enums.CHECK_STATUS.getLabel(row.checkStatus) }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="{ row }">
                <el-button
                  type="text"
                  @click="onCheckReport(row)"
                >查看报告</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
        <span v-else>暂无验收结果</span>
      </xn-description-item>
    </xn-description>
    <xn-dialog
      append-to-body
      title="服务验收报告"
      :show.sync="showReport"
      :before-close="()=>showReport = false"
      :show-confirm="false"
    >
      <xn-upload :file-list.sync="reportInfo" preview />
    </xn-dialog>
  </div>
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
      isShow: false,
      showReport: false,
      form: {
        pmsAccessoryList: [],
        checkRemark: ''
      },
      rules: {
        pmsAccessoryList: [
          {
            required: true,
            message: '请上传报价单',
            trigger: ['change', 'blur']
          },
          {
            type: 'array'
          }
        ]
      },
      reportInfo: []
    }
  },
  watch: {
    show(n) {
      if (!n) {
        this.$refs.form.resetFields()
      }
    }
  },
  methods: {
    onClose() {
      this.isShow = false
    },
    onOpenReport() {
      this.isShow = true
    },
    onChange(val) {
      this.$bus.$emit('on-report', val)
    },
    onSubmit() {
      this.$refs.form.validate(async(valid) => {
        if (valid) {
          const { code, msg } = await this.$api.saleZhichi.submitReport({
            ...this.form,
            id: this.data.id
          })
          if (code === 200) {
            this.$message.success(msg)
            this.$bus.$emit('on-report')
            this.isShow = false
          }
        } else {
          return false
        }
      })
    },
    // 查看报告
    onCheckReport(row) {
      this.reportInfo = row.pmsAccessoryList
      this.showReport = true
    }
  }
}
</script>
