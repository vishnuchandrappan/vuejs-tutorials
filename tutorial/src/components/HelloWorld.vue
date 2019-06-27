<template lang="html">
    <div class="container">
        <h1 @click="resetName">User Details | {{ name.name }} ( {{ age }} )</h1> <hr>
        <div class="row justify-content-around">
            <app-user class="col-sm-6" @ageChanged="age = $event" :name="name" :age="age"></app-user>
            <app-edit-user class="col-sm-6" :name="name"></app-edit-user>
        </div>
        <!-- <button type="button" @click="changeName" name="button"></button> -->
    </div>
</template>

<script>
    import User from './User.vue'
    import Edit from './EditUser.vue'

    export default {
        data () {
            return {
                name : {
                    name: 'John Doe',
                },
                age:21
            };
        },
        components : {
            'app-user' : User,
            'app-edit-user' : Edit
        },
        methods: {
            resetName() {
                this.name.name = 'John Doe',
                this.age = 21
            }
        }
    }
</script>

<style lang="css" scoped>
    .container{
        border: solid 3px gray;
        padding: 40px;
        margin-top:50px;
        border-radius: 5px;
    }
</style>
