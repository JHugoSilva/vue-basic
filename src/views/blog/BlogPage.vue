<script>
import NavBarVue from '@/components/NavBar.vue'

export default {
    components: {
        NavBarVue
    },
    data() {
        return {
            appTitle: "Entry Point Page"
        }
    }
}
</script>
<template>
    <div class="container">
        <NavBarVue></NavBarVue>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>