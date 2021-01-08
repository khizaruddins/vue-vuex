<template>
  <base-container title="Vuex">
    <h2>Counter</h2>
    <p>{{ counter }}</p>
    <p>multiple of two - {{ multipleOfTwo }}</p>
    <button @click="addOne">Add One</button>
    <button @click="addValue">Add 10</button>
    <button @click="addThreeAfterTwoSec">Add 3 after 2 seconds</button>
  </base-container>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";

export default {
  components: {
    BaseContainer,
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
    multipleOfTwo() {
      return this.$store.getters.multipleOfTwo;
    },
  },
  methods: {
    addOne() {
      this.$store.commit("increment");
    },

    addThreeAfterTwoSec() {
      this.$store.dispatch("autoIncrByThreeAfterTwoSec", { value: 3 });
    },

    addValue() {
      // this.$store.commit("increase", { value: 10 });
      this.$store.commit({
        type: "increase",
        value: 10,
      });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
