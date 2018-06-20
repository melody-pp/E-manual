<template>
  <div class="category1">
    <div class="menu1">
      <ul>
        <li>服饰1</li>
        <li>服饰2</li>
        <li>服饰3</li>
        <li>服饰4</li>
        <li>服饰5</li>
        <li>服饰6</li>
        <li>服饰7</li>
        <li>服饰8</li>
      </ul>
    </div>
    <div class="menu2">
      <ul>
        <li @click="toCategory2">上衣</li>
        <li>裤子</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'category1',
    methods: {
      toCategory2 () {
        this.$router.push('/category2')
      }
    }
  }
</script>

<style scoped lang="scss">
  .category1 {
    .menu1 {
      overflow: auto;
      ul {
        width: 140%;
        li {
          float: left;
          background-color: #8BC34A;
          margin: 10px;
        }
      }

    }

  }
</style>
