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
 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style>

 
</style>
