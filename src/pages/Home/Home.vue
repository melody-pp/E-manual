<template>
  <div>
    <!--<SearchBar class="searchBar"/>-->
    <CoverPage/>
    <router-view/>
  </div>
</template>

<script>
  import { vuexMixin } from '../../common/mixins'
  import SearchBar from '../../common/components/SearchBar'
  import CoverPage from '../coverPage/CoverPage'

  export default {
    name: 'Home',
    mixins: [vuexMixin],
    components: {SearchBar, CoverPage},
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
