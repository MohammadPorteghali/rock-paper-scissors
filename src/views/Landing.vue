<template>
  <div>
    <score-board />
    <original v-if="$store.state.result.length == 0" />
    <result v-else />
  </div>
</template>

<script>
import Original from '../components/Original.vue'
import Result from '../components/Result.vue'
import ScoreBoard from '../components/ScoreBoard.vue'

export default {
  components: {
    ScoreBoard,
    Original,
    Result,
  } 
}
</script>