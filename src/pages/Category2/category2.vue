<template>
  <div class="category2">
    <ul class="menu3">
      <li v-for="(menu,index) in menu3" :key="index">{{menu}}</li>
    </ul>
    <ul class="productList">
      <li v-for="(perProduct,index) in productList" :key="index">{{perProduct}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'category2',
    data () {
      return {
        menu3: ['夹克', '羽绒', '冲锋衣', '棒球服', '卫衣', 'T恤', 'POLO衫', '红牛战队', '非凡搭档'],
        productList: ['夹克', '羽绒', '冲锋衣', '棒球服', '卫衣', 'T恤', 'POLO衫', '红牛战队', '非凡搭档']
      }
    }
  }
</script>

<style scoped lang="scss">
  .category2 {
    .menu3 {
      li {
        float: left;
        width: 33.33%;
        padding: 7vw 0;
      }
      li:nth-child(odd) {
        background-color: #8BC34A;
      }
    }
  
  }
</style>
