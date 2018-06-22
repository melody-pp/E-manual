<template>
  <div class="product">
    <LevelMenu/>
    <Category v-if="showCategory" @toDetail="toDetail"/>
    <Detail v-if="showDetail"/>
  </div>
</template>

<script>
  import LevelMenu from '../../common/components/LevelMenu'
  import Category from './category/Category'
  import Detail from './details/Details'

  export default {
    name: 'Product',
    components: {LevelMenu, Category, Detail},
    data: () => ({
      showCategory: true,
      showDetail: false
    }),
    methods: {
      toDetail () {
        this.showCategory = false
        this.showDetail = true
      }
    }
  }
</script>

<style scoped>
  .product {
    box-sizing: border-box;
    padding-top: 40px;
    width: 100vw;
    height: 100vh;
  }
</style>
