<template>
    <div>
        <div>
            <button class="btn btn-success" @click="completeTodo()">
                <i class="material-icons">done</i>
            </button>
            <button class="btn btn-primary">
                <i class="material-icons">create</i>
            </button>
            <button class="btn btn-danger" @click="deleteTodo()">
                <i class="material-icons">close</i>
            </button>
        </div>
    </div>
</template>
<script>
import { db } from "../main";

export default {
  props: ["todo"],
  methods: {
    deleteTodo() {
        db.collection("todos").doc(this.todo.id).delete();
    },
    completeTodo(){
        db.collection("todos").doc(this.todo.id).set({
            todoCompleted: true
        }, {merge:true})
        .then(function(){
            console.log("completePerformed!");
        })
    }

  }
};
</script>
<style>
</style>
