<script setup>
import { useRootStore } from '@/stores/root';
const root = useRootStore();



</script>

<template>
  <div class="inline-block ">
    <li v-for="post in root.items" class="border border-purple-500 rounded-lg w-1/2 m-0.5 p-1">
      Заголовок: {{ post.title }}
      Комментарий: {{ post.body }}
      id: {{ post.id }}
    </li>


  </div>
</template>
