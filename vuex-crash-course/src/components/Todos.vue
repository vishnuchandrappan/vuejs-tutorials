<template lang="html">
    <div class="">
        <h1>Todos</h1>
        <div class="todos">
            <div class="todo bg-info" v-for="todo in allTodos" :key="todo.id">
                {{ todo.title }}
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "Todos",
        computed : mapGetters(['allTodos']),
        methods : {
            ...mapActions(['fetchTodos'])
        },
        created() {
            this.fetchTodos();
        }
    }
</script>

<style lang="css" scoped>
    .todos {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 1rem;
    }
    .todo {
      border: 1px solid #ccc;
      padding: 1rem;
      border-radius: 5px;
      text-align: center;
      position: relative;
      cursor: pointer;
    }
</style>
