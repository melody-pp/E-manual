<template>
  <div>
    <Cube :text="'测试'"/>
  </div>
</template>

<script>
  import { vuexMixin } from '../../common/mixins'
  import Cube from '../../common/components/Cube'

  export default {
    name: 'Home',
    mixins: [vuexMixin],
    components: {Cube},
    data: () => ({}),
    methods: {}
  }
</script>

<style scoped>

</style>
