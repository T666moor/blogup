<template>
  <div id="app">
    <!-- HEADER -->
    <b-container fluid class="header">
      <b-row no-gutters class="justify-content-center">
        <div>BLOG<i class="fas fa-angle-double-up header__icon"></i>UP</div>
      </b-row>
    </b-container>

    <!-- COMPONENTS -->
    <keep-alive>
      <component
        :is="component"
        :posts="posts"
        :pageOfItems="pageOfItems"
        :n="index"
        @change-page="onChangePage"
        @toggle-post="togglePost"
        @add-post="addPost"
        @remove-post="removePost"
        @edit-post="editPost"
        @add-comment="addComment"
        @delete-comment="deleteComment"
      />
    </keep-alive>

    <!-- FOOTER -->
    <Footer/>
  </div>
</template>

<script>
import BlogList from './components/blogList.vue'
import BlogItem from './components/blogItem.vue'
import BlogEdit from './components/blogEdit.vue'
import Footer from './components/footer.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'app',
  data() {
    return {
      posts: [],
      pageOfItems: [],
      component: 'BlogList',
      index: null
    }
  },
  components: {
    BlogList, BlogItem, BlogEdit, Footer
  },
  mounted() {
    if (localStorage.getItem('posts')) {
      try {
        this.posts = JSON.parse(localStorage.getItem('posts'));
      } catch(e) {
        localStorage.removeItem('posts');
      }
    }
  },
  methods: {
    onChangePage(pageOfItems) {
      // UPDATE PAGE OF ITEMS
      this.pageOfItems = pageOfItems;
    },
    addPost(title,descript,content) {
      // ADD A NEW OBJECT (POST) IN THE POSTS
      if (!title||!descript||!content) {
        return;
      }

      this.posts.push({
        id: Math.floor(Math.random() * 1000000),
        title: title,
        descript: descript,
        content: content,
        comments: []
      });

      this.savePosts();
    },
    removePost(n) {
      // DELETE POST FROM POSTS
      let num = this.posts.indexOf(this.posts.find(post => post.id === n));
      this.posts.splice(num, 1);
      this.savePosts();
      this.togglePost(n);
    },
    togglePost(n) {
      // OPEN/CLOSE POST
      this.index = this.posts.indexOf(this.posts.find(post => post.id === n));
      if (this.component === BlogItem) {
        this.component = BlogList;
      } else {
        this.component = BlogItem;
      }
    },
    editPost() {
      // EDIT POST
      if (this.component === BlogItem) {
        this.component = BlogEdit;
      } else {
        this.component = BlogItem;
      }
      this.savePosts();
    },
    addComment(userName,userText) {
      // ADD COMMENT TO THE POST
      if (!userName || !userText) {
        return;
      }

      this.posts[this.index].comments.push({
        userName: userName,
        userText: userText
      });

      this.savePosts();
    },
    deleteComment(n) {
      // DELETE COMMENT
      this.posts[this.index].comments.splice(n, 1);
      this.savePosts();
    },
    savePosts() {
      // SAVE POSTS IN JSON FORMAT
      const parsed = JSON.stringify(this.posts);
      localStorage.setItem('posts', parsed);
    }
  }
}
</script>

<style>
body {
  color: #ddd;
  background: #111;
  font-family: 'Titillium Web', sans-serif;
}
.header {
  background: #222;
  padding: 5px;
  font-family: 'Sulphur Point', sans-serif;
  font-weight: 700;
  font-size: 30px;
  border-bottom: 1px solid #444;
  margin-bottom: 20px;
}
.header__icon {
  color: #f00;
}
.add-post__box {
  background: #222;
  padding: 10px;
  border: 1px solid #444;
  border-radius: 5px;
  margin: 10px;
}
.input {
  width: 100%;
  background: #333;
  color: #ddd;
  border: 1px solid #444;
  border-radius: 5px;
  outline: none;
  padding: 5px 15px;
  transition: 0.3s;
}
.resize-none {
  resize: none;
}
.input-box {
  padding: 10px;
}
.input:hover {
  border: 1px solid #ddd;
  background: #222;
}
.input:focus {
  border: 1px solid #ddd;
  background: #222;
}
.btn_light {
  background: #ddd;
  color: #444;
  font-weight: bold;
  padding: 5px 15px;
  border: none;
  border-radius: 5px;
  transition: 0.3s;
}
.btn_light:hover {
  background: #fff;
}
.btn_light:active {
  background: #111;
}
.btn_light:focus {
  outline: none;
}
.post {
  background: #222;
  padding: 10px;
  border: 1px solid #444;
  border-radius: 5px;
  margin: 5px;
}
.post:hover {
  border: 1px solid #ddd;
}
.post__title {
  font-weight: bold;
  margin: 0;
  padding: 10px;
}
.post__descript {
  margin: 0;
  padding: 10px;
}
.btn-delete {
  padding: 5px 10px;
  margin: 0;
  border: none;
  border-radius: 3px;
  color: #888;
  background: #222;
  font-weight: bold;
  transition: 0.3s;
}
.btn-delete:hover {
  color: #ddd;
  background: #333;
}
.btn-delete:active {
  background: #111;
}
.btn-delete:focus {
  outline: none;
}
.post__comment-length {
  padding: 5px 10px;
  margin: 0;
  color: #888;
  background: #222;
  font-weight: bold;
}
</style>