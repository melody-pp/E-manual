<template>
  <div class="welcome">
    <img src="../../asset/welcome/coverBG.png" class="coverBG">
    <img src="../../asset/welcome/title.png" class="title levelCenter">
    <img src="../../asset/welcome/logo.png" class="logo levelCenter">
  </div>
</template>

<script>
  export default {
    name: 'welcome'
  }
</script>

<style scoped lang="scss">
  .welcome {
    position: relative;
    width: 100vw;
    height: 100vh;
    .coverBG {
      width: 100vw;
      height: 100vh;
    }
    .title {
      top: 22vh;
      width: 62vw;
    }
    .logo {
      bottom: 10vh;
      width: 27vw;
    }
  }
</style>
