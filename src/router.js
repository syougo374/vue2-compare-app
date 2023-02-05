import HomeTest from './components/HomeTest.vue'
import AnotherPage from './components/AnotherPage.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes:[{
      path: '/Home',
      name: 'Home',
      component: HomeTest,
    },
    {
      path: '/Another',
      name: 'another',
      component: AnotherPage,
    }
  ]
})
