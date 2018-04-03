import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

//定义一个容器

let store  = new Vuex.Store({
     state:{
         count:100,
         title:'',
         list: []            //  1.  集中管理的list
     },
     mutations:{
         addCount(state,obj){    //state为state中所有的状态
             state.count +=obj.num;
         },
         delCount(state,obj){
             state.count -=obj.num;
         },
         changeTitle(state, obj){
             state.title = obj.title
         },
         changeList(state,list){          // 1. 当发送了请求，异步获得了数据需要修改vuex中的数据时，需要提交mutation
             state.list = list          
         }
     },
     getters:{
        filrerCount(state){                //filterCount的值 依赖于这个函数的返回值   当这个函数触发，会接受state
            return state.count >= 120? 120: state.count
        }
     },
     actions:{
         addAction(context){  //contex一个对象，包含和当前实例一样的方法  
             setTimeout(()=>{       //定时器模拟异步操作
                //改变状态，提交mutations
                context.commit('addCount',{num:5})
             },300)
         },
         getListAction (context) {       // mock异步获取数据  发送请求       这步请求可以在list的create生命周期中触发
            axios.get('https://www.easy-mock.com/mock/5ac1fc930cf2282d3a30ca61/')
            .then((res)=>{   // .then接受调接口成功的数据
                context.commit('changeList',res.data)     // 1. 获取数据成功之后，提交mutation去更改state中的数据
            })
            .catch((error)=>{
                console.log(error)    
            })
         }
     }
})

//暴露出去

export default store