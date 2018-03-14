<template>
  <div class="login">
    <div class="login-box">
      <h2>登录</h2>
      <form @submit.prevent='sendLogin' autocomplete="off">
        <div><input placeholder="请输入用户名" type="text" name="user" ref="userInput" /></div>
        <div><input placeholder="请输入密码" type="password" name="password" /></div>
        <div class="login-btn"><input type="submit" value="一键登入" /></div>
      </form>
      <div class="back-index">
        <router-link  to="/">首页>>></router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {}
    },
    methods: {
      sendLogin () {
        let userName = this.$refs.userInput.value;
        this.$local.save("xiao",{
          login:true,
          userName:userName
        })
        let query = this.$route.query.redirect  //获取到路由的查询字符串
        if(!query){
          query = 'project'   //当是直接点登录   不是经过必须登录的模板进来时，默认到的一个地址
        }
        this.$router.push('/' + query)
      }
    }
  }
</script>
<style>

</style>
