<template>
  <div class="score-board">
    <div class="box">
      <img src="../assets/images/logo.svg" alt="">
      <div class="score">
        <div class="title">SCORE</div>
        <div class="num">{{ $store.state.score }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.score-board {
  text-align: center;

  & .box {    
    width: 48vw;
    border: 3px solid $header-outline;
    border-radius: 15px;
    margin: 3vw auto 15vh;
    padding: 18px;
    display: flex;

    @include respond(big-phone) {
      margin: 3vw auto 20vw;
    }
    
    @include respond(big-phone) {
      width: 73vw;
      margin: 25px auto;
      padding: 13px;
      border-radius: 7px;
    }

    & img {
      margin: 10px 0;
        height: 7.5vw;
      
      @include respond(big-phone) {
        margin: 7px 0 0;
        height: 14vw;
      }
    }

    & .score {
      padding: 10px 45px;
      text-align: center;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 7px;
      margin-left: auto;

      @include respond(big-phone) {
        padding: 5px 22px;
        border-radius: 5px;
      }

      & .title {
        font-size: 1.5vw;
        font-weight: 400;
        color: $score-text;

        @include respond(big-phone) {
          font-size: 3vw;
          letter-spacing: 1px;
          font-weight: 600;
        }
      }

      & .num {
        font-size: 4.7vw;
        font-weight: 700;
        color: $dark-text;

        @include respond(big-phone) {
          font-size: 9.5vw;
        }
      }
    }
  }
}
</style>