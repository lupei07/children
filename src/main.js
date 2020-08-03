import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import VueClipboard from 'vue-clipboard2'
import 'element-ui/lib/theme-chalk/index.css';

import './assets/css/reset.css'


Vue.use(ElementUI);
Vue.use(VueClipboard)

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
