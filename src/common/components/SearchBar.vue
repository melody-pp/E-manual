<template>
  <div>
    <!--<img class="logo fl"/>-->
    <!--<img class="searchIcon fr">-->
    <div class="clearfix">
      <span class="logo fl">logo</span>
      <span @click="showInput=!showInput" class="searchIcon fr">search</span>
    </div>
    <div><input v-show="showInput" type="text"></div>
  </div>
</template>

<script>
  export default {
    name: 'searchBar',
    data () {
      return {
        showInput: false
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
