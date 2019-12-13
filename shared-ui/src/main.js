import setPublicPath  from './set-public-path';
import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import router from './router';
import singleSpaVue from 'single-spa-vue';
import "vuetify/dist/vuetify.min.css";
import * as colors from './styles/_colors.scss';

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(VueRouter);

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(App),
    router,
    vuetify: new Vuetify({
      theme: {
        themes: {
          dark: {
            primary: colors.primaryColor,
            secondary: colors.secondaryColor,
            accent: colors.accentColorDark,
          },
          light: {
            primary: colors.primaryColor,
            secondary: colors.secondaryColor,
            accent: colors.accentColorLight,
          },
        },
      },
      icons: {
        iconfont: 'mdi',
      },
    }),
  },
});

export const bootstrap = [
  () => { return setPublicPath() },
  vueLifecycles.bootstrap
];
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;

// vueLifecycles.mount({
//   appOptions: {
//     render: (h) => h(App),
//     router,
//   }
// });