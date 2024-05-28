import { defineStore } from "pinia";

export const useRootStore = defineStore('root', {
  state: () => ({
    postItems: [],
    commentItems: [],
  }),
  getters: {
    items: (state) => state.postItems,
    itemsComment: (state) => state.commentItems
  },
  actions: {
    addPost(post) {
      this.postItems.push(post);
    },
    setPost(post) {
      this.postItems = post;
    },
    addComment(comment) {
      this.commentItems.push(comment);
    },
    setComment(comment) {
      this.commentItems = comment;
    },
    setCommentId(comentId) {
      this.commentItems = comentId;
    }
  }
});