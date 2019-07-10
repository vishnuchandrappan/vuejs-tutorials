<template lang="html">
    <div class="">
        <h3>Add Todo</h3>
        <div class="form-group">
            <form @submit.prevent="onSubmit">
                <input type="text" v-model="title" class="form-control" placeholder="Add Todo..">
                <input type="submit" value="Add Todo" class="btn btn-info">
            </form>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "AddTodo",
        data(){
            return {
                title :''
            }
        },
        methods: {
            ...mapActions(['addTodo']),
            onSubmit() {
                this.addTodo(this.title);
            }
        }
    }
</script>

<style lang="css" scoped>
    .btn{
        margin:5px auto;
        display: block;
    }
</style>
