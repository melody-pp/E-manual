<template>
  <div class="container" :style="{
    width: `${size}px`,
    height: `${size}px`,
  }">
    <div class="cube" :style="{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translateZ(-${size/2}px) rotateX(${up*90}deg) rotateY(${right*90}deg)`
      }" @click="clickCube">

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
      up: 0,
      right: 0,
    }),
    methods: {
      clickCube (event) {
        const {isLeft, underL1, underL2} = this.getConditions(event)
        if (isLeft && underL2 && !underL1) {
          this.right--
        } else if ((isLeft && underL1) || (!isLeft && underL2)) {
          this.up++
        } else if ((isLeft && !underL2) || (!isLeft && !underL1)) {
          this.up--
        } else {
          this.right++
        }
      },
      getConditions (event) {
        const {offsetX, offsetY} = event

        return {
          isLeft: 2 * offsetX < this.size,
          underL1: offsetY < offsetX,
          underL2: offsetX < (this.size - offsetY),
        }
      },
    }
  }
</script>

<style scoped lang="scss">
  .container {
    margin: 5px auto;
    perspective: 800px;
    position: relative;
  }

  .cube {
    transition: all 1s;
    position: relative;
    transform-style: preserve-3d;
    > div {
      position: absolute;
      box-sizing: border-box;
      background: antiquewhite;
    }
  }
</style>
