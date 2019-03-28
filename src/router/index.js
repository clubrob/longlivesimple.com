/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/Hello'
import Work from '@/views/Work'
import About from '@/views/About'
import Services from '@/views/Services'
import Contact from '@/views/Contact'
import Blog from '@/views/Blog'
import Shop from '@/views/Shop'
import TylerJMcCall from '@/views/TylerJMcCall'
import TravelJuliasWay from '@/views/TravelJuliasWay'
import CathyGersonStudios from '@/views/CathyGersonStudios'
import ChrisSobalvarro from '@/views/ChrisSobalvarro'
import SalonEtc from '@/views/SalonEtc'
import Aris from '@/views/Aris'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

Vue.use(Buefy)
Vue.use(Router)

// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash

      // specify offset of the element
      if (to.hash === '#anchor2') {
        position.offset = { y: 100 }
      }
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0
      position.y = 0
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position
  }
}

export default new Router({
  mode: 'history',
  scrollBehavior,
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      meta: { scrollToTop: true }
    },
    {
      path: '/Work',
      name: 'Work',
      component: Work,
      meta: { scrollToTop: true }
    },
    {
      path: '/About',
      name: 'About',
      component: About,
      meta: { scrollToTop: true }
    },
    {
      path: '/Services',
      name: 'Services',
      component: Services,
      meta: { scrollToTop: true }
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact,
      meta: { scrollToTop: true }
    },
    {
      path: '/Blog',
      name: 'Blog',
      component: Blog,
      meta: { scrollToTop: true }
    },
    {
      path: '/Shop',
      name: 'Shop',
      component: Shop,
      meta: { scrollToTop: true }
    },
    {
      path: '/Tyler-J-McCall',
      name: 'TylerJMcCall',
      component: TylerJMcCall,
      meta: { scrollToTop: true }
    },
    {
      path: '/Arise',
      name: 'Arise',
      component: Aris,
      meta: { scrollToTop: true }
    },
    {
      path: '/Travel-Julias-Way',
      name: 'Travel-Julias-Way',
      component: TravelJuliasWay,
      meta: { scrollToTop: true }
    },
    {
      path: '/SalonEtc',
      name: 'SalonEtc',
      component: SalonEtc,
      meta: { scrollToTop: true }
    },
    {
      path: '/CathyGersonStudios',
      name: 'CathyGersonStudios',
      component: CathyGersonStudios,
      meta: { scrollToTop: true }
    },
    {
      path: '/ChrisSobalvarro',
      name: 'ChrisSobalvarro',
      component: ChrisSobalvarro,
      meta: { scrollToTop: true }
    }
  ]
})
