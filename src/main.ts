import Vue from 'vue';
import App from './App.vue';
import router from './router';
import * as colors from './styles/colors';
import VueCompositionApi from '@vue/composition-api';
import { useProvider } from '@/context';

Vue.use(VueCompositionApi);
Vue.config.productionTip = false;

Vue.prototype.colors = colors;

new Vue({
  router,
  setup() {
    useProvider();
    return {};
  },
  render: h => h(App),
}).$mount('#app');
