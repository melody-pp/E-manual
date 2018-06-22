<template>
  <div id="app" ref="$app">

    <div ref="$index" v-if="showIndex" class="container index-container">
      <Index @pullToProduct="pullToProduct"/>
    </div>
    <div ref="$product" v-if="showProduct" class="container product-container">
      <Product/>
    </div>
    <div ref="$welcome" v-if="showWelcome" class="container welcome-container" @click="hideWelcome">
      <Welcome/>
    </div>
  </div>
</template>

<script>
  import './common/lib'
  import { TimelineLite, TweenLite } from 'gsap'
  import { vuexMixin } from './common/mixins'
  import Welcome from './pages/welcome/Welcome'
  import Index from './pages/index/Index'
  import Product from './pages/product/Product'

  export default {
    name: 'App',
    mixins: [vuexMixin],
    components: {Welcome, Index, Product},
    data: () => ({
      showWelcome: true,
      showIndex: true,
      showProduct: false,
    }),
    methods: {
      hideWelcome () {
        const vm = this
        const {$welcome} = vm.$refs

        new TimelineLite({
          onComplete () {
            vm.showWelcome = false
          }
        }).set($welcome, {
          width: '100vh',
          'border-bottom-right-radius': '1000px',
        }).to($welcome, 1, {
          width: '1px',
          height: '1px',
          'border-bottom-right-radius': '1px',
        })
      },
      pullToProduct () {
        const vm = this
        vm.showProduct = true
        setTimeout(() => {
          new TimelineLite({
            onComplete () {
              vm.showIndex = false
            }
          }).to(this.$refs.$product, 1, {
            width: '100vw',
            height: '100vh',
            'border-top-right-radius': '0',
          })
        })
      }
    }
  }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }

  #app {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }

  .clearfix {
    overflow: hidden;
    _zoom: 1;
    &:after {
      content: ".";
      display: block;
      height: 0;
      clear: both;
      visibility: hidden
    }
  }

  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  ul, li {
    list-style: none;
  }

  .container {
    overflow: hidden;
    position: absolute;
  }

  .index-container {
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }

  .product-container {
    width: 1px;
    height: 1px;
    border-top-right-radius: 9999px;
    left: 0;
    bottom: 0;
  }

  .model {
    background-color: rgba(0, 0, 0, 0.6);
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
  }

  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .levelCenter {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .slick-dotted.slick-slider {
    font-size: 0;
    margin-bottom: 0;
  }

  .slick-dots {
    bottom: 15px;
  }

  .slick-dots li button:before {
    opacity: 1;
    color: #dcdcdc;
  }

  .slick-dots li.slick-active button:before {
    opacity: 1;
    color: #7d1820;
  }
</style>
