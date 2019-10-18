import Vue from 'vue'
import App from './App.vue'
import cuCustom from './components/colorui/components/cu-custom.vue'
Vue.config.productionTip = false
Vue.component('cu-custom',cuCustom)

new App().$mount()
