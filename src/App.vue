<script>
export default {
  data() {
    return {
      count: 1,
      message: 'Ola Mundo',
      firstName: 'Hugo',
      lastName: 'Silva',
      books: [
        'Harry Porter',
        'O Senhor dos Aneia',
        'Veronica decide morrer',
        'Veronica decide morrer',
      ]
    }
  },

  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName
    },
    countBooks() {
      return this.books.length
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
    {{ countBooks }}
    <br>
    {{ message }}
    <br>
    {{ books }}
    <br>
    <p>First Name: {{ firstName }}</p>
    <p>Last Name: {{ lastName }}</p>
    <p>Full Name: {{ fullName }}</p>
    <button @click="incrementCount">Increment Count</button>
  </main>
</template>

<style scoped></style>
