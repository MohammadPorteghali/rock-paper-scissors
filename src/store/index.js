import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    score: 0,
    user: '',
    system: '',
    result: '',
  },
  mutations: {
    pick(state, data) {
      this.state.user = data;
      let user = data;
      let items = ['rock', 'scissors', 'paper'];
      let system = items[Math.floor(Math.random()*items.length)];
      this.state.system = system;
      this.state.result = true;
      if (user === 'paper') {
        if (system === 'paper') {
          this.state.result = 'DRAW'
        }
        else if(system === 'scissors') {
          this.state.score -= 1
          this.state.result = 'LOSE'
        }
        else if(system === 'rock') {
          this.state.score += 1
          this.state.result = 'WIN'
        }
      }
      else if (user === 'rock') {
        if (system === 'rock') {
          this.state.result = 'DRAW'
        }
        else if(system === 'paper') {
          this.state.score -= 1
          this.state.result = 'LOSE'
        }
        else if(system === 'scissors') {
          this.state.score += 1
          this.state.result = 'WIN'
        }
      }
      else if (user === 'scissors') {
        if (system === 'scissors') {
          this.state.result = 'DRAW'
        }
        else if(system === 'rock') {
          this.state.score -= 1
          this.state.result = 'LOSE'
        }
        else if(system === 'paper') {
          this.state.score += 1
          this.state.result = 'WIN'
        }
      }
    },
    playAgain() {
      this.state.user = '';
      this.state.system = '';
      this.state.result = '';
    }
  },
  actions: {
  },
  modules: {
  }
})
