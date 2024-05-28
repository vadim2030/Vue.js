<script setup>
import { ref } from 'vue';
// import Comment from '@/component/Comment.vue';
import { useRootStore } from '@/stores/root';
const { setCommentId, addComment } = useRootStore();
const root = useRootStore();

const postComment = ref(null);
const postName = ref(null);

async function submitCommentId(id) {
  try {
    const comment = await fetch('https://dummyjson.com/comments/post/id')
      .then((res) => res.json())
      .then((res) => res.comment)
    setCommentId(comment);
  }
  catch (e) {
    console.log(e)
  }
}

function submitComment() {
  if (!postComment.value) return;
  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: postName.value,
      body: postComment.value,
      userId: 5,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      addComment(res);
      postName.value = null;
      postComment.value = null;
    });
}
</script>

<template>
  <form @submit.prevent="submitComment">
    <div>Комментарии</div>
    <div class="">
      <label class=" ml-10" for=" title">Имя пользователя</label>
      <input type="text" id="name" value="" v-on:input="inputName"
        class=" block border border-black ml-10 m-2 w-4/5 h-8" v-model="postName" />
    </div>
    <div class="">
      <label class=" ml-10" for=" title">Комментарий</label>
      <input type="text" id="comment" value="" v-on:input="inputComment"
        class=" block border border-black ml-10 m-2 w-4/5 h-8" v-model="postComment" />
    </div>
    <button
      class="mt-3 bg-purple-500  bg-opacity-60 block mx-auto py-2 px-8 rounded-xl hover:bg-opacity-100 transition-all">
      Написать комментарий</button>
    <form @submit.prevent="submitCommentId" v-for="comment in root.itemsComment"
      class="border border-purple-500 rounded-lg  m-1 p-1">
      <div>
        <div class="flex w-8 h-8">
          <img src='../public/user.jpg' />
          <h1 class="underline m-2 ">{{ comment.title }}</h1>
        </div>
        {{ comment.body }}
      </div>
    </form>
  </form>

</template>

<script>
export default {
  data() {
    return {
      post: [{ title }]
    }
  },
  name: "PostList",
  methods: {
    inputComment(event) {
      console.log('event.target.value---', event.target.value)
      this.inputComment = event.target.value
    },
    inputName(event) {
      console.log('event.target.value---', event.target.value)
      this.inputName = event.target.value
    }
  }
}
</script>