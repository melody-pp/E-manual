<template>
  <div class="category">
    <Cate2 v-if="showCate2" @toCate3="toCate3"/>
    <Cate3 v-if="showCate3" @toDetail="toDetail"/>
  </div>
</template>

<script>
  import Cate2 from './Cate2'
  import Cate3 from './Cate3'

  export default {
    name: 'Category',
    components: { Cate2, Cate3},
    data: () => ({
      showCate2: true,
      showCate3: false,
    }),
    methods: {
      toCate3 () {
        this.showCate2 = false
        this.showCate3 = true
      },
      toDetail(){
        console.log('toDetail', 'category.vue')

        this.$emit('toDetail')
      }
    }
  }
</script>

<style scoped>

</style>