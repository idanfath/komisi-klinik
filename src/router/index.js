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
        path: '/service', name: 'service',
        component: () => import('../views/ServiceV.vue'),
      },
      {
        path: '/results', name: 'results',
        component: () => import('../views/ResultsV.vue'),
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  //   scrollBehavior() {
  //     document.getElementById('top').scrollIntoView();
  // }
  scrollBehavior() {
    return { top: 0 }
  }

})

export default router
