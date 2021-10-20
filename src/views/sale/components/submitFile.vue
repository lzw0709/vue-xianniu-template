<template>
  <xn-dialog title="提交凭证" :show.sync="show" :before-close="onClose" append-to-body @on-confirm="onSubmit">
    <el-form ref="form" :model="form" :rules="rules" label-width="0" :inline="false" size="normal">
      <el-form-item label="" prop="pmsAccessoryList">
        <xn-upload
          :limit="9"
          :accept="['jpg', 'png', 'docx', 'xlsx', 'xls', 'pdf']"
          :file-list.sync="form.pmsAccessoryList"
          tip="支持jpg,png,word,xlsx,xls,pdf"
        />
      </el-form-item>
    </el-form>
  </xn-dialog>
</template>
<script>
export default {
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
      form: {
        pmsAccessoryList: []
      },
      rules: {
        pmsAccessoryList: [
          { required: true, message: '请上传凭证', trigger: ['change', 'blur'] },
          {
            type: 'array'
          }
        ]
      }
    }
  },
  watch: {
    show(n) {
      if (!n) {
        this.$refs.form.resetFields()
      }
    },
    'form.pmsAccessoryList': {
      handler(n) {
        if (n.length) {
          this.$refs.form.clearValidate('pmsAccessoryList')
        }
      }
    }
  },
  methods: {
    onClose() {
      this.$emit('update:show', false)
    },
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          //
          const { code, msg } = await this.$api.sale.commitVoucher({
            id: this.rowData.id,
            ...this.form
          })
          if (code === 200) {
            this.$message.success(msg)
            this.$parent.fnGetInfo()
            this.onClose()
          }
        } else {
          return false
        }
      })
    }
  }
}
</script>
