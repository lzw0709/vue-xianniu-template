<template>
  <div>
    <xn-dialog
      :title="title"
      :show.sync="show"
      :before-close="onClose"
      size="large"
      @on-open="onOpen"
      @on-confirm="onSubmit"
    >
      <xn-description title="产品信息">
        <xn-table
          class="mb-20"
          :data="form.pmsPurchasePartList"
          border
          :columns="listHeader"
          :auto-height="false"
          @handle-button="handleMoreBtns"
        />
      </xn-description>
      <el-form ref="form" :model="form" :rules="rules" label-width="110px">
        <xn-description title="报价产品">
          <template #more>
            <el-button
              v-permission="['auth652']"
              type="success"
              size="mini"
              @click="selectProject"
            >选择报价产品</el-button>
          </template>
          <xn-table
            class="mb-20"
            border
            :auto-height="false"
            :data="form.pmsPurchaseQuotePartDetailList"
            @handle-button="handleMoreBtns"
          >
            <el-table-column label="备件厂商" prop="partVendor" />
            <el-table-column label="备件名称" prop="goodsName" />
            <el-table-column label="备件PN" prop="pn" />
            <el-table-column label="备件规格" prop="configName" />
            <el-table-column label="备件描述" prop="partDesc" />
            <el-table-column label="可供数量" prop="quoteCount">
              <template slot-scope="{ row, $index }">
                <el-form-item
                  label=""
                  label-width="0"
                  size="mini"
                  :rules="rules.quoteCount"
                  :prop="`pmsPurchaseQuotePartDetailList.${$index}.quoteCount`"
                >
                  <el-input-number
                    v-model="row.quoteCount"
                    size="mini"
                    :min="1"
                    :step="1"
                    placeholder="可供数量"
                    controls-position="right"
                    clearable
                    style="width: 100px"
                    @input="onComoutePrice"
                    @change="onComoutePrice"
                  />
                </el-form-item>
              </template>
            </el-table-column>
            <el-table-column label="单价" prop="unitPrice">
              <template slot-scope="{ row, $index }">
                <el-form-item
                  label=""
                  label-width="0"
                  size="mini"
                  :rules="rules.unitPrice"
                  :prop="`pmsPurchaseQuotePartDetailList.${$index}.unitPrice`"
                >
                  <el-input
                    v-model="row.unitPrice"
                    placeholder="单价"
                    size="mini"
                    clearable
                    @input="onComoutePrice"
                  />
                </el-form-item>
              </template>
            </el-table-column>
            <el-table-column label="金额小计" width="100px" prop="unitPrice">
              <template slot-scope="{ row }">
                {{ $format.toText(row.totalMoney) }}
              </template>
            </el-table-column>
            <el-table-column label="操作" width="60px">
              <template slot-scope="{ $index }">
                <el-button
                  type="text"
                  @click="onDelete($index)"
                >删除</el-button>
              </template>
            </el-table-column>
          </xn-table>
          <div>
            <el-form-item label="报价有效期至" prop="termOfValidity">
              <xn-date v-model="form.termOfValidity" is-disabled-before default-time="23:59:59" type="datetime" />
            </el-form-item>
            <el-form-item label="报价单" prop="pmsAccessoryList">
              <xn-upload
                :file-list.sync="form.pmsAccessoryList"
                :limit="9"
                :accept="['jpg', 'jpeg', 'png', 'xls', 'xlsx', 'pdf', 'docx']"
                tip="支持jpg,png,word,excel,pdf"
              />
            </el-form-item>
            <el-form-item label="备件费用" prop="partOutlay">
              <b>{{ $format.toText(form.partOutlay) }}</b>
            </el-form-item>
            <el-form-item label="物流费用" prop="logisticsOutlay">
              <el-input
                v-model="form.logisticsOutlay"
                placeholder="物流费用"
                clearable
                style="width: 214px"
                @input="onComoutePrice"
              >
                <template slot="prepend">￥</template>
              </el-input>
            </el-form-item>
            <el-form-item label="报价总金额" prop="quoteMoney">
              <b class="fz-20 text-danger">{{
                $format.toText(form.quoteMoney)
              }}</b>
            </el-form-item>
          </div>
        </xn-description>
      </el-form>
    </xn-dialog>

    <xn-project-list
      :ids="form.pmsPurchaseQuotePartDetailList"
      :show.sync="showProject"
      @on-select="onSelectProject"
    />
  </div>
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
      showProject: false,
      form: {
        logisticsOutlay: 0,
        partOutlay: '',
        pmsAccessoryList: [],
        pmsPurchaseQuotePartDetailList: [],
        quoteMoney: '',
        termOfValidity: ''
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
        logisticsOutlay: [
          {
            pattern: this.$reg.checkNumber,
            message: '请填写正确数字类型',
            trigger: ['change', 'blur']
          },
          {
            min: 0,
            type: 'number',
            message: '最少不能小于0',
            trigger: ['change', 'blur'],
            transform: (value) => this.$options.filters.strToNum(value)
          }
        ],
        quoteCount: [
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
        unitPrice: [
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
      },
      listHeader: [
        { label: '备件厂商', prop: 'partVendor' },
        { label: '备件分类', prop: 'partTypeName' },
        { label: '备件PN', prop: 'pn' },
        { label: '备件描述', prop: 'partDesc' },
        { label: '微码版本', prop: 'microcode' },
        { label: '发货特殊要求', prop: 'specialRequest' },
        { label: '需求数量', prop: 'totalCount' }
      ],
      projectList: []
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
        this.form.pmsPurchaseQuotePartDetailList = []
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
    onOpen() {
      this.fnGetInfo()
    },
    handleMoreBtns() {},
    // 计算价格
    onComoutePrice() {
      const price = this.form.pmsPurchaseQuotePartDetailList.reduce(
        (num, v) => {
          v.totalMoney = (v.unitPrice - 0) * v.quoteCount
          return num + (v.unitPrice - 0) * v.quoteCount
        },
        0
      )
      this.form.partOutlay = price
      this.form.quoteMoney = price + (this.form.logisticsOutlay - 0)
    },
    onSubmit() {
      if (this.form.pmsPurchaseQuotePartDetailList.length === 0) {
        this.$message.warning('报价产品为空，不能提交报价')
        return
      }
      this.$refs.form.validate(async(valid) => {
        if (valid) {
          this.$confirm('提交报价后不可修改，是否继续提交？', '提示', {
            type: 'warning',
            confirmButtonText: '提交'
          }).then(async() => {
            const {
              rowData: { id, projectType, purchaseResource },
              form: {
                logisticsOutlay,
                partOutlay,
                pmsAccessoryList,
                pmsPurchaseQuotePartDetailList,
                quoteMoney,
                termOfValidity
              }
            } = this
            const { code, msg } = await this.$api.purchHall.offer({
              productPurchaseQuotePO: {
                logisticsOutlay,
                partOutlay,
                pmsAccessoryList,
                pmsPurchaseQuotePartDetailList,
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
          })
        } else {
          return false
        }
      })
    },
    selectProject() {
      this.showProject = true
    },
    onSelectProject(val) {
      if (!val.length) {
        this.$message.warning('请选择报价产品')
        return
      }
      const arr = val.map((item) => {
        return {
          partVendor: item.vendorName,
          configName: item.configName,
          goodsName: item.goodsName,
          partDesc: item.partDesc,
          partTypeName: `${item.typeAName}-${item.typeBName}`,
          pn: item.pn,
          quoteCount: 1,
          rmPartPriceId: item.id,
          id: item.id,
          totalMoney: 1 * item.price,
          unitPrice: item.price
        }
      })
      this.form.pmsPurchaseQuotePartDetailList = arr
      this.showProject = false
      this.onComoutePrice()
    },
    // 删除选择的报价产品
    onDelete(idx) {
      const list = this.form.pmsPurchaseQuotePartDetailList
      for (let i = 0; i < list.length; i++) {
        if (i === idx) {
          list.splice(i, 1)
          break
        }
      }
      this.onComoutePrice()
    }
  }
}
</script>
