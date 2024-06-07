<script setup>
import { defineProps, ref, computed } from 'vue';
import { useRootStore } from '@/stores/root';

import Post from '@/component/Post.vue';
const root = useRootStore();
const props = defineProps(['post']);
const query = ref('');

const queryPost = computed(() => {
  return root.items.filter((postEl) => (postEl.title.toLowerCase().indexOf(query.value) && postEl.body.toLowerCase().indexOf(query.value)) !== -1);
})
</script>

<template>
  <div class="w-1/3 block mr-60 ">
    <div>
      <label class=" ml-10 " for=" title">Поиск поста</label>
      <input type="search" maxlength="50" placeholder="Поиск постов" id="title" value=""
        class=" block border border-black ml-10 m-2 w-5/6 h-8" v-model="query" />
    </div>
    <div v-for="post in queryPost" :key="post" class="border border-purple-500 rounded-lg  p-1">
      <Post :post="post" />
    </div>
  </div>
</template>
