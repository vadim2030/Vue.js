<script setup>
import { ref } from 'vue';
import { useRootStore } from '@/stores/root';
import { defineProps } from 'vue';
const { addComment, setCommentId } = useRootStore();
const root = useRootStore();
const props = defineProps(['comment'])
const { title, body } = props.post

const postComment = ref(null);
const postName = ref(null);

async function getCommentId(id) {
  try {
    const comment = await fetch(`https://dummyjson.com/comments/post/${id}`)
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

function submitComments() {
  if (!Comment.value) return;
  fetch('https://dummyjson.com/comments/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: postName.value,
      body: postComment.value,
      userId: 5,
    })
  })
    .then(res => res.json())
    .then((res) => {
      addComment(res);
      postName.value = null;
      postComment.value = null;
    });
}

</script>


<template>
  <div>
    <div class="flex w-8 h-8">
      <img src='../public/user.jpg' />
      <h1 class="underline m-2 ">{{ title }}</h1>
    </div>
    {{ body }}
  </div>
  <div>
  </div>

</template>