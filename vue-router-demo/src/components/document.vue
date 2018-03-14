<template>
 <div>
   我是文档
   <p id="here"> 到这来</p>
 </div>
</template>

<script>
 export default {
   data () {
     return {
       mes:'今天天气怎么样'
     }
   },
   components: {

   },
   beforeCreate(){
     console.log('beforecreate')
   },
   beforeRouteEnter(to,from,next){
     next( (vm) => {
       vm.mes = '下雪啦'  // next接受一个回调函数，在路由钩子函数后执行，里面参数vm，就是当前组件的实例   
        console.log(vm.mes)
     })         
   }
 }
</script>

<style>

 
</style>
