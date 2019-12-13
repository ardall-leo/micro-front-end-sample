import setPublicPath  from './set-public-path'
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueRouter from 'vue-router';
import singleSpaVue from 'single-spa-vue';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el : '#artemis',
    render: (h) => h(App),
    router,
  },
});

export const bootstrap = [
  () => { return setPublicPath() },
  vueLifecycles.bootstrap
];

export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;