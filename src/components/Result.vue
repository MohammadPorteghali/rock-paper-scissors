<template>
  <div class="result">
    <div class="container">
      <div class="pick userPick">
        <div class="title">YOU PICKED</div>
        <paper class="paper" v-if="$store.state.user === 'paper'" />
        <scissors class="scissors" v-if="$store.state.user === 'scissors'" />
        <rock class="rock" v-if="$store.state.user === 'rock'" />
        <div class="mobile-title">YOU PICKED</div>
      </div>
      <div class="result-container">
        <div class="result-title">
          <span class="result-title" v-if="$store.state.result !== 'DRAW'">YOU</span>
          {{ $store.state.result }}
        </div>
        <button @click="$store.commit('playAgain')">PLAY AGAIN</button>
      </div>
      <div class="pick systemPick">
        <div class="title">THE HOUSE PICKED</div>
        <paper class="paper" v-if="$store.state.system === 'paper'" />
        <scissors class="scissors" v-if="$store.state.system === 'scissors'" />
        <rock class="rock" v-if="$store.state.system === 'rock'" />
        <div class="mobile-title">THE HOUSE PICKED</div>
      </div>
    </div>
    <div class="mobile-result-container">
      <div class="mobile-result-title">
        <span class="mobile-result-title" v-if="$store.state.result !== 'DRAW'">YOU</span>
        {{ $store.state.result }}
      </div>
      <button @click="$store.commit('playAgain')">PLAY AGAIN</button>
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
.result {
  position: relative;

  & .container {
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scale(1.3);
    display: flex;
    width: 50vw;

    @include respond(normal-phone) {
      transform: translateX(-50%) scale(2);
      bottom: -55vw;
    }

    & .pick {
      text-align: center;
      color: white;
      flex: 0.5;

      & .title {
        margin-bottom: 2vw;
        font-weight: 400;
        font-size: 1.4vw;

        @include respond(big-phone) {
          display: none;
        }
      }

      & .mobile-title {
        display: none;

        @include respond(big-phone) {
          display: block;
          color: white;
          font-weight: 700;
          font-size: 2vw;
          margin-top: 2vw;
        }
      }
    }

    & .result-container {
      margin: auto;
      display: flex;
      flex-direction: column;
      text-align: center;

      @include respond(big-phone) {
        display: none;
      }

      & .result-title {
        color: white;
        font-weight: 700;
        font-size: 2.5vw;
      }

      & button {
        margin-top: 10px;
        font-size: 1vw;
        font-weight: 400;
        padding: 0.9vw 3.5vw;
        border-radius: 7px;
        background-color: white;
        color: black;

        &:hover {
          color: red;
        }
      }
    }
  }

  & .mobile-result-container {
    display: none;

    @include respond(big-phone) {
      margin: auto;
      display: block;
      flex-direction: column;
      text-align: center;
      position: absolute;
      bottom: -58vh;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
    }

    & .mobile-result-title {
      color: white;
      font-weight: 700;
      font-size: 40px;
    }

    & button {
      margin-top: 5.5vw;
      font-size: 15px;
      font-weight: 400;
      padding: 3vw 15.5vw;
      border-radius: 7px;
      background-color: white;
      color: black;

      &:hover {
        color: red;
      }
    }
  }
}
</style>