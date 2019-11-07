import Vue from 'vue';
import Router from 'vue-router';
import A from '../components/A.vue';
import B from '../components/B.vue';
import C404 from '../components/404.vue';

Vue.use(Router);

export default [
  { path: '/a', component: A },
  { path: '/b', component: B },
  {
    path: '*',
    component: C404,
  },
];
