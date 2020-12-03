import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/computed-sample-bad',
      name: 'ComputedSampleBad',
      component: () => import('@/view/ComputedSampleBad'),
    },
    {
      path: '/computed-sample-good',
      name: 'ComputedSampleGood',
      component: () => import('@/view/ComputedSampleGood'),
    },
  ],
});
