<script setup>
import { ref } from 'vue';
import { useRootStore } from '@/stores/root';
const { addPost, setPost } = useRootStore();
const root = useRootStore();


const postTitle = ref(null);
async function fetchData() {
  try {
    const posts = await fetch('https://dummyjson.com/posts')
      .then((res) => res.json())
      .then((res) => res.posts);
    setPost(posts);
  }
  catch { }
}
fetchData();

function submitPost() {
  if (!postTitle.value) return;
  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: postTitle.value,
      // body: this.dataObj.body,
      userId: 5,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      addPost(res);
      postTitle.value = null
    });
}
</script>

<template>
  <div class="border border-purple-500 rounded-lg mr-25 m-8">
    <button
      class=" mt-1 mr-2 bg-red-600 bg-opacity-80 block mx-auto py-2 px-4 rounded-xl hover:bg-opacity-100 transition-all"
      @click="handleClose">
      X
    </button>
    <div class="w-1/2 mb-3 ml-12">
      <img src='../public/spisok.jpg' />
    </div>
    <div class="">
      <label for="title">Заголовок</label>
      <input type="text" id="title" value="" v-on:input="inputTitle" class="border border-black m-2"
        v-model="postTitle" />
    </div>
    <!-- <div class=""> -->
    <!-- <label for="body">Содержание</label>
      <textarea rows="5" type="text" id="body" value="" v-on:input="inputText" class="border border-black m-2"
        v-model="dataObj.body" />
    </div> -->
    <button type="submit"
      class=" bg-purple-500  bg-opacity-60 block mx-auto py-2 px-14 rounded-xl hover:bg-opacity-100 transition-all"
      @submit.prevent="submitPost">
      Добавить пост
    </button>
    <div>
      <li v-for="post in root.items">
        {{ post.title }}
      </li>
    </div>
  </div>
</template>

<script>

export default {
  name: "Modal",
  data: function () {
    return {
      postItems: {
        title: ''
        // body: ''
      }
    }
  },
  methods: {
    handleSave() {
      console.log(this.postItems);
      this.handleClose();
    },
    handleClose() {
      this.$emit('close');
    }, inputTitle(event) {
      console.log('event.target.value---', event.target.value)
      this.inputOne = event.target.value
    }, inputText(event) {
      console.log('event.target.value+++', event.target.value)
      this.inputTwo = event.target.value
    },
    //  submit() {
    //   fetch('https://dummyjson.com/posts/add', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
    //       title: this.dataObj.title, body:
    //         this.dataObj.body, userId: 5,
    //     })
    //   }).then(res => res.json())
    //     .then((res) => {
    //       addPost(res)
    //     }
    //     ).then(console.log)
    // },
  }
}
</script>