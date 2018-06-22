<template>
  <div class="sideMenu">
    <div class="menuIcon" @click="showCate" v-show="!cateVisible">
      <img src="../../asset/index/menuIcon.png">
    </div>

    <div class="side-menu-list">
      <div class="cate menuIcon" @click="hideCate">
        <img src="../../asset/index/menuIcon.png">
      </div>
      <div class="cate" v-for="cat in cat1List" @click="toProduct">
        <img :src="cat.textImg">
      </div>
    </div>
  </div>
</template>

<script>
  import { TweenMax } from 'gsap'

  export default {
    name: 'SideMenu',
    data: () => ({
      cateVisible: false,
      cat1List: [
        {textImg: require('../../asset/index/slide01.png')},
        {textImg: require('../../asset/index/slide02.png')},
        {textImg: require('../../asset/index/slide03.png')},
        {textImg: require('../../asset/index/slide04.png')},
        {textImg: require('../../asset/index/slide05.png')},
        {textImg: require('../../asset/index/slide06.png')},
        {textImg: require('../../asset/index/slide07.png')},
        {textImg: require('../../asset/index/slide08.png')},
      ]
    }),
    methods: {
      showCate () {
        this.cateVisible = true
        TweenMax.staggerTo(document.querySelectorAll('.side-menu-list .cate'), .5, {transform: 'rotateY(0deg)'}, .2)
      },
      hideCate () {
        TweenMax.staggerTo(document.querySelectorAll('.side-menu-list .cate'), .5, {
          transform: 'rotateY(100deg)',
          onComplete: () => this.cateVisible = false
        }, .2)
      },
      toProduct () {
        this.hideCate()
        this.$emit('clickToProduct')
      }
    }
  }
</script>

<style scoped lang="scss">
  .sideMenu {
    position: absolute;
    z-index: 99;
    > .menuIcon {
      top: 10px;
      left: 20px;
      width: 20px;
      z-index: 2;
      position: absolute;
      cursor: pointer;
      img {
        width: 100%;
      }
    }
  }

  .side-menu-list {
    top: 0;
    left: 0;
    position: absolute;
    perspective: 400px;
  }

  .cate {
    width: 50px;
    padding: 10px 20px;
    transform-origin: left;
    background: rgb(54, 46, 43);
    transform: rotateY(100deg);

    &.menuIcon {
      padding: 10px 20px 30px;
      img {
        width: 20px;
      }
    }
    img {
      width: 100%;
    }
  }
</style>
