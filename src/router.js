import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/Login.vue'
import QRCode from './components/QRCode.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/qrcode', component: QRCode },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
