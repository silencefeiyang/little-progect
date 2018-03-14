<template>
  <div class="main">
    <div class="home-header">
      <div class="portrait">
        <router-link v-if="!isLogin" to='/login' tag="span">登录</router-link>
        <img v-if="isLogin" src="../assets/portrait.png">
      </div>

    </div>
    <div class="phrase">
      一起学习Vue-router
    </div>
    <div class="btns">
      <router-link :to="{name:'Project'}" tag="div">我的项目</router-link>
      <router-link to="/doc" tag="div">我的文档</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        isLogin:false
      }
    },
    created(){
      let info = this.$local.fetch('xiao')
      this.isLogin = info.login
    }
  }
</script>
<style>

</style>
