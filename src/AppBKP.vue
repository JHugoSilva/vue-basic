<script>
import NavBar from './components/NavBar.vue'
import PostTable from './components/PostTable.vue'
import FooterVue from './components/FooterVue.vue';
import ShowImage from './components/ShowImage.vue'
import PostForm from './components/PostForm.vue'

export default {
  components: {
    NavBar,
    PostTable,
    FooterVue,
    ShowImage,
    PostForm
  },
  data() {
    return {
      appTitle: 'COMPONENTS',
      postData: {
        id: '',
        title: '',
        categoryId: '',
        post_content: ''
      },
      categories: [],
      posts: [

      ]
    }
  },
  methods: {
    deletePost(item) {
      console.log('DELETE', item);
      const filteredPost = this.posts.filter(post => post.id !== item.id)
      this.posts = filteredPost
      //========>MESMO RESULTADO
      // this.posts.splice(item, 1)
    },
    postCreate() {
      const data = this.postData
      this.posts.push({
        id: data.id,
        title: data?.title,
        post_content: data?.post_content
      })
      this.postData = {}
      console.log(data);
    },
    fetchDataFromServer() {
      return new Promise((resolve, reject) => {
        resolve([
          {
            id: 1,
            name: 'typescript'
          },
          {
            id: 2,
            name: 'Vue'
          },
          {
            id: 3,
            name: 'Laravel'
          },
          {
            id: 4,
            name: 'MySQL'
          }
        ])
        reject()
      })
    },
  },
  async mounted() {
    const data = await this.fetchDataFromServer()
    this.categories = data;
  }
}

</script>

<template>
  <div class="container">
    <NavBar>
      <template #headerLogo>
        <ShowImage />
      </template>
    </NavBar>

    <PostForm :postData="postData" :categories="categories" @postCreate="postCreate" />
    <PostTable :posts="posts" @delete="deletePost" />
    <FooterVue>
      <template #footerLogo>
        <ShowImage />
      </template>
    </FooterVue>
  </div>
</template>

<style scoped>
.img-tutorial-1 {
  border-radius: 20px;
}

.img-tutorial-2 {
  border-radius: 50px;
}
</style>
