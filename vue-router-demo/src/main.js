import Vue from 'vue'      //引入vue
import App from './App' 
import router from '@/router'
import '@/assets/app.css'          //@在webpack.base里面配置的为src的缩写

new Vue({
  el:'#app',
  router: router,                      //将初始化的router注入到这个服务中
  template:`
    <App/>
  `,
  components:{
    App
  }
})
