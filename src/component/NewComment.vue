<script setup>
import { defineProps } from 'vue';
const props = defineProps(['comment'])
const { title, body } = props.post
</script>

<template>
  <div>
    <div class="flex w-8 h-8">
      <img src='../public/user.jpg' />
      <h1 class="underline m-2 ">{{ title }}</h1>
    </div>
    {{ body }}
  </div>
</template>