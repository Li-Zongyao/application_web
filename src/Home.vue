<template>
  <div id="home">
    <el-container>
      <p> this is home</p>
    <router-view class="me-container"/>
    </el-container>

  </div>
</template>

<script>
    import BaseFooter from "./components/view/BaseFooter";

    export default {
      components: {BaseFooter},
      name: "home"
    }
</script>

<style scoped>
  .me-container{
    margin: 100px auto 140px;
  }
</style>


