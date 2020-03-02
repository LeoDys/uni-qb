import Vue from 'vue'
import App from './App'
import * as navTo from '@/common_js/nav-intent.js'

Vue.prototype.$navTo = navTo

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
