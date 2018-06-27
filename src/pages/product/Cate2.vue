<template>
  <div class="cate2">
    <div class="cate2-slider" :style="{margin: `${sliderMg}px 0`}">
      <div v-for="(item, index) in hotList" :key="index" @click="toDetail(hotList.scatid)">
        <img :src="item.sowing">
      </div>
    </div>

    <div class="free">
      <img v-for="(cate2,index) in cate2List"
           :key="cate2.id"
           :src="cate2.thumb"
           :class="[`free0${index+1}`]"
           @click="clickHandler(cate2.id)">
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import { vuexMixin } from '../../common/mixins'

  export default {
    name: 'Cate2',
    mixins: [vuexMixin],
    data: () => ({
      cate2List: [],
      sliderMg: (window.innerHeight - (window.innerWidth * 16 / 9)) / 4
    }),
    mounted () {
      this.axios.get('/yingfei/index.php/index/index/twocategory', {params: {ocatid: this.currentCat1}}).then(res => {
        this.cate2List = res.data
        setTimeout(function () {
          $('.cate2-slider').slick({dots: true, autoplay: true})
        })
      })
    },
    beforeDestroy () {
      $('.cate2-slider').slick('unslick')
    },
    methods: {
      toDetail (itemScatid) {
        this.setState({lastState: 'hot', currentCat3: itemScatid})
        this.$emit('toDetail')
      },
      clickHandler (cate2Id) {
        this.setState({currentCat2: cate2Id})
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
    position: absolute;
    top: 57vh;
    left: 0;
    img {
      float: left;
    }
    .free01 {
      width: 46vw;
      height: 24.3vh;
    }
    .free02 {
      width: 27vw;
      height: 12.15vh;
    }
    .free03 {
      width: 27vw;
      height: 12.15vh;
    }
    .free04 {
      width: 54vw;
      height: 12.15vh;
    }
    .free05 {
      width: 59vw;
      height: 19vh;
    }
    .free06 {
      width: 41vw;
      height: 19vh;
    }
  }
</style>
