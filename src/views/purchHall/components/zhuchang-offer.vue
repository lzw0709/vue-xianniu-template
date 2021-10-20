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
        :data="form.siteServiceDetailList"
        border
        :auto-height="false"
      >
        <el-table-column label="工程师类型" prop="engineerTypeName" />
        <el-table-column label="工程师级别" prop="engineerLevelName" />
        <el-table-column label="服务级别" prop="slaName" />
        <el-table-column label="学历" prop="educationName" />
        <el-table-column label="工作年限" prop="workYearsName" />
        <el-table-column label="工程师数量" prop="numberOfPeople" />
        <el-table-column label="其他要求" prop="requirement" />
        <el-table-column label="服务时间">
          <template slot-scope="{ row }">
            <span>{{ $dayjs(row.startTime).format("YYYY-MM-DD") }}~{{
              $dayjs(row.endTime).format("YYYY-MM-DD")
            }}</span>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="可供数量" width="120px">
          <template slot-scope="{ row, $index }">
            <el-form-item
              label=""
              label-width="0"
              size="mini"
              :rules="rules.numberOfEngineer"
              :prop="`siteServiceDetailList.${$index}.numberOfEngineer`"
            >
              <el-input-number
                v-model="row.numberOfEngineer"
                size="mini"
                :min="1"
                :step="1"
                placeholder="数量"
                controls-position="right"
                clearable
                style="width: 100px"
                @input="onComoutePrice"
                @change="onComoutePrice"
              />
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          width="120px"
          label="成本价（不对外展示）"
        >
          <template slot-scope="{ row, $index }">
            <el-form-item
              label=""
              label-width="0"
              size="mini"
              :rules="rules.itemCost"
              :prop="`siteServiceDetailList.${$index}.itemCost`"
            >
              <el-input
                v-model="row.itemCost"
                placeholder="成本价"
                size="mini"
                clearable
              />
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column fixed="right" width="120px" label="报价金额">
          <template slot-scope="{ row, $index }">
            <el-form-item
              label=""
              label-width="0"
              size="mini"
              :rules="rules.totalMoney"
              :prop="`siteServiceDetailList.${$index}.totalMoney`"
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
        quoteMoney: '',
        termOfValidity: '',
        pmsAccessoryList: [],
        pmsPurchaseQuoteOnSiteDetailList: []
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
        numberOfEngineer: [
          { required: true, message: '不能为空', trigger: ['change', 'blur'] },
          {
            pattern: this.$reg.checkNumber,
            message: '请填写正确数字类型',
            trigger: ['change', 'blur']
          },
          {
            min: 1,
            type: 'number',
            message: '数量不能少于1',
            trigger: ['change', 'blur'],
            transform: (value) => this.$options.filters.strToNum(value)
          }
        ],
        itemCost: [
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
    // 计算价格
    onComoutePrice() {
      this.form.pmsPurchaseQuoteOnSiteDetailList =
        this.form.siteServiceDetailList
      const price = this.form.pmsPurchaseQuoteOnSiteDetailList.reduce(
        (num, v) => {
          return num + v.totalMoney * v.numberOfEngineer
        },
        0
      )
      this.form.quoteMoney = price
    },
    onSubmit() {
      if (this.form.pmsPurchaseQuoteOnSiteDetailList.length === 0) {
        this.$message.warning('服务信息为空，不能提交报价')
        return
      }
      this.$refs.form.validate(async(valid) => {
        if (valid) {
          const {
            rowData: { id, projectType, purchaseResource },
            form: {
              pmsAccessoryList,
              pmsPurchaseQuoteOnSiteDetailList,
              quoteMoney,
              termOfValidity
            }
          } = this
          const { code, msg } = await this.$api.purchHall.offer({
            pmsPurchaseQuoteOnSitePO: {
              pmsAccessoryList,
              pmsPurchaseQuoteOnSiteDetailList,
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
