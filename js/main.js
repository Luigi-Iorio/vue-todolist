const { createApp } = Vue;

createApp({
  data() {
    return {
      cont: 0,
      textNewTask: "",
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
  methods: {
    remove(index) {
      this.todos.splice(index, 1);
    },
    addTask() {
      this.todos.push({ text: this.textNewTask, done: false });
      this.textNewTask = "";
    },
    lineThrough(index) {
      if (this.todos[index].done === false) {
        this.todos[index].done = true;
      } else if (this.todos[index].done === true) {
        this.todos[index].done = false;
      }
    },
  },
}).mount("#app");
