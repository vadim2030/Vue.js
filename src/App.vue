<script setup>
import Modal from "@/component/Modal.vue";
import { useRootStore } from "@/stores/root.js";
const rootStore = useRootStore();

</script>

<template>
  <div>
    <div class="block border border-purple-500 place-content-center rounded-lg m-10 w-1/5 h-32">
      <h1 class="text-xl font-bold text-center text-gray-900">Post</h1>
      <button
        class="mt-10 bg-purple-500  bg-opacity-60 block mx-auto py-2 px-14 rounded-xl hover:bg-opacity-100 transition-all"
        @click="showModal = true">Создать пост</button>
      <transition name="modal">
        <div class="" v-if="showModal">
          <Modal @close="closeModal" />
          <!-- <button class="btn btn-success" @click="showModal = false">close</button> -->
        </div>
      </transition>
    </div>
    <div>
      {{ rootStore.postItems }}
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