<template>
  <div id="app">
    <div class="nav-box">
      <ul class="nav">
        <router-link to="/" exact tag="li">    <!--exact适用于首页路由的精确匹配-->
          <i class="fa fa-home"></i>
          <span>home</span>
        </router-link>  
        <router-link :to="document" tag="li">      <!--接受变量-->
          <i></i>
          <span>document</span>
        </router-link>
        <router-link to="/about" tag="li"> <!--接受对象-->
          <i></i>
          <span>about</span>
        </router-link>
        <router-link to="/user" tag="li"> <!--接受对象-->
          <i></i>
          <span>user</span>
        </router-link>
      </ul>
    </div>
    <!-- <router-view name="silder"></router-view> -->
    <transition :name="site" mode="out-in">
     <router-view class="center"></router-view>     <!--router渲染的根节点-->
    </transition>   
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      document:'/document#here',
      site:'left'
    }
  },
  watch:{
    $route(to,from){
      if(to.meta.index < from.meta.index){
        this.site = 'right'
      }else{
        this.site = 'left'
      }
    }
  }
}
</script>

<style>
.left-enter{
  transform: translate(100%)
}
.left-enter-active,.left-leave-active{
  transition:1s
}
.left-leave{
  transform: translate(-100%)
}
.right-enter{
  transform: translate(-100%)
}
.right-enter-active,.right-leave-active{
  transition: 1s
}
.right-leave{
  transform: translate(100%)
}
</style>
