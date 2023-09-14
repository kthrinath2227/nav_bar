
import Vue from 'vue';
import App from './App.vue'

/*     fontawesome */
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
/* 
Bootstap 

*/
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')