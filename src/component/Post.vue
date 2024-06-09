<script setup>
import Comment from '@/component/Comment.vue';
import { defineProps, reactive } from 'vue';

const props = defineProps(['post']);
const { title, body } = props.post;
const commentStore = reactive([]);
</script>

<template>
  <div>
    <h1 class="underline m-2">Заголовок:</h1>
    {{ title }}
  </div>
  <div>
    <h1 class="underline m-2">Содержание:</h1>
    {{ body }}
  </div>
  <div>
    <Comment :comment="commentStore" />
  </div>
</template>
