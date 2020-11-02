import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root = "https://hightech-qa.firebaseio.com/data.json"

const router = new VueRouter({
  mode:"history",
  routes:Routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
