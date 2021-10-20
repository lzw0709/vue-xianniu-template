<template>
  <xn-dialog
    :title="title"
    :show.sync="show"
    :before-close="onClose"
    @on-confirm="onSubmit"
  >
    <el-form ref="form" :model="form" :rules="rules" label-width="120px">
      <el-form-item label="联系人" prop="linkName">
        <el-input
          v-model.trim="form.linkName"
          placeholder="请填写联系人"
          clearable
        />
      </el-form-item>
      <el-form-item label="联系电话" prop="linkMobile">
        <el-input
          v-model.trim="form.linkMobile"
          placeholder="请填写联系人电话"
          :maxlength="11"
          show-word-limit
          clearable
        />
      </el-form-item>
      <el-form-item label="报价有效期止" prop="termOfValidity">
        <xn-date
          v-model="form.termOfValidity"
          style="width: 100%"
          type="datetime"
          is-disabled-before
          default-time="23:59:59"
        />
      </el-form-item>
      <el-form-item label="设备维保(含税)" prop="maintenanceTaxIncluded">
        <el-input
          v-model.trim="form.maintenanceTaxIncluded"
          placeholder="请填写维保价格"
          clearable
          @input="onCompute($event, 1, 'device')"
        >
          <template slot="append">元</template>
        </el-input>
      </el-form-item>
      <el-form-item label="设备维保(税率)" prop="maintenanceTaxRate">
        <el-input
          v-model.trim="form.maintenanceTaxRate"
          placeholder="请填写税率"
          clearable
          @input="onCompute($event, 2, 'device')"
        >
          <template slot="append">%</template>
        </el-input>
      </el-form-item>
      <el-form-item label="设备维保(未税)" prop="maintenanceUntaxed">
        <el-input
          v-model.trim="form.maintenanceUntaxed"
          placeholder="设备维保（未税）"
          clearable
          @input="onCompute($event, 3, 'device')"
        >
          <template slot="append">元</template>
        </el-input>
      </el-form-item>
      <el-form-item label="人工服务(含税)" prop="artificialTaxIncluded">
        <el-input
          v-model.trim="form.artificialTaxIncluded"
          placeholder="请填写人工服务（含税价）"
          clearable
          @input="onCompute($event, 1, 'person')"
        >
          <template slot="append">元</template>
        </el-input>
      </el-form-item>
      <el-form-item label="人工服务(税率)" prop="artificialTaxRate">
        <el-input
          v-model.trim="form.artificialTaxRate"
          placeholder="请填写人工服务（税率）"
          clearable
          @input="onCompute($event, 2, 'person')"
        >
          <template slot="append">%</template>
        </el-input>
      </el-form-item>
      <el-form-item label="人工服务(未税)" prop="artificialUntaxed">
        <el-input
          v-model.trim="form.artificialUntaxed"
          placeholder="人工服务（未税）"
          clearable
          @input="onCompute($event, 3, 'person')"
        >
          <template slot="append">元</template>
        </el-input>
      </el-form-item>
      <el-form-item label="报价单" prop="pmsAccessoryList">
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
        artificialTaxIncluded: '',
        artificialTaxRate: '',
        artificialUntaxed: '',
        linkMobile: '',
        linkName: '',
        maintenanceTaxIncluded: '',
        maintenanceTaxRate: '',
        maintenanceUntaxed: '',
        termOfValidity: '',
        pmsAccessoryList: []
      },
      rules: {
        linkName: [
          { required: true, message: '不能为空', trigger: ['change', 'blur'] }
        ],
        // termOfValidity: [
        //   { required: true, message: '不能为空', trigger: ['change', 'blur'] }
        // ],
        linkMobile: [
          { required: true, message: '不能为空', trigger: ['change', 'blur'] },
          {
            pattern: this.$reg.checkPhone,
            message: '请填写11位有效手机号',
            trigger: ['change', 'blur']
          }
        ],
        maintenanceTaxIncluded: [
          { required: true, message: '不能为空', trigger: ['change', 'blur'] },
          {
            pattern: this.$reg.checkNumber,
            message: '请填写正确数字类型',
            trigger: ['change', 'blur']
          }
        ],
        maintenanceTaxRate: [
          { required: true, message: '不能为空', trigger: ['change', 'blur'] },
          {
            pattern: this.$reg.checkNumber,
            message: '请填写正确数字类型',
            trigger: ['change', 'blur']
          },
          {
            max: 100,
            min: 0,
            type: 'number',
            message: '请在0~100%之间填写税率',
            trigger: ['change', 'blur'],
            transform: (value) => this.$options.filters.strToNum(value)
          }
        ],
        maintenanceUntaxed: [
          { required: true, message: '不能为空', trigger: ['change', 'blur'] },
          {
            pattern: this.$reg.checkNumber,
            message: '请填写正确数字类型',
            trigger: ['change', 'blur']
          }
        ],
        artificialTaxIncluded: [
          { required: true, message: '不能为空', trigger: ['change', 'blur'] },
          {
            pattern: this.$reg.checkNumber,
            message: '请填写正确数字类型',
            trigger: ['change', 'blur']
          }
        ],
        artificialTaxRate: [
          { required: true, message: '不能为空', trigger: ['change', 'blur'] },
          {
            pattern: this.$reg.checkNumber,
            message: '请填写正确数字类型',
            trigger: ['change', 'blur']
          },
          {
            max: 100,
            min: 0,
            type: 'number',
            message: '请在0~100%之间填写税率',
            trigger: ['change', 'blur'],
            transform: (value) => this.$options.filters.strToNum(value)
          }
        ],
        artificialUntaxed: [
          { required: true, message: '不能为空', trigger: ['change', 'blur'] },
          {
            pattern: this.$reg.checkNumber,
            message: '请填写正确数字类型',
            trigger: ['change', 'blur']
          }
        ]
        // pmsAccessoryList: [
        //   {
        //     required: true,
        //     message: '请上传报价单',
        //     trigger: ['change', 'blur']
        //   },
        //   {
        //     type: 'array'
        //   }
        // ]
      }
    }
  },
  computed: {
    title() {
      return `报价【${this.$enums.PROJECT_TYPE.getLabel(
        this.rowData.projectType
      )}】`
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
      this.$emit('update:show', false)
    },

    onCompute(val, type, name) {
      const {
        artificialTaxIncluded,
        artificialTaxRate,
        artificialUntaxed,
        maintenanceTaxIncluded,
        maintenanceTaxRate,
        maintenanceUntaxed
      } = this.form
      const _tax = this.$lodash.divide(
        name === 'person' ? artificialTaxRate : maintenanceTaxRate,
        100
      )
      const __tax = this.$lodash.subtract(1, _tax)
      if (name === 'person') {
        if (
          artificialTaxRate &&
          (artificialTaxRate > 0 || artificialTaxRate <= 100)
        ) {
          if (type === 3) {
            this.form.artificialTaxIncluded = this.$lodash.floor(
              this.$lodash.divide(artificialUntaxed, __tax),
              2
            )
          } else {
            this.form.artificialUntaxed = this.$lodash.floor(
              this.$lodash.subtract(
                artificialTaxIncluded,
                this.$lodash.multiply(artificialTaxIncluded, _tax)
              ),
              2
            )
          }
        }
      } else {
        if (
          maintenanceTaxRate &&
          (maintenanceTaxRate > 0 || maintenanceTaxRate <= 100)
        ) {
          if (type === 3) {
            this.form.maintenanceTaxIncluded = this.$lodash.floor(
              this.$lodash.divide(maintenanceUntaxed, __tax),
              2
            )
          } else {
            this.form.maintenanceUntaxed = this.$lodash.floor(
              this.$lodash.subtract(
                maintenanceTaxIncluded,
                this.$lodash.multiply(maintenanceTaxIncluded, _tax)
              ),
              2
            )
          }
        }
      }
    },

    onSubmit() {
      this.$refs.form.validate(async(valid) => {
        if (valid) {
          const {
            rowData: { id, projectType, purchaseResource },
            form: {
              artificialTaxIncluded,
              artificialTaxRate,
              artificialUntaxed,
              linkMobile,
              linkName,
              maintenanceTaxIncluded,
              maintenanceTaxRate,
              maintenanceUntaxed,
              pmsAccessoryList,
              quoteTime,
              termOfValidity
            }
          } = this
          const { code, msg } = await this.$api.purchHall.offer({
            pmsPurchaseQuoteDevicePO: {
              artificialTaxIncluded,
              artificialTaxRate,
              artificialUntaxed,
              linkMobile,
              linkName,
              maintenanceTaxIncluded,
              maintenanceTaxRate,
              maintenanceUntaxed,
              pmsAccessoryList,
              quoteTime,
              termOfValidity
            },
            keyId: id,
            projectType,
            purchaseSource: purchaseResource
          })
          if (code === 200) {
            this.$message.success(msg)
            this.onClose()
            if (this.$parent.show) {
              this.$parent.onClose()
            }
            this.$bus.$emit('on-offer')
          }
        } else {
          return false
        }
      })
    }
  }
}
</script>
