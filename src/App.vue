<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import 'normalize.css'

  export default {
    name: 'App'
  }
</script>

<style lang="scss">
  #app {
    text-align: center;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }

  body, ul, li {
    margin: 0;
    padding: 0;
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
</style>
