import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
          component: () => import('./views/Timeline.vue')
        },
        {
          path: 'posts/:id',
          name: 'posts',
          component: () => import('./views/Post.vue')
        }
      ]
    }]
})
