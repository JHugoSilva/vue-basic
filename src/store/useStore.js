import { defineStore } from 'pinia'

export const useStore = defineStore('useStore', {
  state: () => ({
    count: 0,
    name: 'Maria',
    users: [],
    user: {}
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increments() {
      this.count++
    },
    addUsers() {
      this.users.push({
        name: 'Hugo',
        email: 'h@email.com'
      })
    },
    async getUsers() {
      const response = await fetch('http://localhost:3000/users', {
        'Content-Type': 'application/json',
        method: 'GET'
      })

      const data = await response.json()
      this.users = data
    },
    async getUser(id) {
      const response = await fetch(`http://localhost:3000/users?id=${id}`, {
        'Content-Type': 'application/json',
        method: 'GET'
      })

      const data = await response.json()
      if (data.length > 0) {
        this.user = data[0]
      }
    }
  }
})
