<template>
  <div class="category2">
    <div class="menu3">
      <Cube
        v-for="cat3 in cat3List"
        :text="cat3"
        :size="size"
        @click="toDetails(cat3)"
      />
    </div>
  </div>
</template>

<script>
  import Cube from '../../common/components/Cube'
  import { vuexMixin } from '../../common/mixins'

  export default {
    name: 'category2',
    mixins: [vuexMixin],
    components: {Cube},
    data: () => ({
      size: (window.innerWidth - 100) / 3
    }),
    methods: {
      toDetails () {
        console.log('toDetails')
        this.$router.push('/details')
      }
    }
  }
</script>

<style scoped lang="scss">
  .menu3 {
    margin: 20px;
    > div {
      margin: 5px;
    }
  }
</style>
