<script>

export default {
    props: ['users'],

}
</script>
<template>
    <div class="row">
        <div class="col-md-6" v-for="user in users" :key="user.id">
            <div class="card">
                <div class="card-header">Name: {{ user.name }}</div>
                <div class="card-body">
                    Email: <a :href="'mailto:' + user.email"></a> {{ user.email }}<br>
                    Telephone: {{ user.phone }}
                </div>
                <div class="card-footer">
                    <button class="btn btn-sm btn-outline-primary"
                        @click="$emit('seeUserDetail', user?.id)">Details</button>
                </div>
            </div>
            <div style="background-color: antiquewhite;" v-if="users.length === 0 ? true : false">Not Data Found</div>
        </div>
    </div>
</template>