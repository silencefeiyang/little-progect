import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Layout from '@/views/layout'

import Project from '@/views/backend/project'
import Doc from '@/views/backend/doc'
import Workbench from '@/views/backend/workbench'
import Login from '@/components/login'

let layout = (resolve) => {
  return require.ensure([],()=>{          //  require.ensuire  webpack会自动编译，回调函数接受的参数，第一个为这个组件的所需的依赖
    resolve(require('@/views/layout'))    // 第二个，resolve加载一个组件   使用require引入
  })
}
let project = (resolve) => {
  return require.ensure([],()=>{          
    resolve(require('@/views/backend/project'))    
  })
}  
let doc = (resolve) => {
  return require.ensure([],()=>{          
    resolve(require('@/views/backend/doc'))    
  },'abc')                                    //第三个参数  chunk  webpack会将chunk名字相同的打包到一起，进行加载
}   
// let workbench = (resolve) => {
//   return require.ensure([],()=>{          
//     resolve(require('@/views/backend/workbench'))    
//   },'abc')
// }  
let workbench = (resolve) => {
  return import(('@/views/backend/workbench'))
} 
Vue.use(Router)

let router = new Router({
  mode:'history',
  linkActiveClass:'is-active',
  routes:[
    {
      path:'/',
      name:'Home',
      component:Home
    },
    {
      path:'/management',
      name:'management',
      component:Layout,
      children:[
        {
          path:'/project',
          name:'Project',
          component:Project,
          meta:{
            login:true
          }
        },
        {
          path:'/workbench',
          name:'Workbench',
          component:Workbench,
          meta:{
            login:true
          }
        },
        {
          path:'/doc',
          name:'Doc',
          component:Doc
        }
      ]
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'*',
      redirect:'/'
    }
  ]
})

router.beforeEach( (to,from,next) =>{
  // to.matched  数组类型  存的是匹配到的路由，包括父路由
  let flag = to.matched.some((item)=> {
    return item.meta.login
  })
  if(flag){
    let loginInfo = router.app.$local.fetch('xiao')
    if(loginInfo.login){
      next()
    }else{
      router.push(
        {
          name:'Login',
          query:{
            redirect:to.path.slice(1)       //  当登录成功，跳转到目标路由去
          }
        }
      )
    }
  }else {
    next()
  }
})

export default router
