<template>
  <b-container>
    <!-- POST CONTENT -->
    <b-row class="justify-content-center">
      <b-col xl="8" lg="9" md="10" cols="12" class="add-post__box" no-gutters>
        <b-row class="justify-content-between" no-gutters>
          <button class="btn-content" @click="togglePost">
            <i class="fas fa-arrow-left"></i> BACK
          </button>
          <button class="btn-content" @click="editPost">
            <i class="fas fa-edit"></i> EDIT
          </button>
        </b-row>
        <h4 class="post__title">{{ posts[n].title }}</h4>
        <div class="post__descript">{{ posts[n].content }}</div>
        <div class="post__comment-length">
          <i class="fas fa-comment-alt"></i> {{ posts[n].comments.length }} Comments
        </div>
      </b-col>
    </b-row>

    <!-- FORM TO ADD A COMMENT -->
    <b-row class="justify-content-center">
      <b-col xl="8" lg="9" md="10" cols="12" class="add-post__box" no-gutters>
        <div class="input-box">
          <input class="input" v-model="userName" placeholder="User Name...">
        </div>
        <div class="input-box">
          <textarea rows="6" class="input resize-none" v-model="userText" placeholder="Text..."></textarea>
        </div>
        <div class="input-box">
          <button class="btn_light" @click="addComment(userName,userText)">COMMENT</button>
        </div>
      </b-col>
    </b-row>

    <!-- COMMENTS LIST -->
    <b-row class="justify-content-center">
      <b-col xl="8" lg="9" md="10" cols="12" class="post-comment" v-for="(comment, i) in posts[n].comments" :key="i" no-gutters>
        <div class="post-comment__user">
          <i class="fas fa-user"></i>
          <h4>{{ comment.userName }}</h4>
        </div>
        <div class="post__descript">{{ comment.userText }}</div>
        <div class="comment-delete__box">
          <button class="btn-delete" @click="deleteComment(i)">
            <i class="fas fa-trash-alt"></i> DELETE
          </button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
	return {
      userName: null,
      userText: null
    }
  },
  props: ['posts','n'],
  methods: {
    togglePost() {
      // OPEN/CLOSE POST
      this.$emit("toggle-post");
    },
    editPost() {
      // EDIT POST
      this.$emit("edit-post");
    },
    addComment(userName,userText) {
      // ADD COMMENT TO POST
      this.$emit("add-comment", userName,userText);
      this.userName = '';
      this.userText = '';
    },
    deleteComment(i) {
      // DELETE COMMENT
      this.$emit("delete-comment", i);
    }
  }
}
</script>

<style>
.post-comment {
  background: #222;
  padding: 10px;
  border-radius: 5px;
  margin: 5px;
}
.btn-content {
  margin: 0;
  padding: 5px 10px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  color: #888;
  background: #222;
  transition: 0.3s;
}
.btn-content:hover {
  background: #333;
  color: #ddd;
}
.btn-content:active {
  background: #111;
}
.btn-content:focus {
  outline: none;
}
.post-comment__user {
  margin: 10px;
  display: flex;
  align-items: center;
}
.post-comment__user h4 {
  color: #99f;
  font-weight: bold;
}
.fa-user {
  font-size: 30px;
  margin-right: 20px;
}
.comment-delete__box {
  display: flex;
  justify-content: flex-end;
}
</style>