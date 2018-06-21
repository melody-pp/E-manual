<template>
  <div id="app" ref="$app">
    <div ref="$welcome" class="container welcome-container" @click="hideWelcome">
      <Welcome v-if="showWelcome"/>
    </div>
    <Cate2 v-if="!showWelcome"/>
  </div>
</template>

<script>
  import './common/lib'
  import { TimelineLite } from 'gsap'
  import { vuexMixin } from './common/mixins'
  import Welcome from './pages/welcome/Welcome'
  import Cate2 from './pages/product/category/Cate2'

  export default {
    name: 'App',
    mixins: [vuexMixin],
    components: {Welcome, Cate2},
    data: () => ({
      showWelcome: true,
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
</style>
