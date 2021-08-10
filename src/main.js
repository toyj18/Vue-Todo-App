import Vue from 'vue'
import App from './App.vue'

// register jw pagination component globally
import JwPagination from 'jw-vue-pagination';
import VueSocialSharing from 'vue-social-sharing'
import Notifications from 'vue-notification'
 
/*
or for SSR:
import Notifications from 'vue-notification/dist/ssr.js'
*/
 
Vue.use(Notifications)
Vue.use(VueSocialSharing);
Vue.component('jw-pagination', JwPagination);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
