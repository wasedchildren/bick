import Vue from 'vue'
import Router from 'vue-router'
import Map from '@/components/map'
import Detail from '@/components/detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Map',
      component: Map
    },
    {
      path: '/detail/:id/:detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
