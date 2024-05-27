<script setup>
import { useRootStore } from '@/stores/root';
const root = useRootStore();



</script>

<template>
  <div class="w-1/3 block mr-60">
    <li v-for="post in root.items" class="border border-purple-500 rounded-lg   p-1">
      <div>
        <h1 class="underline m-2 ">Заголовок:</h1>
        {{ post.title }}
      </div>
      <div>
        <h1 class="underline m-2 ">Содержание:</h1>
        {{ post.body }}
      </div>
      <div>
        <h1 class="underline m-2">id:</h1>
        {{ post.id }}
      </div>
      <button
        class="mt-3 bg-purple-500  bg-opacity-60 block mx-auto py-2 px-8 rounded-xl hover:bg-opacity-100 transition-all">
        Написать комментарий</button>
    </li>

  </div>
</template>
