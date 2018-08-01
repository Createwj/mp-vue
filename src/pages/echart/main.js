import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: 'echart图标',
    usingComponents: {
      'ec-canvas': '../../../static/ec-canvas/ec-canvas'
    }
  }
}
