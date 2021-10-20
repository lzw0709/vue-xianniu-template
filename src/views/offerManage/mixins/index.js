export default {
  methods: {
    async fnGetInfo() {
      const {
        rowData: { id, projectType }
      } = this
      const { code, data: { pmsPurchaseQuoteDeviceVO, pmsPurchaseQuoteOnSiteVO, pmsPurchaseQuotePartVO, pmsPurchaseQuoteSupportVO }} = await this.$api.purchaseQuote.detail({
        id,
        projectType
      })
      if (code === 200) {
        let _data = {}
        if (projectType === 1) {
          _data = pmsPurchaseQuoteDeviceVO
          const { maintenanceTaxRate, artificialTaxRate, artificialUntaxed, artificialTaxIncluded, maintenanceUntaxed, maintenanceTaxIncluded } = pmsPurchaseQuoteDeviceVO
          this.createTable(['设备（未税）', '设备（含税）'], ['-', maintenanceTaxRate], [maintenanceUntaxed, maintenanceTaxIncluded], 'partList')
          this.createTable(['人工（未税）', '人工（含税）'], ['-', artificialTaxRate], [artificialUntaxed, artificialTaxIncluded])
        }
        if (projectType === 2) _data = pmsPurchaseQuoteSupportVO
        if (projectType === 3) _data = pmsPurchaseQuotePartVO
        if (projectType === 4) _data = pmsPurchaseQuoteOnSiteVO
        this.form = _data
      }
    },
    createTable(labelArr = [], taxArr = [], priceArr = [], type = 'serviceList') {
      const arr = []
      for (let i = 0; i < 2; i++) {
        const obj = {}
        obj.name = labelArr[i]
        obj.tax = taxArr[i]
        obj.price = priceArr[i]
        arr.push(obj)
      }
      this[type] = arr
    }
  }
}
