<script>
export default {
    data() {
        return {
            appTitle: "Entry point page"
        }
    }
}
</script>
<template>
    <div class="container">
        <ul>
            <li>
                <router-link to="/admin">Dashboard</router-link>
                <router-link to="/user">Users</router-link>
                <router-link to="/setting">Settings</router-link>
            </li>
        </ul>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>