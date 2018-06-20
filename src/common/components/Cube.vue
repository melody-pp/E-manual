<template>
  <div class="container" :style="{
    width: `${size}px`,
    height: `${size}px`,
  }">
    <div class="cube" :class={animate} :style="{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translateZ(-${size/2}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      }" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">

      <div class="left" :style="{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translateX(-${size/2}px) rotateY(90deg) rotateZ(180deg) rotateX(180deg)`
      }">
        左
      </div>

      <div class="right" :style="{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translateX(${size/2}px) rotateY(90deg)`
      }">
        右
      </div>

      <div class="back" :style="{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translateZ(-${size/2}px) rotateX(180deg)`
      }">
        后
      </div>

      <div class="top" :style="{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translateY(-${size/2}px) rotateX(90deg)`
      }">
        上
      </div>

      <div class="bottom" :style="{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translateY(${size/2}px) rotateX(270deg)`
      }">
        下
      </div>

      <div class="front" :style="{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translateZ(${size/2}px)`
      }">
        {{text}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Cube',
    props: {
      size: {
        default: 300
      },
      text: String
    },
    data: () => ({
      lastX: 0,
      lastY: 0,
      rotateX: 0,
      rotateY: 0,
      animate: false,
    }),
    methods: {
      touchstart (event) {
        const {clientX, clientY} = event.changedTouches[0]
        this.lastX = clientX
        this.lastY = clientY
        this.animate = false
      },
      touchmove (event) {
        const {clientX, clientY} = event.changedTouches[0]
        this.rotateY += clientX - this.lastX
        this.rotateX -= clientY - this.lastY

        this.lastX = clientX
        this.lastY = clientY
      },
      touchend () {
        this.animate = true
        this.rotateX = Math.round(this.rotateX / 90) * 90
        this.rotateY = Math.round(this.rotateY / 90) * 90
      }
    }
  }
</script>

<style scoped lang="scss">
  .container {
    margin: 5px auto;
    perspective: 800px;
    position: relative;
  }

  .animate {
    transition: all .5s;
  }

  .cube {
    position: relative;
    transform-style: preserve-3d;
    > div {
      position: absolute;
      box-sizing: border-box;
      background: antiquewhite;
    }
  }
</style>
