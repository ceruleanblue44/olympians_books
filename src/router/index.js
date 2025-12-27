import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LibraryView from '@/views/LibraryView.vue'
import CartView from '@/views/CartView.vue'
// import ProductView from '@/views/ProductView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/library',
    name: 'library',
    component: LibraryView,
  },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
    },
//   {
//     path: '/product/:id',
//     name: 'product',
//     component: ProductView,
//     props: true, // allows using route params as props
//   },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
