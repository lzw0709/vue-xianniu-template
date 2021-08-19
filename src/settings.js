module.exports = {
  title: '项目模板',
  showSettings: true,
  tagsView: true,
  fixedHeader: true,
  sidebarLogo: true,
  errorLog: ['production', 'development'],
  routerAuth: process.env.VUE_APP_CURRENTMODE !== 'dev',
  appNo: ''
}
