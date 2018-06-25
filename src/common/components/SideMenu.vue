<template>
  <div class="sideMenu">
    <div class="menuIcon" @click="showCate" v-show="!cateVisible">
      <img src="../../asset/index/menuIcon.png">
    </div>

    <div class="side-menu-list">
      <div class="cate menuIcon" @click="hideCate">
        <img src="../../asset/index/menuIcon.png">
      </div>
      <div class="cate" v-for="cat in cate1List" @click="toProduct(cat.id)">
        <img :src="cat.thumbh">
      </div>
    </div>
  </div>
</template>

<script>
  import { vuexMixin } from '../mixins'
  import { TweenMax } from 'gsap'

  export default {
    name: 'SideMenu',
    mixins: [vuexMixin],
    data: () => ({
      cateVisible: false,
    }),
    mounted () {
      this.bus.$on('hideCate', this.hideCate.bind(this))
    },
    methods: {
      showCate () {
        this.cateVisible = true
        TweenMax.set(document.querySelector('.side-menu-list'), {x: 0})
        TweenMax.staggerTo(document.querySelectorAll('.side-menu-list .cate'), .4, {transform: 'rotateY(0deg)'}, .2)
      },
      hideCate () {
        TweenMax.staggerTo(document.querySelectorAll('.side-menu-list .cate'), .4, {transform: 'rotateY(100deg)'}, .2, () => {
          this.cateVisible = false
          TweenMax.set(document.querySelector('.side-menu-list'), {x: -999})
        })
      },
      toProduct (cat1Id) {
        this.setState({currentCat1: cat1Id})

        this.hideCate()
        this.$emit('toProduct')
      }
    }
  }
</script>

<style scoped lang="scss">
  .sideMenu {
    position: absolute;
    z-index: 99;
    height: 10vw;
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
