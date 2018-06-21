<template>
  <div id="app" ref="$app">
    <!--<div ref="$welcome" class="container welcome-container" @click="hideWelcome">-->
    <!--<Welcome v-if="showWelcome"/>-->
    <!--</div>-->
    <!--<div ref="$index" class="container index-container">-->
    <!--<Index v-if="showIndex" @pullToProduct="pullToProduct"/>-->
    <!--</div>-->
    <LevelMenu/>
  </div>
</template>

<script>
  import './common/lib'
  import { TimelineLite } from 'gsap'
  import { vuexMixin } from './common/mixins'
  import Welcome from './pages/welcome/Welcome'
  import Index from './pages/index/Index'
  import LevelMenu from './common/components/LevelMenu'

  export default {
    name: 'App',
    mixins: [vuexMixin],
    components: {Welcome, Index, LevelMenu},
    data: () => ({
      showWelcome: true,
      showIndex: true,
    }),
    methods: {
      hideWelcome () {
        const vm = this
        const {$app, $welcome} = vm.$refs

        new TimelineLite({
          onComplete () {
            vm.showWelcome = false
            $app.removeChild($welcome)
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

  .welcome-container {
    z-index: 99;
  }

  .index-container {
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
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
    bottom: 10px;
  }
</style>
