<template>
  <div>
    <Category1/>
  </div>
</template>

<script>
  import { debounce } from '../../common/utils'
  import { vuexMixin } from '../../common/mixins'
  import AnVueComponent from '../../common/components/AnVueComponent'
  import Category1 from '../Category1/Category1'
  import Category2 from '../Category2/category2'

  export default {
    name: 'Home',
    mixins: [vuexMixin],
    components: {AnVueComponent, Category1, Category2},
    data: () => ({}),
    methods: {}
  }
</script>

<style scoped>

</style>
