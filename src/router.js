import HomeTest from '@/components/HomeTest.vue'
import AnotherPage from '@/components/AnotherPage.vue'
import UserPost from '@/components/UserPost'
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
      path: '/Another/:id',
      name: 'another',
      component: AnotherPage,
      props: true,
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserPost,
      props: true,
      children: [{
        path: 'post',
        name: 'post',
        component: UserPost,
      }]
    },
    {
      path: '*',
      redirect: '/Home',
    }
  ]
})
