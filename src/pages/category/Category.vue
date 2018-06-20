<template>
  <div class="">
    <div class="menu-container">
      <ul class="menu1 clearfix" :style="{width: `${catList.length*150}px`}">
        <li v-for="cat1 in catList" @click="setState({currentCat1:cat1.name})">
          {{cat1.name}}
        </li>
      </ul>
    </div>

    <router-view/>
  </div>
</template>

<script>
  import { vuexMixin } from '../../common/mixins'

  export default {
    name: 'category',
    mixins: [vuexMixin],
    data: () => ({}),
    methods: {},
    mounted () {
    }
  }
</script>

<style scoped lang="scss">
  .menu-container {
    overflow-x: auto;
  }

  .menu1 {
    > li {
      float: left;
      padding: 5px;
      height: 30px;
      width: 150px;
      line-height: 30px;
      background: beige;
      text-align: center;
      box-sizing: border-box;
      border: 1px solid #fff;
    }
  }
</style>
