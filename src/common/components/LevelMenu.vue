<template>
  <div class="levelMenu">
    <div class="slider">
      <div v-for="(cat,index) in cat1List" :style="{
      background: cat.bgc,
      top: index * 40 + 'px'}">
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
      $('.center').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      })
    },
  }
</script>

<style scoped lang="scss">
  .slider {
    > div {
      width: 19.2vw;
      display: inline-block;
      height: 14vw;
      line-height: 14vw;
      text-align: center;
      > img {
        width: 19.2vw;
        vertical-align: middle;
      }
    }
  }
</style>
