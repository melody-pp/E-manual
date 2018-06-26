<template>
  <div class="cate3Box" :style="{'margin-left': 4*cateMargin+'px','margin-right': 3*cateMargin+'px'}">
    <img src="../../asset/cate3/bg.png" class="bgPic">
    <Card v-if="showCard"
          v-for="cate3 in cate3List"
          v-bind="cate3"
          :key="cate3.id"
          :size="cateSize"
          :style="{'margin-right': cateMargin+'px'}"
          @click="toDetail(cate3.id)"
    />
  </div>
</template>

<script>
  import Card from '../../common/components/Card'
  import { vuexMixin } from '../../common/mixins'

  export default {
    name: 'Cate3',
    mixins: [vuexMixin],
    components: {Card},
    data: () => ({
      showCard: false,
      cateSize: 0.3 * window.innerWidth,
      cateMargin: window.innerWidth * 0.01,
      cate3List: [
        {bgc: 'rgb(209,192,165)'},
        {bgc: 'rgb(166,147,124)'},
        {empty: true, bgc: 'rgb(126,107,90)'},
        {bgc: 'rgb(74,58,33)'},
        {bgc: 'rgb(54,46,43)'},
        {bgc: 'rgb(207,169,114)'},
        {empty: true, bgc: 'rgb(178,136,80)'},
        {bgc: 'rgb(153,108,51)'},
        {bgc: 'rgb(129,81,28)'},
        {bgc: 'rgb(166,147,124)'},
        {bgc: 'rgb(207,169,114)'},
        {empty: true, bgc: 'rgb(209,192,165)'},
      ]
    }),
    mounted () {
      this.axios.get('/yingfei/index.php/index/index/threecategory', {params: {tcatid: this.currentCat2}}).then(res => {
        let index = 0
        this.cate3List.forEach(cate3 => {
          if (!cate3.empty) {
            Object.assign(cate3, res.data[index++])
          }
        })
        this.showCard = true
      })
    },
    methods: {
      toDetail (cate3Id) {
        this.setState({lastState: 'cate3', currentCat3: cate3Id})
        this.$emit('toDetail')
      }
    }
  }
</script>

<style scoped lang="scss">
  .cate3Box {
    margin-top: 8vw;

    .bgPic {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
    }

  }

</style>
