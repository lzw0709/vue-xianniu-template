<template>
  <xn-dialog
    :title="title"
    :show.sync="show"
    :before-close="onClose"
    size="large"
    @on-open="onOpen"
    @on-confirm="onSubmit"
  >
    <el-form ref="form" :model="form" :rules="rules" label-width="110px">
      <xn-table
        class="mb-20"
        :data="form.pmsPurchaseSupportDetailList"
        border
        :auto-height="false"
        @handle-button="handleMoreBtns"
      >
        <el-table-column label="服务名称" prop="supportName" />
        <el-table-column label="预计工时" prop="workHours" />
        <el-table-column label="服务描述" prop="supportDesc" />
        <el-table-column label="成本价（不对外展示）">
          <template slot-scope="{ row, $index }">
            <el-form-item
              label=""
              label-width="0"
              size="mini"
              :rules="rules.supportCost"
              :prop="`pmsPurchaseSupportDetailList.${$index}.supportCost`"
            >
              <el-input
                v-model="row.supportCost"
                placeholder="成本价"
                size="mini"
                clearable
              />
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column label="报价金额">
          <template slot-scope="{ row, $index }">
            <el-form-item
              label=""
              label-width="0"
              size="mini"
              :rules="rules.totalMoney"
              :prop="`pmsPurchaseSupportDetailList.${$index}.totalMoney`"
            >
              <el-input
                v-model="row.totalMoney"
                placeholder="报价金额"
                size="mini"
                clearable
                @blur="onComoutePrice"
              />
            </el-form-item>
          </template>
        </el-table-column>
      </xn-table>
      <el-form-item label="报价有效期至" prop="termOfValidity">
        <xn-date
          v-model="form.termOfValidity"
          type="datetime"
          is-disabled-before
          default-time="23:59:59"
        />
      </el-form-item>
      <el-form-item label="报价单" prop="pmsAccessoryList">
        <xn-upload
          :file-list.sync="form.pmsAccessoryList"
          :limit="9"
          :accept="['jpg', 'jpeg', 'png', 'xls', 'xlsx', 'pdf', 'docx']"
          tip="支持jpg,png,word,excel,pdf"
        />
      </el-form-item>
      <el-form-item label="报价总金额" prop="quoteMoney">
        <b class="fz-20 text-danger">{{ $format.toText(form.quoteMoney) }}</b>
      </el-form-item>
    </el-form>
  </xn-dialog>
</template>
<script>
import mixin from '../mixins/index'
export default {
  mixins: [mixin],
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
        termOfValidity: '',
        pmsAccessoryList: [],
        quoteMoney: ''
      },
      rules: {
        // termOfValidity: [
        //   {
        //     required: true,
        //     message: '请选择有效期',
        //     trigger: ['change', 'blur']
        //   }
        // ],
        // pmsAccessoryList: [
        //   {
        //     required: true,
        //     message: '请上传报价单',
        //     trigger: ['change', 'blur']
        //   },
        //   {
        //     type: 'array'
        //   }
        // ],
        supportCost: [
          { required: true, message: '不能为空', trigger: ['change', 'blur'] },
          {
            pattern: this.$reg.checkNumber,
            message: '请填写正确数字类型',
            trigger: ['change', 'blur']
          },
          {
            min: 0,
            type: 'number',
            message: '价格不能小于0',
            trigger: ['change', 'blur'],
            transform: (value) => this.$options.filters.strToNum(value)
          }
        ],
        totalMoney: [
          { required: true, message: '不能为空', trigger: ['change', 'blur'] },
          {
            pattern: this.$reg.checkNumber,
            message: '请填写正确数字类型',
            trigger: ['change', 'blur']
          },
          {
            min: 0,
            type: 'number',
            message: '价格不能小于0',
            trigger: ['change', 'blur'],
            transform: (value) => this.$options.filters.strToNum(value)
          }
        ]
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
    onOpen() {
      this.fnGetInfo()
    },
    handleMoreBtns() {},
    // 计算价格
    onComoutePrice() {
      const price = this.form.pmsPurchaseSupportDetailList.reduce(
        (num, v) => num + (v.totalMoney - 0),
        0
      )
      this.form.quoteMoney = price
    },
    onSubmit() {
      if (this.form.pmsPurchaseSupportDetailList.length === 0) {
        this.$message.warning('服务项为空，不能提交报价')
        return
      }
      this.$refs.form.validate(async(valid) => {
        if (valid) {
          const {
            rowData: { id, projectType, purchaseResource },
            form: {
              pmsAccessoryList,
              pmsPurchaseSupportDetailList,
              quoteMoney,
              termOfValidity
            }
          } = this
          const { code, msg } = await this.$api.purchHall.offer({
            pmsPurchaseQuoteSupportPO: {
              pmsAccessoryList,
              pmsPurchaseQuoteSupportDetailList: pmsPurchaseSupportDetailList,
              quoteMoney,
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
