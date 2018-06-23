<template>
  <div class="details">
    <img src="../../asset/sportsDetail/01.png" class="title">
    <div class="product1Box">
      <img src="../../asset/sportsDetail/02.png" class="product1">
      <div class="product1Txt">
        <img src="../../asset/sportsDetail/02-1.png">
      </div>
    </div>
    <div class="product2Box">
      <img src="../../asset/sportsDetail/03.png" class="product2">
      <div class="product2Txt">
        <img src="../../asset/sportsDetail/03-1.png">
      </div>
    </div>
    <div class="functionBar clearfix">
      <img src="../../asset/tasteDetail/collectIcon.png" class="collectIcon">
      <img src="../../asset/tasteDetail/locationIcon.png" @click="toLocation=!toLocation" class="locationIcon">
      <img src="../../asset/tasteDetail/shareIcon.png" class="shareIcon">
      <img src="../../asset/tasteDetail/goBackIcon.png" @click="detailToCate3" class="goBackIcon">

    </div>
    <div @click="toLocation=!toLocation" v-show="toLocation" class="model">
      <div class="location-slider">
        <div class="location-slide"><img class="center" src="../../asset/map/001.png"></div>
        <div class="location-slide"><img class="center" src="../../asset/map/002.png"></div>
        <div class="location-slide"><img class="center" src="../../asset/map/003.png"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: 'Details',
    data () {
      return {
        toLocation: false
      }
    },
    methods: {
      detailToCate3(){
        this.$emit('detailToCate3')
      }
    },
    mounted () {
      $('.location-slider').slick({
        // dots: true,
        fade: true,
        autoplay: false,
      })
    },
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
      background-color: #e0dddd;
      padding: 6vw 0;
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      > img {
        width: 9vw;
        float: left;
        margin: 0 4vw;
        vertical-align: middle;
      }
      .goBackIcon {
        float: right;
      }
    }
    .location-slider {
      height: 100vh;

      /deep/ .location-slide {
        height: 100vh;
        position: relative;
        img {
          width: 70vw;
        }
      }

    }
  }
</style>
