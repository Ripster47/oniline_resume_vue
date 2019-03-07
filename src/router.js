import Vue from 'vue'
import Router from 'vue-router'
import ResumeIndex from './views/ResumeIndex.vue'
import ResumeShow from './views/ResumeShow.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
          { path: '/', name: 'resume-index', component: ResumeIndex },
          { path: '/show', name: 'resume-show', component: ResumeShow },
          ]
})
