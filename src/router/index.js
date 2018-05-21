import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index.vue'
import  BaoYou from '@/components/detail/BaoYou.vue'
import  Guihua from '@/components/detail/Guihua.vue'
import  JiPiao from '@/components/detail/JiPiao.vue'
import  QuanGou from '@/components/detail/QuanGou.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexheader',
      component: index,
      children:[//路由嵌套下的跳转
        {
          path: '/a/BaoYou',
          name:"BaoYou1",
          component: BaoYou
        },
        {
          path: '/a/Guihua',
          name:"Guihua1",
          component: Guihua
        },
        {
          path: '/a/JiPiao',
          name:"JiPiao1",
          component: JiPiao
        },
        {
          path: '/a/QuanGou',
          name:"QuanGou1",
          component: QuanGou
        },
      ]

    },
    {
      path: '/BaoYou',
      name:"BaoYou",
      component: BaoYou
    },
    {
      path: '/Guihua',
      name:"Guihua",
      component: Guihua
    },
    {
      path: '/JiPiao',
      name:"JiPiao",
      component: JiPiao
    },
    {
      path: '/QuanGou',
      name:"QuanGou",
      component: QuanGou
    },
  ]
})
