<template>
  <div id="app">
    <app-header></app-header>
    <app-form></app-form>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import AppForm from './components/TodoPanel.vue';

export default {
  name: 'App',
  components:{
    'app-header': Header,
    'app-form': AppForm
  }
}
</script>

<style>

#todo-form{
  width:30%;
  margin: 0 auto;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
