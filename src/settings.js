module.exports = {
  title: '项目模板',
  tagsView: false,
  fixedHeader: true,
  sidebarLogo: false,
  errorLog: ['production', 'development'],
  routerAuth: process.env.VUE_APP_CURRENTMODE !== 'dev',
  appNo: '',
  showNavBar: true
}
