<template>
    <div id="todo-panel">
        <todo-form></todo-form>      
    </div>
</template>

<script>
import TodoForm from './TodoForm';

export default {
    components:{
        'todo-form': TodoForm
    },
    data(){
        return{
            todo: ''
        }
    }
    
}
</script>
<style>
    #todo-panel{
        background-color:darkgray;
        width:50%;
        margin: 0 auto;
        padding: 10px;
        box-shadow: 0px 0px 5px black;
    }
</style>
