<template>
  <div class="details">
    <span @click="toLocation=!toLocation" class="locationIcon">定位</span>
    <div @click="toLocation=!toLocation" v-show="toLocation" class="model">
      <img src="../../asset/location.png" class="center">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Details',
    data () {
      return {
        toLocation: false
      }
    },
    methods () {

    }
  }
</script>

<style scoped lang="scss">
  .model {
    img {
      width: 60vw;
    }
  }
</style>
