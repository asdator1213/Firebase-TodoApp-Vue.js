<template>
    <div>
        <form id="todo-form">
            <input type='text' v-model="newTodo.name" id="todo-input" 
            placeholder="Write a new todo.." class="form-control">
            <button @click.prevent="addTodo()" class="btn btn-info">Add</button>
        </form>
        <div id="all-todos">
            <ul id="todo-list">
                <todo-element v-for="todo in todos" :key="todo.id" v-bind:todo="todo"></todo-element>
            </ul>
        </div>
    </div>
    
</template>
<script>
import Todo from "./Todo.vue";
import { db } from "../main";
import {showToastMessage} from '../main';
import {setToastClass} from '../main';

export default {
  components: {
    "todo-element": Todo
  },
  firestore() {
    return {
      todos: db.collection("todos").orderBy("date", "desc")
    };
  },
  data() {
    return {
      newTodo: {
        name: ""
      },
      todos: []
    };
  },
  methods: {
    addTodo() {
        const date = new Date();
        const todoCompleted = false;
        const todoName = this.newTodo.name;
        this.newTodo.name = '';
        db.collection("todos").add({date, todoName, todoCompleted});
        setToastClass("alert alert-success")
        showToastMessage("A new todo has been successfully created!");
    },
  }
};
</script>
<style scoped>
#todo-form {
  margin: 0 auto;
  width: 80%;
}
#todo-input {
  margin: 10px 0;
  text-align: center;
  width: 100%;
}
#all-todos {
  background-color: white;
  width: 80%;
  margin: 10px auto;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  border: 1px solid #ccc;
}
#todo-list {
  list-style-type: none;
  text-align: center;
  padding: 5px 10px;
  margin-bottom: 0;
}
#todo-list > li {
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  display: block;
  padding: 10px;
  margin: 10px 0px;
  transition-duration: 0.2s;
}
#todo-list > li:hover {
  box-shadow: inset 0px 0px 5px 1px rgba(0, 0, 0, 0.212);
}

input{
  font-family: 'Exo 2', sans-serif;
}
</style>
