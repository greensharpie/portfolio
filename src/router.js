import { createWebHistory, createRouter } from 'vue-router'
import HomePage from './pages/HomePage'
import AboutSec from './components/AboutMe'
import ExperienceSec from './components/ExperienceSec'
import ContactSec from './components/ContactSec'
import ProjectsPage from './pages/ProjectsPage'

const routes = [
  { path: '/', component: HomePage, name: 'HomePage' },
  { path: '/about', component: AboutSec, name: 'AboutSec' },
  { path: '/experience', component: ExperienceSec, name: 'ExperienceSec' },
  { path: '/contact', component: ContactSec, name: 'ContactSec' },
  { path: '/projects', component: ProjectsPage, name: 'ProjectsPage' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
