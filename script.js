const content = {
  data() {
    return {
      todos: [
        {
          todoVal: "TODO 1",
          line: "line-through",
        },
      ],
    };
  },

  methods: {
    addNewTodo() {
      const inputField = document.querySelector("input");
      console.log(inputField.value);

      if (inputField.value === "") return;

      this.todos.push({ todoVal: inputField.value });

      inputField.value = "";
      console.log(this.todos);
    },
    removeTodo(event) {
      const targetElement = event.target;

      targetElement.className = "bg-red-500 rounded-lg p-2 m-2";

      const findingchildH2 = targetElement.previousElementSibling;

      findingchildH2.className = "line-through";
      // this.todos.splice(index, 1);

      // targetElement.parentElement.remove();
    },
  },
};

const app = Vue.createApp(content);
app.mount("#container");
