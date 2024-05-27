<script setup>
import Modal from "@/component/Modal.vue";
import PostList from "@/component/PostList.vue"
// import { useRootStore } from "@/stores/root.js";
// const rootStore = useRootStore();

</script>

<template>
  <div>

    <div class="block border border-purple-500 place-content-center rounded-lg m-5  h-24">

      <h1 class="text-xl font-bold text-center text-gray-900">Post</h1>
      <button
        class="mt-3 bg-purple-500  bg-opacity-60 block mx-auto py-3 px-14 rounded-xl hover:bg-opacity-100 transition-all "
        @click="showModal = true">Создать пост</button>
      <transition name="modal">
        <div class="" v-if="showModal">
          <Modal @close="closeModal" />
        </div>
      </transition>
    </div>
    <div class="flex justify-end w-25">
      <PostList />
    </div>
  </div>
</template>

<script>
export default {
  name: "MyIndex",
  components: { Modal },
  data: function () {
    return {
      showModal: false
    }
  },
  methods: {
    closeModal() {
      this.showModal = false;
    }
  }
}
</script>