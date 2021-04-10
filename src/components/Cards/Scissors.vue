<template>
  <button class="card" @click="selectCard" :disabled="$store.state.result.length != 0">
    <div class="bg">
      <img src="@/assets/images/icon-scissors.svg" alt="">
    </div>
  </button>
</template>

<script>
export default {
  methods: {
    selectCard() {
      this.$store.commit('pick', 'scissors');
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  background: $scissors;
  width: 15vw;
  height: 15vw;
  border-radius: 50%;
  position: relative;
  box-shadow: inset 0 -5px 3px #ce7516;

  @include respond(big-phone) {
    width: 17vw;
    height: 17vw;
  }

  & .bg {
    background-color: #fff;
    width: 12vw;
    height: 12vw;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: inset 0px 4px 3px 0px #b9c2da;

    @include respond(big-phone) {
      width: 14vw;
      height: 14vw;
    }

    & img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      height: 5vw;
    }
  }
}
</style>