<template>
  <div>
    <div class="index-slider">
      <div><img src="../../asset/index/banner1.png"></div>
      <div><img src="../../asset/index/banner2.png"></div>
      <div><img src="../../asset/index/banner3.png"></div>
    </div>

    <div class="cates">
      <div class="cate" v-for="(cat,index) in cat1List" :style="{
      background: cat.bgc,
      top: index * cateHeight + 'px',
      }" @touchstart="touchstart" @touchmove="touchmove($event, index)" @touchend="touchend(index)">
        <img :src="cat.textImg">
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import { vuexMixin } from '../../common/mixins'
  import { TweenLite } from 'gsap'

  export default {
    name: 'index',
    mixins: [vuexMixin],
    components: {},
    data: () => ({
      cat1List: [
        {textImg: require('../../asset/index/01.png'), bgc: 'rgb(209,192,165)'},
        {textImg: require('../../asset/index/02.png'), bgc: 'rgb(166,147,124)'},
        {textImg: require('../../asset/index/03.png'), bgc: 'rgb(126,107,90)'},
        {textImg: require('../../asset/index/04.png'), bgc: 'rgb(74,58,33)'},
        {textImg: require('../../asset/index/05.png'), bgc: 'rgb(54,46,43)'},
        {textImg: require('../../asset/index/06.png'), bgc: 'rgb(207,169,114)'},
        {textImg: require('../../asset/index/07.png'), bgc: 'rgb(178,136,80)'},
        {textImg: require('../../asset/index/08.png'), bgc: 'rgb(153,108,51)'},
      ],
      lastY: 0,
      movingCate: null,
      cateHeight: window.innerWidth * 0.11
    }),
    mounted () {
      $('.index-slider').slick({
        // dots: true,
        fade: true,
        autoplay: true,
      })
    },
    methods: {
      touchstart (event) {
        this.lastY = event.changedTouches[0].clientY
        this.movingCate = $(event.target).closest('.cate')[0]
      },
      touchmove (event, index) {
        if (!this.movingCate) {
          return
        }
        const deltaY = event.changedTouches[0].clientY - this.lastY
        this.lastY += deltaY

        const top = parseInt(this.movingCate.style.top)
        this.movingCate.style.top = top + deltaY + 'px'
        this.changeCateOpacity(1 + (top + deltaY - index * this.cateHeight) / 200)
      },
      touchend (index) {
        if (!this.movingCate) {
          return
        }
        if (parseInt(this.movingCate.style.top) > index * this.cateHeight - 100) {
          this.changeCateOpacity(1)
          TweenLite.to(this.movingCate, 1, {
            top: index * 40 + 'px',
            ease: Elastic.easeOut.config(1, 0.5),
          })
        } else {
          this.$emit('pullToProduct', index)
          this.changeCateOpacity(0)
          TweenLite.to(this.movingCate, 1, {
            top: -window.innerWidth * 0.784 + 'px',
            opacity: 0
          })
        }
      },
      changeCateOpacity (opacity) {
        $('.cate').each((i, cate) => {
          if (cate !== this.movingCate) {
            cate.style.opacity = opacity
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .index-slider {
    img {
      width: 100%;
    }
  }

  .cates {
    position: relative;
    margin-top: -10px;
  }

  .cate {
    width: 100vw;
    height: 100vh;
    position: absolute;
    padding-top: 3vw;
    padding-left: 10vw;
    box-shadow: 10px 10px 13px rgba(0, 0, 0, 0.4);
    img {
      height: 5vw;
    }
  }
</style>

