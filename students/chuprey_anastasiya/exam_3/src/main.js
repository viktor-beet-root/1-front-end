import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import * as VueGoogleMaps from 'vue2-google-maps';


library.add(faUserSecret);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(BootstrapVue)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");




Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCKcv820tqBKBUZTF3Zbc1AEnCJcbMv7Vs'
  },
})
