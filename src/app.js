import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';
import App from './App.vue';

Vue.config.productionTip = false;

const router = new Router({ mode: 'history', routes });

export function createApp() {
  const app = new Vue({
    router,
    render: h => h(App),
  });

  return { app, router };
}
