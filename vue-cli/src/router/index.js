import Vue from 'vue'
import Router from 'vue-router'
import cmp1 from '@/components/cmp1'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'cmp1',
    component: cmp1
  }]
})
