<script>
import { useStore } from '@/store/useStore'
import { mapActions, mapState } from 'pinia'
export default {
    computed: {
        ...mapState(useStore, ['user'])
    },
    methods: {
        ...mapActions(useStore, ['getUser'])
    },
    async mounted() {
        const userId = this.$route.params.userId;
        await this.getUser(userId)
    }
}

</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">User Details</div>
                    <div class="card-body">
                        <p>UserName: {{ user.name }}</p>
                        <p>Email: <a :href="'mailto:' + user.email">{{ user.email }}</a> </p>
                        <p>Address: {{ user.address?.street }}</p>
                        <p>WebSite: {{ user.address?.website }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-2"></div>
        </div>
    </div>
</template>