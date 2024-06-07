<script setup>
import { ref } from 'vue';
import { useRootStore } from '@/stores/root';
import { defineProps } from 'vue';

const { addComment } = useRootStore();
const props = defineProps(['comment']);
const commentPost = props.comment;

const postComment = ref(null);
const postName = ref(null);


const addCommentNew = () => {
  commentPost.push({ title: postName.value, body: postComment.value })
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
    <div>
      <label class=" ml-10" for=" title">Имя пользователя</label>
      <input type="text" maxlength="100" placeholder="Введите ваше Имя" id="name" value="" v-on:input="inputName"
        class=" block border border-black ml-10 m-2 w-4/5 h-8" v-model="postName" />
    </div>
    <div>
      <label class=" ml-10" for=" title">Комментарий</label>
      <input type="text" maxlength="500" placeholder="Напишите комментарий" id="comment" value=""
        v-on:input="inputComment" class=" block border border-black ml-10 m-2 w-4/5 h-8" v-model="postComment" />
    </div>
    <button @click="addCommentNew"
      class="mt-3 bg-purple-500  bg-opacity-60 block mx-auto py-2 px-8 rounded-xl hover:bg-opacity-100 transition-all">
      Написать комментарий</button>
    <div v-for="comment in commentPost" :key="comment" class="border border-purple-500 rounded-lg  m-1 p-1">
      <div>
        <div class="flex w-8 h-8">
          <img src='../public/user.jpg' />
          <h1 class="underline m-2 ">{{ comment.title }}</h1>
        </div>
        {{ comment.body }}
      </div>
    </div>
  </form>


</template>

<script>
export default {
  name: "PostList",
  methods: {
    inputComment(event) {
      this.inputComment = event.target.value
    },
    inputName(event) {
      this.inputName = event.target.value
    },
    onClick(event) {
      this.onClick = event.target.id
    }
  }
}
</script>