
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/home'
import About from '@/components/about'
import document from '@/components/document'
import NotFind from '@/components/notFind'
import User from '@/components/user'
import Study from '@/views/study'
import Hobby from '@/views/hobby'
import Work from '@/views/work'
import Silder from '@/views/silder'
Vue.use(VueRouter)     //把vuerouter作为vue的插件

let router = new VueRouter({      //初始化一个路由实例
    mode:'history',
    linkActiveClass:'is-active',
    scrollBehavior(to,from,savePosition){        //函数   点击浏览器前进后退时、或者切换导航时触发
        if(to.hash){
            return {
                selector:to.hash
            }
        }
    },
    routes:[                       //里面的属性routes为一个数组，接受配置路由的对象
        {
            path:'/',              //配置首页
            component:Home,
            meta:{
                index:1,
                title:'home'
            }
        },
        // {
        //     path:'/home',              //一个路径对应一个组件
        //     name:'Home',              //路由中对应取上名字，在redirect的时候可以使用
        //     component:Home        //注意这里是component  不是components
        // },
        {
            path:'/about',
            name:'About',
            component:About,
            children:[
                {
                    path:'',         //默认选中的二级路由 写空字符串就可以了    /about
                    name:'study',  
                    component:Study,
                    meta:{
                        index:3,
                        title:'study'
                    }
                },
                {
                    path:'hobby',         //嵌套的子路由不需要再加/，加/都是表示相当于根路径，写字符串就可以了
                    name:'hobby',
                    component:Hobby
                },
                {
                    path:'work',
                    name:'work',
                    component:Work
                }
            ]
        },
        {
            path:'/document',
            name:'Document',
            beforeEnter(to,from,next){
                next();
                console.log(1)
            },
            components:{
                default:document,
                silder:Silder
            },
            meta:{
                index:2,
                login:true,
                title:'document'
            }
        },

        {
            path:'/user/:userType?/:userId?',         //匹配动态路由     ？代表匹配一次或者多次  /user/vip/1  /user/common/1   /user
             component:User,
             meta:{
                 index:4,
                 title:'user'
             }
        }
        // {
        //     path:'*',
        //     // redirect:'./home',       写path路径
        //     // redirect:{name:'About'}      写对象形式，配合给路由取的名字
        //     redirect:(to) => {        //动态写入重定向目标
        //         //to 目标路由对象，就是访问的路径的路由信息
        //         if(to.path==='/123'){
        //             return '/about'
        //         }else if(to.path ==='/345'){
        //             return '/document'
        //         }else{
        //             return {path:'/'}
        //         }
        //     }
        // }
    ]
})
// router.beforeEach((to,from,next) => {
//     // if(to.meta.login){        //判断是否需要登录
//     //     next('/login')
//     // }else{
//     //     next()
//     // }
//     next()
// })
// router.afterEach((to,from,next)=>{
//     if(to.meta.title){
//         window.document.title = to.meta.title
//     }
// })
export default router             //将路由实例暴露出去