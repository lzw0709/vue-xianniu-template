<template>
  <xn-dialog
    title="添加发货信息"
    :show.sync="show"
    :before-close="onClose"
    size="medium"
    @on-open="onOpen"
    @on-confirm="onSubmit"
  >
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item label="物流公司" prop="logisticsCompanyPO">
        <el-select v-model="form.logisticsCompanyPO" value-key="code" placeholder="请选择(支持关键字搜索)" clearable filterable @change="handleSelect">
          <el-option
            v-for="item in kuai100"
            :key="item.code"
            :label="item.label"
            :value="item"
          />
        </el-select>

      </el-form-item>
      <el-form-item v-show="false" label="物流公司编号" prop="companyCode">
        {{ form.companyCode }}
      </el-form-item>
      <el-form-item label="物流单号" prop="logisticsCode">
        <el-input
          v-model="form.logisticsCode"
          clearable
          placeholder="请填写物流单号"
        />
      </el-form-item>
      <el-form-item label="物流费用" prop="logisticsPrice">
        <el-input
          v-model="form.logisticsPrice"
          clearable
          placeholder="请填写物流费用"
        />
      </el-form-item>
      <el-card
        v-for="(item, idx) in form.addLogisticsDetailList "
        :key="idx"
        class="cus-el-card mb-10"
        shadow="always"
        :body-style="{ padding: '0' }"
      >
        <div slot="header">
          <span>No.{{ idx + 1 }} {{ item.partName }}w</span>
        </div>
        <el-row
          v-for="(itemC, idxC) in item.sn"
          :key="idxC"
          :class="{ 'mt-10': idxC === 0 }"
          :gutter="20"
        >
          <el-col :span="10" :offset="1">
            <el-form-item label="备件PN">
              {{ item.pn }}
            </el-form-item>
          </el-col>
          <el-col :span="10" :offset="0">
            <el-form-item
              label="设备SN"
              :prop="`addLogisticsDetailList.${idx}.sn.${idxC}.sn`"
              :rules="rules.sn"
            >
              <el-input
                v-model="itemC.sn"
                placeholder="请填写设备SN"
                size="mini"
                clearable
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>
      <el-form-item label="备注信息" prop="logisticsRemark">
        <el-input
          v-model="form.logisticsRemark"
          placeholder="请填写备注信息"
          :autosize="{ minRows: 4 }"
          type="textarea"
          clearable
        />
      </el-form-item>
    </el-form>
  </xn-dialog>
</template>
<script>
import kuai100 from '@/lib/kuai100'
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: () => {
        []
      }
    },
    rowData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      form: {
        // logisticsCompany: '',
        // companyCode: '',
        logisticsCompanyPO: {
          code: '',
          label: ''
        },
        logisticsCode: '',
        logisticsPrice: '',
        logisticsRemark: '',
        addLogisticsDetailList: [
        ]
      },
      rules: {
        sn: [
          { required: true, message: '请填写SN', trigger: ['change', 'blur'] }
        ],
        logisticsCompanyPO: [
          {
            required: true,
            message: '请选择物流公司',
            trigger: ['change', 'blur']
          },
          {
            type: 'object',
            fields: {
              label: { type: 'string', required: true, message: '请选择物流公司' },
              code: { type: 'string', required: true, message: '物流公司编码不能为空' }
            }
          }
        ],
        logisticsCode: [
          {
            required: true,
            message: '请填写物流单号',
            trigger: ['change', 'blur']
          }
        ],
        logisticsPrice: [
          {
            required: true,
            message: '请填写物流费用',
            trigger: ['change', 'blur']
          },
          {
            pattern: this.$reg.checkNumber,
            message: '请填写正确数字类型',
            trigger: ['change', 'blur']
          },
          {
            min: 0,
            type: 'number',
            message: '费用不能小于0',
            trigger: ['change', 'blur'],
            transform: (value) => this.$options.filters.strToNum(value)
          }
        ]
      }
    }
  },
  computed: {
    kuai100() {
      return kuai100
    }
  },
  watch: {
    show(n) {
      if (!n) {
        this.$refs.form.resetFields()
      }
    },
    filterList(n) {
      console.log(n)
    }
  },
  created() {},
  methods: {
    onOpen() {
      this.createNewList()
    },
    onClose() {
      this.$emit('update:show', false)
    },
    createNewList() {
      const arr = this.list.map((item) => {
        const arr = []
        if (item.numberOfPart > 0) {
          for (let i = 0; i < item.numberOfPart; i++) {
            var obj = {}
            obj.sn = ''
            arr.push(obj)
          }
        }
        return {
          ...item,
          sn: arr
        }
      })

      this.form.addLogisticsDetailList = arr
    },
    querySearch(queryString, cb) {
      var restaurants = this.kuai100
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants
      cb(results)
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (
          restaurant.label.toLowerCase().indexOf(queryString.toLowerCase()) > -1
        )
      }
    },
    handleSelect(val) {
      // console.log(val)
    },
    // 判断是否有重复的sn
    isRepeat() {
      let flag = false
      const sns = []
      const obj = {}
      let msg =
      this.form.addLogisticsDetailList.forEach(item => {
        if (item.sn.length) {
          item.sn.forEach(itemSn => {
            sns.push(itemSn.sn)
          })
        }
      })

      for (let i = 0; i < sns.length; i++) {
        const item = sns[i]
        if (obj[item] === undefined) {
          obj[item] = 0
        } else {
          obj[item] = obj[item] + 1
        }
      }
      for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
          const item = obj[key]
          if (item > 0) {
            flag = true
            msg = key
            break
          }
        }
      }
      return [flag, msg]
    },
    onSubmit() {
      if (this.isRepeat()[0]) {
        const msg = this.isRepeat()[1]
        this.$message.warning(`填写的【${msg}】SN重复，请检查`)
        return
      }
      this.$refs.form.validate(async valid => {
        if (valid) {
          const { rowData: { id }} = this
          const { code, msg } = await this.$api.sale.addLogistics({
            ...this.form,
            salePartOrderId: id
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
      // this.$refs.form.resetFields()
    }
  }
}
</script>
