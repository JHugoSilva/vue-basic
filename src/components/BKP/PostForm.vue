<script>
export default {
    props: ['postData', 'categories'],
    emits: ['postCreate']
}
</script>
<template>
    <div class="row">
        <div class="col-md-4">
            {{ postData }}
            <form @submit.prevent="$emit('postCreate')">
                <div class="form-group">
                    <label for="">Post ID</label>
                    <input type="text" v-model="postData.id" name="" id="" class="form-control">
                </div>

                <div class="form-group">
                    <label for="">Post Title</label>
                    <input type="text" v-model="postData.title" name="" id="" class="form-control">
                </div>

                <div class="form-group">
                    <label for="">Post Content</label>
                    <textarea name="" id="" v-model="postData.post_content" class="form-control"></textarea>
                </div>

                <div class="form-group">
                    <label for="">Post Category</label>
                    <select name="" id="" class="form-control" v-model="postData.categories">
                        <option value="">Select Categories</option>
                        <option v-for="category in categories" :key="category.id" :value="category.id">
                            {{ category.name }}
                        </option>
                    </select>
                </div>
                <div class="form-group mt-2">
                    <button type="submit" class="btn btn-primary">Created Post</button>
                </div>
            </form>
        </div>
    </div>
</template>