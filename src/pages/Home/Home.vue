<template>
  <div>
    <SearchBar class="searchBar"/>
    <router-view/>
  </div>
</template>

<script>
  import { vuexMixin } from '../../common/mixins'
  import SearchBar from '../../common/components/SearchBar'

  export default {
    name: 'Home',
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
