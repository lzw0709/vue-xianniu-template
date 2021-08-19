import Vue from 'vue'
function Enums(enums) {
  this.enums = enums
}
Enums.prototype.getList = function(value) {
  const isArr = value instanceof Array // 数组判断
  const list = []
  /* 传空数组直接返回 */
  if (isArr && value.length === 0) {
    return list
  }
  for (const key in this.enums) {
    if (value && value.length > 0) {
      if (value.indexOf(this.enums[key].code) > -1) {
        list.push(this.enums[key])
      }
    } else {
      list.push(this.enums[key])
    }
  }
  return list
}
Enums.prototype.getLabel = function(value = '') {
  if (value === '' || value < 0) {
    return ''
  }
  const valueList = []
  const valueIsList = value instanceof Array
  for (const key in this.enums) {
    if (valueIsList) {
      if (
        value.includes(this.enums[key].value) ||
            value.includes(Number(this.enums[key].value))
      ) {
        valueList.push(this.enums[key].label)
      }
    // eslint-disable-next-line eqeqeq
    } else if (this.enums[key].value == value) {
      return this.enums[key].label
    }
  }

  return valueIsList ? valueList.join('、') : ''
}

const enums = {
  // 标签应用
  TAGS_TYPE: new Enums({
    0: { label: '工程师技能标签', value: 'A' },
    1: { label: '工程师定级标签', value: 'B' },
    2: { label: '服务规则标签', value: 'C' },
    3: { label: '服务范围标签', value: 'D' },
    4: { label: '工程师服务标签', value: 'E' },
    5: { label: '商品成色标签', value: 'F' }
  }),
  // 学历
  EDUCATION_TYPE: new Enums({
    0: { label: '初中及以下', value: 1 },
    1: { label: '中专/中技', value: 2 },
    2: { label: '高中', value: 3 },
    3: { label: '大专', value: 4 },
    4: { label: '本科', value: 5 },
    5: { label: '硕士', value: 6 },
    6: { label: '博士', value: 7 }
  }),
  // 性别
  SEX_TYPE: new Enums({
    0: { label: '女', value: 2 },
    1: { label: '男', value: 1 }
  }),
  // 工作状态
  WORKING_STATUS: new Enums({
    0: { label: '闲', value: 0 },
    1: { label: '忙', value: 1 }
  }),
  // 分享状态
  SHARE_STATUS: new Enums({
    0: { label: '未共享', value: 0 },
    1: { label: '已共享', value: 1 }
  }),
  // 工程师分享状态
  ENGINEER_SHARE_STATUS: new Enums({
    0: { label: '未共享', value: 0 },
    1: { label: '全网分享', value: 1 },
    2: { label: '已共享', value: 2 },
    3: { label: '合作与全网共享', value: 3 }
  }),
  // 适用场景（1云端；2场端；4终端） usageScenarios
  USAGE_SCENE: new Enums({
    0: { label: '云端', value: 1 },
    1: { label: '场端', value: 2 },
    2: { label: '终端', value: 4 }
  })
}
Object.defineProperty(Vue.prototype, '$enums', { value: enums })
