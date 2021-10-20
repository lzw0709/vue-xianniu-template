import Vue from 'vue'
import Router from 'vue-router'
import AUTH_CODE from '@/auth/index'
Vue.use(Router)

/* Layout */
import Layout from '@/layout'
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    hidden: true,
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  }
  // {
  //   path: '/demo',
  //   component: Layout,
  //   redirect: 'noRedirect',
  //   children: [
  //     {
  //       path: 'demo',
  //       component: () => import('@/views/demo/index'),
  //       name: 'demo',
  //       meta: { title: 'demo', icon: 'dashboard', affix: true }
  //     }
  //   ]
  // }
]

export const asyncRoutes = [

  { path: '*', redirect: '/404', hidden: true },
  // {
  //   path: '/nothandled',
  //   component: Layout,
  //   redirect: 'noRedirect',
  //   children: [
  //     {
  //       path: 'list',
  //       component: () => import('@/views/nothandled/index'),
  //       name: 'nothandledList',
  //       meta: { title: '待办', icon: 'dashboard' }
  //     }
  //   ]
  // },
  {
    path: '/purchHall',
    component: Layout,
    redirect: 'noRedirect',
    meta: {
      roles: [AUTH_CODE['auth647']]
    },
    children: [
      {
        path: '/purchHall/list',
        component: () => import('@/views/purchHall/index'),
        name: 'purchHallList',
        meta: { title: '采购需求大厅', icon: 'xuqiudating', roles: [AUTH_CODE['auth647']] }
      }
    ]
  },
  {
    path: '/offerManage',
    component: Layout,
    redirect: 'noRedirect',
    meta: {
      roles: [AUTH_CODE['auth653']]
    },
    children: [
      {
        path: '/offerManage/list',
        component: () => import('@/views/offerManage/index'),
        name: 'offerManageList',
        meta: { title: '采购报价单管理', icon: 'caigoudanguanli' }
      }
    ]
  },
  {
    path: '/sale',
    component: Layout,
    redirect: 'noRedirect',
    meta: {
      title: '销售订单管理',
      icon: 'xiaoshoudanguanli',
      roles: [AUTH_CODE['auth655']]
    },
    children: [
      {
        path: '/sale/list',
        component: () => import('@/views/sale/index'),
        name: 'saleList',
        meta: { title: '产品订单', roles: [AUTH_CODE['auth656']] }
      },
      {
        path: '/support/list',
        component: () => import('@/views/sale/support'),
        name: 'saleSupportList',
        meta: { title: '支持订单', roles: [AUTH_CODE['auth661']] }
      },
      {
        path: '/weibao/list',
        component: () => import('@/views/sale/weibao'),
        name: 'saleWeibaoList',
        meta: { title: '维保订单', roles: [AUTH_CODE['auth666']] }
      },
      {
        path: '/zhuchang/list',
        component: () => import('@/views/sale/zhuchang'),
        name: 'saleZhuchangList',
        meta: { title: '驻场订单', roles: [AUTH_CODE['auth669']] }
      }
    ]
  },
  {
    path: '/aftersale',
    component: Layout,
    redirect: 'noRedirect',
    hidden: process.env.VUE_APP_CURRENTMODE !== 'dev',
    meta: {
      title: '售后单管理',
      icon: 'xiaoshoudanguanli'
    },
    children: [
      {
        path: '/aftersale/list',
        component: () => import('@/views/afterSale/index'),
        name: 'afterSaleList',
        meta: { title: '售后单' }
      }

    ]
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
