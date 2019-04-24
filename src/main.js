import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css'
import { MdTable,MdCard,MdRipple,MdField,MdContent,MdButton } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

Vue.use(MdTable)
Vue.use(MdCard)
Vue.use(MdRipple)
Vue.use(MdField)
Vue.use(MdContent)
Vue.use(MdButton)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
