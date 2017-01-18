import config from '../../../config/index.js'
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import VueSocketio from 'vue-socket.io'; // socket.io for vue2

Vue.use(ElementUI)
Vue.use(VueSocketio, 'http://' + config.build.websocket.host + ':' + config.build.websocket.port);

new Vue({
    el: '#app',
    render: h => h(App)
})
