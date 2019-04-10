import Vue from 'vue'
import Router from 'vue-router'
import archive from '@/components/archive/archive.vue'
import categories from '@/components/categories/categories'
import timeline from "@/components/timeline/timeline"
import about from '@/components/about/about'
import post from '@/components/post/post'
import detail from '@/components/detail/detail'
import admin from '@/components/admin/admin'
import home from '@/components/home/home'
import login from '@/components/login/login'
import add from '@/components/admin/add'
import manage from '@/components/admin/manage'
import edit from '@/components/admin/edit'
import category from '@/components/admin/category'
import dataview from '@/components/admin/dataview'
Vue.use(Router)
 function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
  }
  return "";
}
export default new Router({
  // mode:'history',
  routes: [
    {
      path:'/',
      redirect:'/home/archive'
    },

    {
      path: '/home',
      component:home,
      children:[
        {
          path: 'detail/:id',
          name: 'detail',
          component: detail
        },
        {
          path: 'categories',
          name: 'categories',
          component: categories
        },

        {
          path: 'archive',
          name: 'archive',
          component: post
        },

        {
          path: 'timeline',
          name: 'timeline',
          component: timeline
        },
        {
          path: 'about',
          name: 'about',
          component: about
        },
      ]
    },

    {
      path: '/admin',
      name: 'admin',
      component: admin,
      redirect:'/admin/dataview',
      beforeEnter: (to, from, next) => {
        if(getCookie('userdata')){
          next()
        }else{
          next('/login')
        }

      },
      children:[
        {
          path:'add',
          name:'add',
          component:add,

        },
        {
          path:'edit',
          name:'edit',
          component:edit
        },
        {
          path:'manage',
          name:'manage',
          component:manage
        },
        {
          path:'category',
          name:'category',
          component:category
        },
        {
          path:'dataview',
          name:'dataview',
          component:dataview
        }

      ]
    },
    {
      path:'/login',
      name:'login',
      component:login
    }
  ]
})
