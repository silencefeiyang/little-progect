// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/css/app.css'

Vue.config.productionTip = false

import Utile from './lib/utils'

Vue.use(Utile)
// Vue.prototype.$custom = "我是自定义的属性"      //在根实例上扩展属性

// //当插件内暴露出来的是一个对象时的写法
// let obj = {
//   install:function(Vue,options){              // 约定的规则：对象内要写一个install的key值，并且对应一个函数
//     Vue.prototype.$abc = 'a'
//   }
// }
// Vue.use(obj,{a:1})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
