module.exports = {
  title: '采购云协同',
  tagsView: false,
  fixedHeader: true,
  sidebarLogo: false,
  errorLog: ['production', 'development'],
  routerAuth: process.env.VUE_APP_CURRENTMODE !== 'dev',
  appNo: 'XTD',
  showNavBar: true
}
