// import HomeTest from '@/components/HomeTest.vue'
// import AnotherPage from '@/components/AnotherPage.vue'
// import UserPost from '@/components/UserPost'
// import AnotherPage1 from '@/views/AnotherPage.vue'
// import AnotherPage2 from '@/views/AnotherPage2.vue'
// import AnotherPage3 from '@/views/AnotherPage3.vue'

const HomeTest = () => import('@/components/HomeTest.vue')
const AnotherPage = () => import('@/components/AnotherPage.vue')
const UserPost = () => import('@/components/UserPost')
const AnotherPage1 = () => import('@/views/AnotherPage.vue')
const AnotherPage2 = () => import('@/views/AnotherPage2.vue')
const AnotherPage3 = () => import('@/views/AnotherPage3.vue')


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
    // {
    //   path: '*',
    //   redirect: '/Home',
    // },
    {
      path: '/another1',
      name: 'another1',
      component: AnotherPage1,
      // beforeEnter(to,from,next){
      //   next('/home')
      // }
    },
    {
      path: '/another2/:id',
      name: 'another2',
      component: AnotherPage2,
      children: [{
        path: 'another3',
        name: 'another3',
        component: AnotherPage3,
      }]

    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash){
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
})
