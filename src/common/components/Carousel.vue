<template>
  <div class="siema">
    <div class="slide">Hi, I'm slide 1</div>
    <div class="slide">Hi, I'm slide 2</div>
    <div class="slide">Hi, I'm slide 3</div>
    <div class="slide">Hi, I'm slide 4</div>
  </div>
</template>

<script>
  import Siema from 'siema'

  export default {
    name: 'Carousel',
    props: {},
    mounted () {
      new Siema({
        selector: '.siema',
        duration: 200,
        easing: 'ease-out',
        perPage: 1,
        startIndex: 0,
        draggable: true,
        multipleDrag: true,
        threshold: 20,
        loop: true,
        rtl: false,
        onInit: () => {},
        onChange: () => {},
      })
    }
  }
</script>

<style scoped lang="scss">
  .siema {
    margin: 20px;
  }

  .slide {
    height: 150px;
    line-height: 100px;
    text-align: center;
    background: aquamarine;
  }
</style>
