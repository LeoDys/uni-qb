import Vue from 'vue'
import App from './App'
import * as navTo from '@/common_js/nav-intent.js'
import * as constant from '@/common_js/constant.js'
import * as pdascan from '@/common_js/pda_scan.js'

Vue.prototype.$navTo = navTo
Vue.prototype.$constant = constant
Vue.prototype.$pdaScan = pdascan

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
