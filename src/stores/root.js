
import { defineStore } from "pinia";

export const useRootStore = defineStore('root', {
  state: () => ({
    postItems: []
  }),
  getters: {
    items: (state) => state.postItems
  },
  actions: {
    addPost(post) {
      this.data.push(post)
    }
  },
  removeItem(post) {
    this.postItems = post;
  },
});
