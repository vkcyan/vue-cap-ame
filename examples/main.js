import Vue from 'vue';
import App from './App.vue';
import directive from '../packages/directive/index';
// import { showLoading, hideLoading } from '../packages/template/Loading';
import { showLoading, hideLoading } from '../lib/Vue-cap-ame.common';
import '../lib/Vue-cap-ame.css';
Vue.config.productionTip = false;
Vue.prototype.$showLoading = showLoading;
Vue.prototype.$hideLoading = hideLoading;
directive();
new Vue({
  render: h => h(App)
}).$mount('#app');
