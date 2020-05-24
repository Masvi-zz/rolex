import Vue from 'vue'
import App from './App.vue'

import 'vue2-timepicker/dist/VueTimepicker.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
