import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '*',
    beforeEnter() {
        window.location = "https://timetable.viaplanner.ca/timetable"
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
