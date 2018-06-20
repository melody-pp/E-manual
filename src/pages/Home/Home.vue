<template>
  <div>
    <Cube :text="'测试'"/>
    <Carousel/>
  </div>
</template>

<script>
  import { vuexMixin } from '../../common/mixins'
  import Cube from '../../common/components/Cube'
  import Carousel from '../../common/components/Carousel'

  export default {
    name: 'Home',
    mixins: [vuexMixin],
    components: {Cube, Carousel},
    data: () => ({}),
    methods: {}
  }
</script>

<style scoped>

</style>
