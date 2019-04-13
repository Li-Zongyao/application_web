import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from "@/components/Login"
import Home from "@/Home"



Vue.use(Router)

export default new Router({
  routes: [

    // {
    //   path: '/',
    //   component: Home,
    //   children: [
    //     {
    //       path: '/',
    //       component: Login
    //     }
    //   ]
    // },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/',
          name: 'login',
          component: Login
        },
        {
          path: '/hello',
          name: 'Hello',
          component: HelloWorld
        }
      ]
    },
    {
      path: '/login',
      component: r => require.ensure([], () => r(require('@/components/Login')), 'login')
    },

  ]
})
