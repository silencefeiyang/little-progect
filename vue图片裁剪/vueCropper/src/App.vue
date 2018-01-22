<template>
  <div id="app">
    <Cropper></Cropper>
  </div>
</template>

<script>
import Cropper from './components/cropper'

export default {
  name: 'App',
  components: {
    Cropper
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
