import Vue from 'vue'
import App from './App'
import noData from './components/common/no-data'

Vue.config.productionTip = false
// 引入全局组件
Vue.component('no-data', noData)

App.mpType = 'app'

const app = new Vue({
  ...App,
})
app.$mount()
