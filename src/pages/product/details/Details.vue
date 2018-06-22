<template>
  <div class="details">
    <img src="../../../asset/sportsDetail/01.png" class="title">
    <div class="product1Box">
      <img src="../../../asset/sportsDetail/02.png" class="product1">
      <div class="product1Txt">
        <img src="../../../asset/sportsDetail/02-1.png">
      </div>
    </div>
    <div class="product2Box">
      <img src="../../../asset/sportsDetail/03.png" class="product2">
      <div class="product2Txt">
        <img src="../../../asset/sportsDetail/03-1.png">
      </div>
    </div>
    <div class="functionBar">
      <img src="../../../asset/tasteDetail/collectIcon.png" @click="toLocation=!toLocation" class="collectIcon">
      <img src="../../../asset/tasteDetail/locationIcon.png" @click="toLocation=!toLocation" class="locationIcon">
      <img src="../../../asset/tasteDetail/shareIcon.png" @click="toLocation=!toLocation" class="shareIcon">
      <img src="../../../asset/tasteDetail/goBackIcon.png" @click="toLocation=!toLocation" class="goBackIcon">
      <div @click="toLocation=!toLocation" v-show="toLocation" class="model">
        <img src="../../../asset/location.png" class="center">
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Details',
    data () {
      return {
        toLocation: false
      }
    },
    methods: {}
  }
</script>

<style scoped lang="scss">
  .details {
    text-align: center;
    .title {
      width: 92vw;
      margin: 6vw 0;
    }
    .product1Box, .product2Box {
      position: relative;

    }
    .product1, .product2 {
      width: 100vw;
      vertical-align: middle;
    }
    .product1Txt, .product2Txt {
      position: absolute;
      top: 24vw;
      right: 0;
      width: 60vw;
      height: 18vw;
      overflow: auto;
      > img {
        width: 55vw;
      }
    }
    .functionBar {
      > img {
        width: 8%;
      }
    }
    .model {
      img {
        width: 60vw;
      }
    }
  }

</style>
