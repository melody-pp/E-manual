<template>
  <div class="search">
    <div class="searchIcon" @click="showSearch">
      <img src="../../asset/index/searchIcon2.png">
    </div>
    <div class="searchBar" ref="searchBar" @click="hideSearch">
      <img class="searchText" src="../../asset/index/SearchText.png">
      <input type="text">
      <img class="searchIcon" src="../../asset/index/searchIcon1.png">
    </div>
  </div>
</template>

<script>
  import { TweenLite } from 'gsap'

  export default {
    name: 'SearchBar',
    methods: {
      showSearch () {
        TweenLite.to(this.$refs.searchBar, 1, {y: '0', ease: Elastic.easeOut.config(1, 0.5)})
      },
      hideSearch () {
        console.log('hideSearch')
        TweenLite.to(this.$refs.searchBar, 1, {y: '-200px'})
      }
    }
  }
</script>

<style scoped lang="scss">
  .search {
    right: 0;
    z-index: 98;
    position: absolute;
    > .searchIcon {
      top: 10px;
      right: 20px;
      width: 20px;
      position: absolute;
      cursor: pointer;
      img {
        width: 100%;
      }
    }
  }

  .searchBar {
    width: 100vw;
    padding: 50px 0;
    background: #373743;
    box-sizing: border-box;
    vertical-align: bottom;
    text-align: center;
    transform: matrix(1, 0, 0, 1, 0, -200);
    .searchText {
      height: 20px;
    }
    .searchIcon {
      height: 16px;
    }
  }

</style>
