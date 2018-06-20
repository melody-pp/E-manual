<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
  import { vuexMixin } from '../../common/mixins'

  export default {
    name: 'index',
    mixins: [vuexMixin],
    components: {SearchBar},
    data: () => ({}),
    methods: {}
  }
</script>

<style scoped>
  .searchBar {
    width: 70%;
    margin: 10px auto;
  }
</style>
