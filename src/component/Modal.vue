<script setup>
import { ref } from 'vue';
import { useRootStore } from '@/stores/root';
const { addPost, setPost } = useRootStore();

const postTitle = ref(null);
const postBody = ref(null);

async function fetchData() {
  try {
    const posts = await fetch('https://dummyjson.com/posts')
      .then((res) => res.json())
      .then((res) => res.posts)
    setPost(posts);

  }
  catch (e) {
    console.log(e)
  }
}
fetchData();

function submitPost() {
  if (!postTitle.value) return;
  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: postTitle.value,
      body: postBody.value,

      userId: 5,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      addPost(res);
      postTitle.value = null;
      postBody.value = null;
    });
}
</script>

<template>
  <form @submit.prevent="submitPost" class="mt-10 block border border-purple-500 rounded-lg w-2/5 ">
    <button
      class=" mt-1 mr-2 bg-red-600 bg-opacity-80 block mx-auto py-2 px-3 rounded-xl hover:bg-opacity-100 transition-all"
      @click="handleClose">
      X
    </button>
    <div class="w-1/2 mb-3 ml-12 ">
      <img src='../public/spisok.jpg' />
    </div>
    <div>
      <label class=" ml-10" for=" title">Заголовок</label>
      <input type="text" id="title" value="" maxlength="50" v-on:input="inputTitle"
        class=" block border border-black ml-10 m-2 w-4/5 h-8" v-model="postTitle" />
    </div>
    <div>
      <label class=" ml-10" for="body">Содержание</label>
      <textarea rows="5" type="text" maxlength="500" id="body" value="" v-on:input="inputText"
        class=" block border border-black ml-10 m-2 w-4/5" v-model="postBody" />
    </div>
    <button type="submit" @click="handleClose"
      class=" bg-purple-500  bg-opacity-60 block mx-auto py-2 px-14 rounded-xl hover:bg-opacity-100 transition-all">
      Добавить пост
    </button>
  </form>
</template>

<script>

export default {
  name: "Modal",
  methods: {
    handleSave() {
      this.handleClose();
    },
    handleClose() {
      this.$emit('close');
    }, inputTitle(event) {
      this.inputTitle = event.target.value;
    }, inputText(event) {
      this.inputText = event.target.value;
    },
  }
}
</script>