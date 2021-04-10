<template>
  <div class="score-board">
    <div class="box">
      <img src="../assets/images/logo.svg" alt="">
      <div class="score">
        <div class="title">score</div>
        <div class="num">12</div>
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
    margin: 48px auto;
    padding: 18px;
    display: flex;

    
    @include respond(big-phone) {
      width: 73vw;
      margin: 25px auto;
      padding: 13px;
      border-radius: 7px;
    }

    & img {
      margin: 10px 0;
        height: 8.5vw;
      
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
        }
      }

      & .num {
        font-size: 4.7vw;
        font-weight: 700;
        color: $dark-text;

        @include respond(big-phone) {
          font-size: 9vw;
        }
      }
    }
  }
}
</style>