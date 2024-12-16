import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      const section = document.querySelector(to.hash)
      if (section) {
        return {
          el: to.hash,
          behavior: 'smooth',
        }
      }
      return {top: 0}
    }
  }
})

router.afterEach((to, from) => {
  if (to.hash) {
    history.replaceState(null, null, " ")
  }
})
export default router
