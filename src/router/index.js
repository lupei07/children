import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'List',
    component: () => import(/* webpackChunkName: "list" */ '../views/List.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "detail" */ '../views/Detail.vue')
  },
  {
    path: '/lp-manage',
    name: 'LpManage',
    component: () => import(/* webpackChunkName: "LpManage" */ '../views/manage/LpManage.vue'),
    children: [
      {
        path: "",
        name: "goodsList",
        component: () => import(/* webpackChunkName: "goodsList" */ '../views/manage/GoodsList.vue')
      },
      {
        path: "/goods-sales",
        name: "GoodsSales",
        component: () => import(/* webpackChunkName: "GoodsSales" */ '../views/manage/GoodsSales.vue')
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
