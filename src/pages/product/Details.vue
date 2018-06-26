<template>
  <div class="details">
    <img :src="detail.titlethumb" class="title">

    <div class="product1Box">
      <img :src="detail.contentthumb1" class="product1">
      <div class="product1Txt">
        <img :src="detail.content1">
      </div>
    </div>

    <div class="product2Box">
      <img :src="detail.contentthumb2" class="product2">
      <div class="product2Txt">
        <img :src="detail.content2">
      </div>
    </div>

    <div class="functionBar clearfix">
      <img src="../../asset/tasteDetail/collectIcon.png" class="collectIcon">
      <img src="../../asset/tasteDetail/locationIcon.png" @click="toLocation=!toLocation" class="locationIcon">
      <img src="../../asset/tasteDetail/shareIcon.png" class="shareIcon">
      <img src="../../asset/tasteDetail/goBackIcon.png" @click="goBack" class="goBackIcon">
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
  import { vuexMixin } from '../../common/mixins'

  export default {
    name: 'Details',
    mixins: [vuexMixin],
    data: () => ({
      detail: {},
      toLocation: false
    }),
    methods: {
      goBack () {
        this.$emit('goBack')
      }
    },
    mounted () {
      this.axios.get('/yingfei/index.php/index/index/content', {params: {scatid: this.currentCat3}}).then(res => {

        this.detail = res.data[0]
        console.log(this.detail)
      })

      setTimeout(function () {
        $('.location-slider').slick({fade: true, autoplay: false,})
      })
    },
    beforeDestroy () {
      $('.location-slider').slick('unslick')
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
