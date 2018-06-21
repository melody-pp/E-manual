<template>
  <div class="details">
    <img src="../../../asset/sportsDetail/01.png" class="title">
    <img src="../../../asset/sportsDetail/02.png" class="product1">
    <img src="../../../asset/sportsDetail/03.png" class="product2">
    <span @click="toLocation=!toLocation" class="locationIcon">定位</span>
    <div @click="toLocation=!toLocation" v-show="toLocation" class="model">
      <img src="../../../asset/location.png" class="center">
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

    .product1, .product2 {
      width: 100vw;
    }

    .model {
      img {
        width: 60vw;
      }
    }
  }

</style>
