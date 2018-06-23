<template>
  <div class="product">
    <LevelMenu/>
    <Cate2 v-if="showCate2" @toCate3="toCate3"/>
    <Cate3 v-if="showCate3" @toDetail="toDetail"/>
    <Detail v-if="showDetail" @detailToCate3="detailToCate3"/>
  </div>
</template>

<script>
  import LevelMenu from '../../common/components/LevelMenu'
  import Detail from './Details'
  import Cate2 from './Cate2'
  import Cate3 from './Cate3'

  export default {
    name: 'Product',
    components: {LevelMenu, Cate2, Cate3, Detail},
    data: () => ({
      showDetail: false,
      showCate2: true,
      showCate3: false,
    }),
    methods: {
      toDetail () {
        this.showCate2 = false
        this.showCate3 = false
        this.showDetail = true
      },
      toCate3 () {
        this.showCate2 = false
        this.showDetail = false

        this.showCate3 = true
      },
      detailToCate3 () {
        this.toCate3()
      }
    }
  }
</script>

<style scoped>
  .product {
    box-sizing: border-box;
    padding-top: 7vh;
    width: 100vw;
    height: 100vh;
  }
</style>
