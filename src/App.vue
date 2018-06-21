<template>
  <div id="app">
    <div ref="welcome" class="container welcome-container" @click="hideWelcome">
      <Welcome/>
    </div>
  </div>
</template>

<script>
  import './common/lib'
  import { TimelineLite } from 'gsap'
  import { vuexMixin } from './common/mixins'
  import Welcome from './pages/welcome/Welcome'

  export default {
    name: 'App',
    mixins: [vuexMixin],
    components: {Welcome},
    methods: {
      hideWelcome () {
        const $welcome = this.$refs.welcome
        const tl = new TimelineLite()
        tl.set($welcome, {'border-bottom-right-radius': '1000px', width: '100vh'})
        tl.to($welcome, 2, {'border-bottom-right-radius': '1px', width: '1px', height: '1px'})
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
