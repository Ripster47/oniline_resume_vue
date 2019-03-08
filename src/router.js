import Vue from 'vue'
import Router from 'vue-router'
import ResumesIndex from './views/ResumesIndex.vue'
import ResumesShow from './views/ResumesShow.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
          { path: '/', name: 'home', component: ResumesIndex },
          { path: '/developers', name: 'resumes-index', component: ResumesIndex },
          { path: '/developers/:id', name: 'resumes-show', component: ResumesShow }
          ]
})
