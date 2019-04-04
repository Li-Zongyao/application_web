<template>
  <div id="app">
    <p>app div</p>
    <router-view/>
    <base-footer></base-footer>
  </div>
</template>

<script>
  import LogIn from './components/Login'
  import BaseFooter from "./components/view/BaseFooter";
export default {
  name: 'App',
  components:{
    BaseFooter,
    LogIn }
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
