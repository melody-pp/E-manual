<template>
  <div class="levelMenu clearfix">
    <div class="level-menu-slider">
      <div class="cate" v-for="cat in cate1List" :style="{background: cat.bgc}">
        <img :src="cat.thumbt">
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import { vuexMixin } from '../mixins'

  export default {
    name: 'LevelMenu',
    mixins: [vuexMixin],
    mounted () {
      $('.level-menu-slider')
        .slick({centerMode: true, slidesToShow: 3})
        .slick('slickGoTo', this.currentCat1Index)
        .on('afterChange', (event, slick, currentSlide) => {
          this.setState({currentCat1: this.cate1List[currentSlide].id})
          this.$emit('changeCat1')
        })
    },
    beforeDestroy () {
      $('.level-menu-slider').slick('unslick')
    }
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
