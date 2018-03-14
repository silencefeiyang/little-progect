<template>
  <div>
    <header-nav></header-nav>
    <div class="breadcrumb">
      <router-link to="/">首页</router-link>
      /
      <span :style="{color:'#97a8be'}">{{flag}}</span>
    </div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
   import Header from '@/components/header'

  let flags = {
    project: '我的项目',
    workbench: '工作台',
    doc: '文档'
  }

  export default {
    data(){
      return {
        flag:''
      }
    },
    watch:{
      //路由函数只走一次，所以需要监控路由的变化
      $route(){
        this.flag = flags[this.$route.path.slice(1)]
      }
    },
    beforeRouterEnter(to,from,next){
      next((vm)=>{
        //当前要去的面包屑导航取值于
        vm.flag = flags[to.path.slice(1)]
      })
    },
    components: {
      headerNav: Header

      /*(resolve) => {
        setTimeout(() => {
          resolve(require('@/components/header'))
        }, 2000)
      }*/
    }
  }
</script>
<style>

</style>
