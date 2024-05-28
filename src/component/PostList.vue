<script setup>
import { useRootStore } from '@/stores/root';
import Comment from '@/component/Comment.vue';
const { setComment } = useRootStore();
const root = useRootStore();


async function fetchDate() {
  try {
    const posts = await fetch('https://dummyjson.com/posts')
      .then((res) => res.json())
      .then((res) => res.posts)
    setComment(posts);

  }
  catch (e) {
    console.log(e)
  }

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
      <div>
        <Comment />
      </div>

    </div>
  </div>
</template>



<script>

export default {
  // data() {
  //   return {
  //     post: [{ title }]
  //   }
  // },
  name: "PostList",
  methods: {

  }
}
</script>