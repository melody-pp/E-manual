<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import 'bulma'
  import 'normalize.css'

  export default {
    name: 'App'
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
