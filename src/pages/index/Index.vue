<template>
  <div class="index">
    <div class="index-slider">
      <div><img src="../../asset/index/banner1.png"></div>
      <div><img src="../../asset/index/banner2.png"></div>
      <div><img src="../../asset/index/banner3.png"></div>
    </div>

    <div class="cates">
      <div class="cate"
           v-for="(cat,index) in cate1List"
           @touchstart="touchstart"
           @touchend="touchend(index)"
           @touchmove="touchmove($event, index)"
           :style="{background: cat.bgc,top: index * cateHeight + 'px'}">
        <img :src="cat.thumbw">
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
      bgcList: [
        'rgb(209,192,165)',
        'rgb(166,147,124)',
        'rgb(126,107,90)',
        'rgb(74,58,33)',
        'rgb(54,46,43)',
        'rgb(207,169,114)',
        'rgb(178,136,80)',
        'rgb(153,108,51)',
      ],
      lastY: 0,
      movingCate: null,
      cateHeight: window.innerWidth * 0.11
    }),
    mounted () {
      this.axios.post('/yingfei/index.php/index/index/onecategory').then(res => {
        res.data.forEach((item, i) => {item.bgc = this.bgcList[i]})
        this.setState({cate1List: res.data})

        this.$nextTick(() => {
          $('.index-slider').slick({
            fade: true,
            autoplay: true,
          })
        })
      })
    },
    beforeDestroy () {
      $('.index-slider').slick('unslick')
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
          this.setState({currentCat1: this.cate1List[index].id})
          this.$emit('toProduct')
          this.changeCateOpacity(0)
          TweenLite.to(this.movingCate, 1, {
            top: -window.innerWidth * 0.784 + 'px',
            opacity: 0
          })
        }
      },
      changeCateOpacity (opacity) {
        $('.index .cate').each((i, cate) => {
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

