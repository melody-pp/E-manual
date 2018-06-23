<template>
  <div class="cate3Box" :style="{'margin-left': 4*cateMargin+'px','margin-right': 3*cateMargin+'px'}" @click="toDetail">
    <img src="../../asset/cate3/bg.png" class="bgPic">
    <Card v-for="(cate3,index) in cate3List" :key="index"
          v-bind="cate3" :size="cateSize"
          :style="{'margin-right': cateMargin+'px'}"
          @click="toDetail"
    />
  </div>
</template>

<script>
  import Card from '../../common/components/Card'

  export default {
    name: 'Cate3',
    components: {Card},
    data: () => ({
      cateSize: 0.3 * window.innerWidth,
      cateMargin: window.innerWidth * 0.01,
      cate3List: [
        {
          textImg: require('../../asset/cate3/01.png'),
          itemImg: require('../../asset/cate3/10.png'),
          bgc: 'rgb(209,192,165)'
        },
        {
          textImg: require('../../asset/cate3/02.png'),
          itemImg: require('../../asset/cate3/11.png'),
          bgc: 'rgb(166,147,124)'
        },
        {
          textImg: '',
          itemImg: '',
          bgc: 'rgb(126,107,90)'
        }, {
          textImg: require('../../asset/cate3/03.png'),
          itemImg: require('../../asset/cate3/12.png'),
          bgc: 'rgb(74,58,33)'
        }, {
          textImg: require('../../asset/cate3/04.png'),
          itemImg: require('../../asset/cate3/13.png'),
          bgc: 'rgb(54,46,43)'
        }, {
          textImg: require('../../asset/cate3/05.png'),
          itemImg: require('../../asset/cate3/14.png'),
          bgc: 'rgb(207,169,114)'
        }, {
          textImg: '',
          itemImg: '',
          bgc: 'rgb(178,136,80)'
        }, {
          textImg: require('../../asset/cate3/06.png'),
          itemImg: require('../../asset/cate3/15.png'),
          bgc: 'rgb(153,108,51)'
        }, {
          textImg: require('../../asset/cate3/07.png'),
          itemImg: require('../../asset/cate3/16.png'),
          bgc: 'rgb(129,81,28)'
        }, {
          textImg: require('../../asset/cate3/08.png'),
          itemImg: require('../../asset/cate3/17.png'),
          bgc: 'rgb(166,147,124)'
        }, {
          textImg: require('../../asset/cate3/09.png'),
          itemImg: require('../../asset/cate3/18.png'),
          bgc: 'rgb(207,169,114)'
        }, {
          textImg: '',
          itemImg: '',
          bgc: 'rgb(209,192,165)'
        },
      ]
    }),
    methods: {
      toDetail (cate3) {
        this.$emit('toDetail', cate3)
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
