import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main,
      redirect: { name: 'timeline'},
      children: [
        {
          path: 'timeline',
          name: 'timeline',
          component: () => import(/* webpackChunkname: timeline */ './views/Timeline.vue')
        }
      ]
    }]
})
