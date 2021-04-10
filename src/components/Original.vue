<template>
  <div class="game-board">
    <div class="container">
      <img src="../assets/images/bg-triangle.svg" alt="">
      <paper class="paper" />
      <scissors class="scissors" />
      <rock class="rock" />
    </div>
  </div>
</template>

<script>
import Paper from './Cards/Paper.vue'
import Rock from './Cards/Rock.vue'
import Scissors from './Cards/Scissors.vue'

export default {
  components: { 
    Rock,
    Paper,
    Scissors,
  }
}
</script>

<style lang="scss" scoped>
.game-board {
  position: relative;

  & .container {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    @include respond(big-phone) {
      transform: translateX(-50%) scale(2);
      bottom: -80vw;
    }
  } 

  & img {
    height: 30vw;
  }

  & .paper {
    position: absolute;
    left: -3vw;
    top: -5vw;

    @include respond(big-phone) {
      top: -6vw;
    }
  }

  & .scissors {
    position: absolute;
    left: 23vw;
    top: -5vw;

    @include respond(big-phone) {
      left: 20vw;
      top: -6vw;
    }
  }

  & .rock {
    position: absolute;
    left: 10vw;
    top: 17vw;

    @include respond(big-phone) {
      left: 8vw;
      top: 14vw;
    }
  }
}
</style>