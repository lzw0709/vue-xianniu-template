export default {
  methods: {
    async fnGetInfo() {
      const {
        rowData: { id, projectType, purchaseId, purchaseResource }
      } = this
      // 产品采购，维保服务，技术支持，驻场
      const { code, data: { purchaseSource, productPurchaseDetailVO, purchaseMaintenanceDetailVO, purchaseTechnicalSupportDetailVO, siteServiceDetailVO }} = await this.$api.purchHall.detail({
        id,
        projectType,
        purchaseId,
        purchaseSource: purchaseResource
      })
      if (code === 200) {
        const { rowData: { projectType }} = this
        let _data = {}
        if (projectType === 1) {
          _data = purchaseMaintenanceDetailVO
        } else if (projectType === 2) {
          _data = purchaseTechnicalSupportDetailVO
        } else if (projectType === 3) {
          _data = productPurchaseDetailVO
        } else if (projectType === 4) {
          siteServiceDetailVO.siteServiceDetailList.length && siteServiceDetailVO.siteServiceDetailList.forEach(item => {
            item.totalMoney = ''
            item.numberOfEngineer = 1
            item.itemCost = ''
            item.purchaseOnSiteId = item.id
          })
          _data = siteServiceDetailVO
        }
        this.form = Object.assign(_data, { purchaseSourceNew: purchaseSource }, this.form)
      }
    }
  }
}
