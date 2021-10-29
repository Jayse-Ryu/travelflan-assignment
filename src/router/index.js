import Vue from 'vue';
import VueRouter from 'vue-router';
import goTo from 'vuetify/lib/services/goto';
import store from '../store';

Vue.use(VueRouter);

const routes = [
  // Components
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/Login.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "login" */ '../views/dashboard/Dashboard.vue'),
    meta: { requiresAuth: true },
  },

  // Common router
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "public" */ '../views/common/FourOFour.vue'),
    meta: { requiresAuth: false },
  },
  { path: '*', redirect: '/login', hidden: true },
];

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0;
    const scrollOption = {
      duration: 150,
      offset: 0,
      easing: 'easeInOutCubic',
    };

    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }

    return goTo(scrollTo, scrollOption);
  },
  routes,
});

router.beforeEach((to, from, next) => {
  // When the direction is to auth page
  if (to?.meta?.requiresAuth) {
    if (store.getters['account/isAuth']) {
      next();
    } else {
      next({ name: '404' });
    }
  } else if (to.name === 'login' && store?.getters['account/isAuth']) {
    next({ name: 'dashboard' });
  } else {
    next();
  }
});

export default router;
