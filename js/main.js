const { createApp } = Vue;

createApp({
  data() {
    return {
      cont: 0,
      textNewTask: "",
      newTask: {
        text: "",
        done: false,
      },
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
      this.newTask.text = this.textNewTask;
      this.todos.push(this.newTask);
    },
  },
}).mount("#app");
