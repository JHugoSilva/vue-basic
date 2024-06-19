<script>
export default {
    props: ['posts'],
    emits: ['delete'],
    computed: {

    },

    methods: {

    },

}
</script>

<template>
    <main>

        <div class="container mb-3">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">TITLE</th>
                        <th scope="col">CONTENT</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="post in posts" :key="post.id">
                        <th scope="row">{{ post.id }}</th>
                        <td>{{ post.title }}</td>
                        <td>{{ post.post_content }}</td>
                        <td>
                            <button class="btn btn-danger" @click="$emit('delete', post)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </main>
</template>