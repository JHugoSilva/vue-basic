<script>
import UserList from '@/components/UserList.vue'
import { useStore } from '@/store/useStore'
import { mapState, mapActions } from 'pinia';
export default {
    components: {
        UserList
    },
    data() {
        return {
            firstName: 'Joao',
            lastName: 'Silva'
        }
    },
    computed: {
        ...mapState(useStore, ['users'])
    },
    methods: {
        ...mapActions(useStore, ['increments', 'getUsers', 'getUser']),
        async seeUserDetail(userId) {
            await this.getUser(userId)
            this.$router.push('/user/' + userId)
        }
    },
    async mounted() {
        await this.getUsers()
    }
}
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-4">
                <UserList :users="users" @seeUserDetail="seeUserDetail" />
            </div>
            <div class="col-md-5">
                <button @click="getUsers">Click</button>
            </div>
        </div>
        <!-- <h1>{{ count }} - {{ name }}</h1> <br> <br>
        <p>{{ users }}</p>
        <button @click="increments">Incremente</button>
        <button @click="addUsers">AddUser</button> -->
    </div>
</template>