import Vue from 'vue'
import App from './App.vue'

// register jw pagination component globally
import JwPagination from 'jw-vue-pagination';
import VueSocialSharing from 'vue-social-sharing'

Vue.use(VueSocialSharing);
Vue.component('jw-pagination', JwPagination);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
