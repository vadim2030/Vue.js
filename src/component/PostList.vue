<script setup>
import { ref } from 'vue';
// import Comment from '@/component/Comment.vue';
import { useRootStore } from '@/stores/root';
const { addComment, setComment } = useRootStore();
const root = useRootStore();

const postComment = ref(null);
async function fetchDate() {
  try {
    const posts = await fetch('https://dummyjson.com/posts')
      .then((res) => res.json())
      .then((res) => res.posts)
    setComment(posts);

  }
  catch { }
}
// fetchDate();
function submitComment() {
  if (!postComment.value) return;
  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: postComment.value,
      userId: 5,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      addComment(res);
      postComment.value = null;
    });
}

</script>

<template>
  <div class="w-1/3 block mr-60">
    <div v-for="post in root.items" class="border border-purple-500 rounded-lg   p-1">
      <div>
        <h1 class="underline m-2 ">Заголовок:</h1>
        {{ post.title }}
      </div>
      <div>
        <h1 class="underline m-2">Содержание:</h1>
        {{ post.body }}
      </div>
      <div>
        <h1 class="underline m-2">id:</h1>
        {{ post.id }}
      </div>

      <form @submit.prevent="submitComment">
        <div>Комментарии</div>
        <div class="">
          <label class=" ml-10" for=" title">Заголовок</label>
          <input type="text" id="comment" value="" v-on:input="inputComment"
            class=" block border border-black ml-10 m-2 w-4/5 h-8" v-model="postComment" />
        </div>
        <button
          class="mt-3 bg-purple-500  bg-opacity-60 block mx-auto py-2 px-8 rounded-xl hover:bg-opacity-100 transition-all">
          Написать комментарий</button>


        <div v-for="comment in root.itemsComment" class="border border-purple-500 rounded-lg   p-1">
          <div>
            <h1 class="underline m-2 ">пользователь</h1>
            {{ comment.title }}

          </div>
        </div>

      </form>
    </div>
  </div>
</template>



<script>
export default {
  name: "PostList",
  methods: {
    inputComment(event) {
      console.log('event.target.value---', event.target.value)
      this.inputOne = event.target.value
    }
  }
}
</script>