<template>
  <div class="cube-container"
       @click="clickHandler"
       :style="{width: `${size}px`,height: `${size}px`}">
    <div class="cube" :style="{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translateZ(-${size/2}px) rotateY(${rotateY}deg)`
      }" @touchstart="touchstart" @touchend="touchend">

      <div class="left" :style="{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translateX(-${size/2}px) rotateY(90deg) rotateZ(180deg) rotateX(180deg)`
      }">
        <img :src="backthumb">
      </div>

      <div class="front" :style="{
        background: bgc,
        width: `${size}px`,
        height: `${size}px`,
        transform: `translateZ(${size/2}px)`
      }">
        <img :src="thumb">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    props: {
      bgc: String,
      thumb: String,
      backthumb: String,
      size: {
        default: 300
      },
    },
    data: () => ({
      lastX: 0,
      rotateY: 0,
    }),
    methods: {
      clickHandler () {
        this.$emit('toDetail')
      },
      touchstart (event) {
        this.lastX = event.changedTouches[0].clientX
      },
      touchend () {
        if (!this.backthumb) {
          return
        }
        const clientX = event.changedTouches[0].clientX
        if (this.lastX - clientX < -20 && this.rotateY === 0) {
          this.rotateY = 90
        }
        if (this.lastX - clientX > 20 && this.rotateY === 90) {
          this.rotateY = 0
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .cube-container {
    perspective: 1000px;
    position: relative;
    display: inline-block;
  }

  .cube {
    position: relative;
    transition: all .5s;
    transform-style: preserve-3d;
    .front {
      img {
        width: 93%;
        margin-top: 1vw;
      }
    }
    > div {
      position: absolute;
      box-sizing: border-box;
      text-align: center;
      img {
        width: 100%;
      }
    }
  }
</style>
