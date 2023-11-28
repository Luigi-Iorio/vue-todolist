const { createApp } = Vue;

createApp({
  data() {
    return {
      todos: [
        {
          text: "fare la spesa",
          done: false,
        },
        {
          text: "andare in palestra",
          done: false,
        },
        {
          text: "leggere libro",
          done: true,
        },
      ],
    };
  },
}).mount("#app");
