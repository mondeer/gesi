import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
//import 'materialize-css/dist/css/materialize.css'
//import 'materialize-css'

import {MediaQueries} from 'vue-media-queries';
const mediaQueries = new MediaQueries();
Vue.use(mediaQueries)
Vue.use(VueMaterial)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
