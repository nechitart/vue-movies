import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('../views/HomeView.vue')
    },
    {
      path: '/movies/:id',
      name: 'movies',
      component: () => import('../views/MovieView.vue')
    },
    {
      path: '/popular-movies/:page?',
      name: 'popular-movies',
      component: () => import('../views/PopularMoviesView.vue')
    },
    {
      path: '/playing-movies/:page?',
      name: 'playing-movies',
      component: () => import('../views/PlayingMoviesView.vue')
    }
  ]
});

export default router
