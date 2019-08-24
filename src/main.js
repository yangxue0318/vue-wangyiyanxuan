import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Lazyload from 'vue-lazyload'
import loading from './common/images/timg.jpg'
import './mock/mock-server'
Vue.use(Lazyload,{
   loading 
})
new Vue({
    render:h=>h(App),
    router,
    store
}).$mount('#app')