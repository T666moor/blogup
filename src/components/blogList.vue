<template>
  <b-container>
    <!-- FORM TO ADD A POST -->
    <b-row class="justify-content-center">
      <b-col xl="8" lg="9" md="10" cols="12" class="add-post__box" no-gutters>
        <div class="input-box">
          <input type="text" v-model="postTitle" class="input" placeholder="Title...">
        </div>
        <div class="input-box">
          <textarea rows="2" v-model="postDescript" class="input resize-none" placeholder="Description..."></textarea>
        </div>
        <div class="input-box">
          <textarea rows="6"  v-model="postContent" class="input" placeholder="Content..."></textarea>
        </div>
        <div class="input-box"><button class="btn_light" @click="addPost(postTitle,postDescript,postContent)">POST</button></div>
      </b-col>
    </b-row>

    <!-- SEARCH POSTS -->
    <b-row class="justify-content-center">
      <b-col xl="8" lg="9" md="10" cols="12" class="add-post__box" no-gutters>
        <div class="input-box">
          <input class="input" type="search" v-model="search" placeholder="Search...">
        </div>
      </b-col>
    </b-row>

    <!-- POSTS LIST -->
    <b-row class="justify-content-center">
      <b-col xl="8" lg="9" md="10" cols="12" class="post" v-for="post in filteredList" :key="post.id" no-gutters @click="togglePost(post.id)">
        <h4 class="post__title">{{ post.title }}</h4>
        <div class="post__descript">{{ post.descript }}</div>
        <b-row class="justify-content-between" no-gutters>
          <div class="post__comment-length"><i class="fas fa-comment-alt"></i> {{ post.comments.length }} Comments</div>
          <button class="btn-delete" @click="removePost(post.id)"><i class="fas fa-trash-alt"></i> DELETE</button>
        </b-row>
      </b-col>
    </b-row>

    <!-- PAGINATION -->
    <div>
      <jw-pagination :items="posts" :disableDefaultStyles="true" :labels="customLabels" @changePage="onChangePage"></jw-pagination>
    </div>
  </b-container>
</template>

<script>
// Pagination: https://jasonwatmore.com/post/2019/08/21/vue-js-simple-pagination-example

const customLabels = {
    first: '<<',
    last: '>>',
    previous: '<',
    next: '>'
};

export default {
  data() {
    return {
      search: '',
      customLabels,
      postTitle: null,
      postDescript: null,
      postContent: null
    }
  },
  props: ['posts','pageOfItems'],
  methods: {
    onChangePage(pageOfItems) {
      // UPDATE PAGE OF ITEMS
      this.$emit("change-page", pageOfItems);
    },
    addPost(title,descript,content) {
      // ADD A NEW OBJECT (POST) IN THE POSTS
      this.$emit("add-post", title,descript,content);
      this.postTitle = '';
      this.postDescript = '';
      this.postContent = '';
    },
    removePost(n) {
      // DELETE POST FROM POSTS
      this.$emit("remove-post", n);
    },
    togglePost(n) {
      // OPEN/CLOSE POST
      this.$emit("toggle-post", n);
    }
  },
  computed: {
    filteredList() {
      // FILTER POSTS
      return this.pageOfItems.filter(post => {
        return post.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>

<style>
/*
.pagination - Pagination component container (ul element)
.pagination li - All list items in the pagination component
.pagination li a - All pagination links including first, last, previous and next
.pagination li.page-number - All page numbers (1, 2, 3 etc) pagination elements
.pagination li.first - The 'First' pagination element
.pagination li.last - The 'Last' pagination element
.pagination li.previous - The 'Previous' pagination element
.pagination li.next - The 'Next' pagination element
*/

.pagination {
  justify-content: center;
  margin: 20px;
}
.pagination li a {
  background: #222;
  border: 1px solid #444;
  font-weight: bold;
  cursor: pointer;
}
.pagination li a:hover {
  background: #222;
  border: 1px solid #ddd;
}
.pagination .page-item.active .page-link {
  background: #333;
  border: 1px solid #ddd;
  color: #ddd;
}
.pagination .page-item.disabled .page-link {
  background: #222;
  border: 1px solid #444;
  color: #444;
}
</style>