<template>
  <div class="coverPage">
    <img src="../../asset/coverPage/coverBG.png" class="coverBG">
    <img src="../../asset/coverPage/title.png" class="title levelCenter">
    <img src="../../asset/coverPage/logo.png" class="logo levelCenter">
  </div>
</template>

<script>
  export default {
    name: 'CoverPage'
  }
</script>

<style scoped lang="scss">
  .coverPage {
    position: relative;
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
