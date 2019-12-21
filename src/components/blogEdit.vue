<template>
  <b-container>
    <!-- FORM TO EDIT A POST -->
    <b-row class="justify-content-center">
      <b-col xl="8" lg="9" md="10" cols="12" class="add-post__box" no-gutters>
        <div class="input-box">
          <input type="text" class="input" v-model="posts[n].title" placeholder="title...">
        </div>
        <div class="input-box">
          <textarea rows="2" class="input" style="resize: none;" v-model="posts[n].descript" placeholder="descript..."></textarea>
        </div>
        <div class="input-box">
          <textarea rows="6" class="input" v-model="posts[n].content" placeholder="content..."></textarea>
        </div>
        <div class="input-box">
          <button class="btn_light" @click="savePost">SAVE</button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: ['posts','n'],
  methods: {
    savePost() {
      // SAVE CHANGES
      this.$emit("edit-post");
    }
  }
}
</script>