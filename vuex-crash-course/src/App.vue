<template>
  <div class="container">
     <addTodos/>  
    <Todos/>
  </div>
</template>

<script>
import Todos from './components/Todos.vue'
import addTodos from './components/AddTodos.vue'

export default {
  name: 'app',
  components: {
    Todos,
    addTodos
  }
}
</script>

<style>
</style>
