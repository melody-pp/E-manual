import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home'
import Category from '../pages/category/Category'
import Category1 from '../pages/category/Category1'
import Category2 from '../pages/category/Category2'
import Details from '../pages/Details/Details'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/',
          name: 'Category',
          component: Category,
          children: [
            {
              path: '/',
              name: 'Category1',
              component: Category1
            },
            {
              path: 'category2',
              name: 'category2',
              component: Category2
            },
          ],
        },
        {
          path: 'details',
          name: 'details',
          component: Details
        },
      ]
    },
  ]
})

router.beforeEach((to, from, next) => {
  console.log(`from ${from.path}  to ${to.path}`)
  next()
})

export default router
