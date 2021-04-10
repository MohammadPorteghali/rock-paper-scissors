<template>
  <div class="rules">
    <div class="container">
      <div class="header">
        <h3>RULES</h3>
        <button class="close-button" @click="$emit('showRules')">
          <img class="close-image" src="@/assets/images/icon-times.svg" alt="">
        </button>
      </div>
      <img class="rules-image" src="@/assets/images/image-rules.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.rules {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #0000007a;
  z-index: 2;

  & .container {
    position: fixed;
    width: 30vw;
    height: 30vw;
    background-color: white;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 2vw;
    border-radius: 10px;
    z-index: 3;

    @include respond(big-phone) {
      position: fixed;
      width: 100%;
      height: 100%;
      border-radius: 0;
      z-index: 3;
    }

    & .header {
      display: flex;

      & h3 {
        font-size: 2vw;
        margin: 0 0 10px;
        color: $dark-text;

        @include respond(big-phone) {
          font-size: 7vw;
          margin: 12vh auto 0;
        }
      }

      & .close-button {
        margin-left: auto;
        background-color: transparent;

        @include respond(big-phone) {
          position: absolute;
          left: 50%;
          bottom: 12vh;
          transform: translateX(-50%);
          height: 7vw;
        }

        & .close-image {
          height: 2vw;

          @include respond(big-phone) {
            height: 7.5vw;
          }
        }
      }
    }

    & .rules-image {
      margin: 4vw;
      height: 20vw;

      @include respond(big-phone) {
        position: absolute;
        height: 75vw;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        margin: 0;
      }
    }
  }
}
</style>