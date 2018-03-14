<template>
  <div class="doc">
    <div class="doc-nav">
      <ul class="main-menu">
        <li>
          <router-link :to="{path:'#base'}">基础</router-link>
          <ul class="nav-dropdown">
            <li>
              <router-link :to="{path:'#start'}">开始</router-link>
            </li>
            <li>
              <router-link :to="{path:'#dongtai'}">动态路由</router-link>
            </li>
            <li>
              <router-link :to="{path:'#qiantaoluyou'}">嵌套路由</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link :to="{path:'#jinjie'}">进阶</router-link>
          <ul class="nav-dropdown">
            <li>
              <router-link :to="{path:'#jinjie1'}">导航钩子</router-link>
            </li>
            <li>
              <router-link :to="{path:'#jinjie2'}">路由元信息</router-link>
            </li>
            <li>
              <router-link :to="{path:'#jinjie3'}">过渡动效</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="doc-view">
      <doc-view></doc-view>
    </div>
  </div>
</template>

<script>
  import DocView from '@/views/backend/doc-view'
  import TWEEN from 'tween.js'

  export default {
    components: {
      DocView
    },
    beforeRouterEnter(to,from,next){
      next((vm) =>{
        vm.animate(to)
      })
    },
    beforeRouteUpdate(to,from,next){
      console.log(to.hash)
      this.animate(to)
      next()
    },
    methods:{
      //运动到指定的目标元素
      animate (to) {
        function animateFunc(time){
          requestAnimationFrame(animateFunc)    //回调函数放进去，不停的执行
          TWEEN.update(time)
        }
        if(to.hash){
          
          //点击的元素
          var el = document.getElementById(to.hash.slice(1))
          //右侧大的要运动的模块
          var doc = document.getElementsByClassName('doc')[0]
          if(el){
	          animateFunc()
            new TWEEN.Tween({          //  new TWEEN初始化，下面有个Tween的方法
                 number:doc.scrollTop     //  起始位置
            })
            .to({
              number:el.offsetTop   // 目标点
            },500)
            .onUpdate(function(){
              doc.scrollTop = this.number.toFixed(0)    //  to.Fixed取整
            })
            .start()      //启动          
          }
        }
      }
    }
  }

</script>
<style>

</style>
