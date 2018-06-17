<template>
    <li v-on:mouseover="actions = true" v-on:mouseleave="actions = false" 
    :class="{todoCompleted: todo.todoCompleted}">
        <div>
            <div id="completedMessage" v-if="todo.todoCompleted">
                Completed!
            </div>
            <p>{{todo.todoName}}</p>
            <div v-if="actions && !todo.todoCompleted">
                <todo-actions :todo="todo"></todo-actions>
            </div>
        </div>
    </li>
</template>
<script>
import Actions from "./Actions.vue";

export default {
  props: ["todo"],
  components: {
    "todo-actions": Actions
  },
  data() {
    return {
      actions: false
    };
  }
};
</script>
<style scoped>
li{
    font-size: 20px;
    font-family: 'Exo 2', sans-serif;
}

.todoCompleted {
  background-color: lightgreen;
  position:relative;
  z-index:1;
  font-weight: bold;
  color: black
}
#completedMessage{
    font-family: 'Eater', cursive;
    z-index: 2;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: -10px;
    right: 0;
    top:0px;
    font-size: 35px;
    transform: rotate(9deg);
    color:red;
    letter-spacing: 5px;
}
</style>
