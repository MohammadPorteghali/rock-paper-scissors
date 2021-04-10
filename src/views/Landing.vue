<template>
  <div>
    <score-board />
    <original v-if="$store.state.result.length == 0" />
    <result v-else />
    <button class="rules-button" @click="showRules = true">RULES</button>
    <rules v-if="showRules" @showRules="showRules = false" :show-rules="showRules" />
  </div>
</template>

<script>
import Original from '../components/Original.vue'
import Result from '../components/Result.vue'
import Rules from '../components/Rules.vue'
import ScoreBoard from '../components/ScoreBoard.vue'

export default {
  components: {
    ScoreBoard,
    Original,
    Result,
    Rules,
  },
  data: () => ({
    showRules: false
  }),
}
</script>

<style lang="scss" scoped>
.rules-button {
  position: absolute;
  right: 3vw;
  bottom: 3vw;
  border: 1px solid #fff;
  padding: 10px 29px 14px;
  color: white;
  border-radius: 7px;
  font-weight: 400;
  font-size: 18px;
  background: none;

  @include respond(big-phone) {
    left: 50%;
    transform: translateX(-50%);
    bottom: 20vw;
  }
}
</style>