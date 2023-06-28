import { createRouter, createWebHashHistory } from 'vue-router'
import routes from '@tmp/routers'

const homeRoutes = [
  {
    name: 'home',
    path: '/',
    redirect: '/mb_home/index/index',
    meta: {
      title: '首页',
      needLogin: false,
      checkCard: false,
      checkTransfer: false,
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...homeRoutes, ...routes],
})

router.afterEach((route) => {
  if (route.name) {
    document.body.setAttribute('data-page', route.name)
  }

  if (route.meta.title) {
    document.title = route.meta.title
  }
})

export default router
