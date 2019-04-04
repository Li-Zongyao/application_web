<template>
  <div id="home">
    <el-container>
      this is home
    <router-view/>
    <base-footer></base-footer>
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

</style>
