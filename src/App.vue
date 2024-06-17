<script>
export default {
  data() {
    return {
      count: 1,
      message: 'Ola Mundo'
    }
  },

  methods: {
    incrementCount() {
      this.count++
      this.changeMessage()
    },
    changeMessage() {
      this.message = 'Estudando VueJS do basico'
    }
  },

  // mounted() {
  //   // console.log(this.count);
  //   // this.count = 2
  // }
}
</script>

<template>
  <main>
    <h2 align="center">
      {{ count }}
    </h2>
    <br>
    {{ message }}
    <br>
    <button @click="incrementCount">Increment Count</button>
  </main>
</template>

<style scoped></style>
