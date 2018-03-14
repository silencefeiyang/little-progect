<template>
 <div>
     关于我
     <hr/>
     <ul class="nav">
         <!-- <router-link to="/about" tag="li" exact><a>study</a></router-link>
         <router-link to="/about/work" tag="li" exact><a>work</a></router-link>
         <router-link to="/about/hobby" tag="li" exact><a>hobby</a></router-link> -->
         <router-link :to="{name:'study'}" tag="li" exact><a>study</a></router-link>
         <router-link :to="{name:'work'}" tag="li" exact><a>work</a></router-link>
         <router-link :to="{name:'hobby'}" tag="li" exact><a>hobby</a></router-link>
     </ul>
    <hr/>
    <router-view></router-view>
    <span>{{mes}}</span>
 </div>
</template>

<script>
 export default {
   data () {
     return {
       mes:''
     }
   },
   beforeRouteEnter(to,from,next){
       next((vm) => {
           vm.mes = '今天下雪啦'
       })
   },
   beforeRouteUpdate(to,from,next){
       console.log('路由改变')
   },
   beforeRouteLeave(to,from,next){
      next()
       console.log('走了')
   },
   components: {

   }
 }
</script>

<style>

 
</style>
