import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LibraryView from '@/views/LibraryView.vue'
// import ProductView from '@/views/ProductView.vue'
// import CartView from '@/views/CartView.vue'

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
//   {
//     path: '/product/:id',
//     name: 'product',
//     component: ProductView,
//     props: true, // allows using route params as props
//   },
//   {
//     path: '/cart',
//     name: 'cart',
//     component: CartView,
//   },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
