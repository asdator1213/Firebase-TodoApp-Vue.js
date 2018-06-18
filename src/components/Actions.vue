<template>
    <div>
        <div>
            <button class="btn btn-success" @click="completeTodo()">
                <i class="material-icons">done</i>
            </button>
            <button class="btn btn-primary" @click="editTodoName = !editTodoName">
                <i class="material-icons">create</i>
            </button>
            <button class="btn btn-danger" @click="deleteTodo()">
                <i class="material-icons">close</i>
            </button>
        </div>
        <div v-if="editTodoName">
            <input type="text" class="form-control" v-model="newTodoName">
            <button @click="updateTodo()"><i class="material-icons">done</i></button>
        </div>
        
    </div>
</template>
<script>
import { db } from "../main";
import {showToastMessage} from '../main';
import {setToastClass} from '../main';

export default {
  props: ["todo"],
  data(){
      return{
          newTodoName:'',
          editTodoName:false
      }
  },
  methods: {
    deleteTodo() {
        db.collection("todos").doc(this.todo.id).delete();
        setToastClass("alert alert-danger");
        showToastMessage("Todo has been intentionally deleted! ;(");
    },
    completeTodo(){
        db.collection("todos").doc(this.todo.id).set({
            todoCompleted: true
        }, {merge:true})
        setToastClass("alert alert-success"); 
        showToastMessage("Todo has been successfully COMPLETED!!");
    },
    updateTodo(){
        db.collection("todos").doc(this.todo.id).set({
            todoName: this.newTodoName
        }, {merge:true});
        this.editTodoName = false;
        setToastClass("alert alert-info"); 
        showToastMessage("Todo name has been changed!");
    }
  }
};
</script>
<style>

</style>
