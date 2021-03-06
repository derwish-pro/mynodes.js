import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Vuetify from 'vuetify'
import './stylus/main.styl'
import Routes from "./routes"
import VueSocketIO from 'vue-socket.io';
import VueMoment from 'vue-moment';
import Vuebar from 'vuebar';
import VueCookie from 'vue-cookie';


Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(VueSocketIO, '/dashboard');
Vue.use(VueMoment);
Vue.use(Vuebar);
Vue.use(VueCookie);


const router = new VueRouter({
  routes: Routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  sockets: {
    connect() {
      console.log('socket connected')
    }
  }
});