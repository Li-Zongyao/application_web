import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from "@/components/Login"
import Home from "@/Home"
import NotFound from "@/components/NotFound"
import Table from "@/view/style1/Table.vue"
import Form from "@/view/style1/Form.vue"
import Home2 from "@/Home2"


Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      component: Login,
      name: 'Login',
      hidden: true
    },
    {
      path: '/404',
      component: NotFound,
      name: 'NotFound',
      hidden: true
    },

    {
      path: '/home',
      name: '配置1',
      component: Home,
      iconCls: 'el-icon-message',  //图标样式参数
      children: [
        { path: '/home/table', component: Table, name: '查询' },
        { path: '/home/form', component: Form, name: '项目申报' },
      ]
    },
    {
      path: '/home2',
      name: '配置2',
      component: Home2,
      iconCls: 'el-icon-message',  //图标样式参数
      children: [

      ]
    },
    {
      path: '/login',
      component: r => require.ensure([], () => r(require('@/components/Login')), 'login'),
      hidden: true
    },

  ]
})
