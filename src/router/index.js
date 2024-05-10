/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import {createRouter, createWebHistory} from 'vue-router/auto'
import {setupLayouts} from 'virtual:generated-layouts'
import {useAuthStore} from "../store/auth"

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  extendRoutes: setupLayouts,
})

router.beforeEach(async (to, from) => {
  const store = useAuthStore()
  await store.fetchUser()
  if (to.meta.auth && !store.isLoggedIn) {
    return {
      name: "sign-in",
      query: {
        redirect: to.fullPath,
      }
    }
  } else if (to.meta.guest && store.isLoggedIn) {
    return {
      name: 'home'
    }
  }
})

export default router
