import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index/Index'
import Welcome from '../pages/welcome/Welcome'
import Product from '../pages/product/Product'
import Cate2 from '../pages/product/category/Category'
import Cate3 from '../pages/product/category/Cate2'
import Category from '../pages/product/category/Cate3'
import Details from '../pages/product/details/Details'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
    },
    {
      path: '/product',
      name: 'product',
      component: Product,
      children: [
        {
          path: 'category',
          name: 'category',
          component: Category,
          children: [
            {
              path: 'cate2',
              name: 'cate2',
              component: Cate2
            },
            {
              path: 'cate3',
              name: 'cate3',
              component: Cate3
            },
          ]
        },
        {
          path: 'details',
          name: 'details',
          component: Details
        },
      ],
    },
  ]
})

router.beforeEach((to, from, next) => {
  console.log(`from ${from.path}  to ${to.path}`)
  next()
})

export default router
