import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Organization from '@/components/Organization'
import Objectives from '@/components/Objectives'
import Themes from '@/components/Themes'
import Organizers from '@/components/Organizers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/organization',
      name: 'Organization',
      component: Organization
    },
    {
      path: '/objectives',
      name: 'Objectives',
      component: Objectives
    },
    {
      path: '/organizers',
      name: 'Organizers',
      component: Organizers
    },
    {
      path: '/themes',
      name: 'Themes',
      component: Themes
    }
  ]
})
