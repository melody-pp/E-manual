<template>
  <div class="cate2">
    <div class="cate2-slider" :style="{margin: `${sliderMg}px 0`}">
      <div><img src="../../../asset/index/banner1.png"></div>
      <div><img src="../../../asset/index/banner2.png"></div>
      <div><img src="../../../asset/index/banner3.png"></div>
    </div>

    <div class="free" @click="clickHandler">
      <img src="../../../asset/product/free/01.png" class="free01">
      <img src="../../../asset/product/free/02.png" class="free02">
      <img src="../../../asset/product/free/03.png" class="free03">
      <img src="../../../asset/product/free/04.png" class="free04">
      <img src="../../../asset/product/free/05.png" class="free05">
      <img src="../../../asset/product/free/06.png" class="free06">
    </div>
  </div>

</template>

<script>
  import $ from 'jquery'

  export default {
    name: 'Cate2',
    data: () => ({
      sliderMg: (window.innerHeight - (window.innerWidth * 16 / 9)) / 4
    }),
    mounted () {
      $('.cate2-slider').slick({
        dots: true,
        autoplay: true,
      })
    },
    methods: {
      clickHandler () {
        this.$emit('toCate3')
      }
    }
  }
</script>

<style scoped lang="scss">
  .cate2-slider {
    img {
      width: 100%;
    }
  }

  .free {
    img {
      float: left;
    }
    .free01 {
      width: 46vw;
      height: 43.188vw;
    }
    .free02 {
      width: 27vw;
      height: 21.5984vw;
    }
    .free03 {
      width: 27vw;
      height: 21.5984vw;
    }
    .free04 {
      width: 54vw;
      height: 21.5984vw;
    }
    .free05 {
      width: 59vw;
      height: 33.62vw;
    }
    .free06 {
      width: 41vw;
      height: 33.62vw;
    }
  }
</style>
