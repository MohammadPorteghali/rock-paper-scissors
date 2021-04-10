<template>
  <div>
    <score-board />
    <original />
  </div>
</template>

<script>
import Original from '../components/Original.vue'
import ScoreBoard from '../components/ScoreBoard.vue'

export default {
  components: {
    ScoreBoard,
    Original,
  } 
}
</script>