import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home'
import Category1 from '../pages/Category1/Category1'
import Category2 from '../pages/Category2/Category2'
import Details from '../pages/Details/Details'
import SearchBar from '../common/components/SearchBar'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '',
      name: 'Home',
      component: Home
    },
    {
      path: '/category1',
      name: 'category1',
      component: Category1
    },
    {
      path: '/category2',
      name: 'category2',
      component: Category2
    }, {
      path: '/details',
      name: 'details',
      component: Details
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(`from ${from.path}  to ${to.path}`)
  next()
})

export default router
