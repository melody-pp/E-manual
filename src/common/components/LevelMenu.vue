<template>
  <div class="levelMenu clearfix">
    <div class="level-menu-slider">
      <div class="cate" v-for="cat in cat1List" :style="{background: cat.bgc}">
        <img :src="cat.textImg">
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: 'LevelMenu',
    data: () => ({
      cat1List: [
        {textImg: require('../../asset/levelMenu/01.png'), bgc: 'rgb(209,192,165)'},
        {textImg: require('../../asset/levelMenu/02.png'), bgc: 'rgb(166,147,124)'},
        {textImg: require('../../asset/levelMenu/03.png'), bgc: 'rgb(126,107,90)'},
        {textImg: require('../../asset/levelMenu/04.png'), bgc: 'rgb(74,58,33)'},
        {textImg: require('../../asset/levelMenu/05.png'), bgc: 'rgb(54,46,43)'},
        {textImg: require('../../asset/levelMenu/06.png'), bgc: 'rgb(207,169,114)'},
        {textImg: require('../../asset/levelMenu/07.png'), bgc: 'rgb(178,136,80)'},
        {textImg: require('../../asset/levelMenu/08.png'), bgc: 'rgb(153,108,51)'},
      ]
    }),
    mounted () {
      $('.level-menu-slider').slick({
        centerMode: true,
        slidesToShow: 3,
      })
    },
  }
</script>

<style scoped lang="scss">
  .levelMenu {
    position: relative;
    z-index: 10;
    overflow: visible;
  }

  .level-menu-slider {
    /deep/ .slick-slide {
      &.slick-center {
        position: relative;
        z-index: 2;
        .cate {
          transform-origin: center;
          transform: scale(1.1);
          border-left: 1px solid #fff;
          border-right: 1px solid #fff;
        }
      }
    }
  }

  .cate {
    height: 15vw;
    position: relative;
    img {
      width: 100%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
</style>
