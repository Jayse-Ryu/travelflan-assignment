import Vue from 'vue';
import VueRouter from 'vue-router';
import goTo from 'vuetify/lib/services/goto';

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

export default router;
