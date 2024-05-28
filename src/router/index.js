import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/sh/main',
    name: 'MainShell',
    component: () => import('../shell/MainSh.vue'),
    beforeEnter: (to, from, next) => { if (to.name === 'MainShell') { return next({ name: 'home' }) } next() },
    children: [
      {
        path: '/', name: 'home',
        component: () => import('../views/HomeV.vue'),
      },
      {
        path: '/about', name: 'about',
        component: () => import('../views/AboutV.vue'),
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
