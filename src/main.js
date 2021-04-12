import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import Toast from "components/common/toast"
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad)
var FastClick = require('fastclick');
FastClick.attach(document.body);
Vue.config.productionTip = false
Vue.use(Toast)
    //定义事件总线
Vue.prototype.$bus = new Vue()
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
