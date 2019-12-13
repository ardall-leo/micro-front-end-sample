import setPublicPath  from './set-public-path';
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
    el: '#otherMicroApp',
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

// if it's development mode, mount it
if (process.env.NODE_ENV == 'development') {
  vueLifecycles.mount({
    appOptions: {
      render: (h) => h(App),
      router,
    }
  });
}
