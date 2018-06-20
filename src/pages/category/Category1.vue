<template>
  <div>
    <Carousel list="carouselList"/>

    <ul class="menu2 clearfix">
      <li v-for="cat2 in cat2List" @click="toCategory2(cat2)">
        {{cat2.name}}
      </li>
    </ul>
  </div>
</template>

<script>
  import { vuexMixin } from '../../common/mixins'
  import Carousel from '../../common/components/Carousel'

  export default {
    name: 'category1',
    mixins: [vuexMixin],
    components: {Carousel},
    methods: {
      toCategory2 (cat2) {
       this.setState({currentCat2: cat2.name})
        this.$router.push('/category2')
      }
    }
  }
</script>

<style scoped lang="scss">
  .menu2 {
    margin: 20px;
    > li {
      float: left;
      width: 31%;
      margin: 1%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      background: cadetblue;
    }
  }
</style>
