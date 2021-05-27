<template>
  <div>
    <button @click="decreat">减3</button>
    <button @click="addOne">加1</button>
    <p>HelloWorld component</p>
    <p>当前count值为：{{ this.$store.state.count }}</p>
  </div>
</template>

<script>
export default {
  methods: {
    addOne() {
      this.$store.commit("increment");
    },
    decreat() {
      this.$store.commit("decrement", { num: 3 });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
