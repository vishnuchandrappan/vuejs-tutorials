<template>
    <div class="container">
        <form class="form-group jumbotron">
            <div class="form-group">
                <label>Name</label>
                <input v-model="user.name" type="text" name="name" class="form-control">
            </div>
            <div class="form-group">
                <label>Email ID</label>
                <input v-model="user.email" type="email" name="email" class="form-control">
            </div>
            <div class="form-group">
                <label>Password</label>
                <input v-model="user.password" type="password" name="password" class="form-control">
            </div>
            <div class="form-group">
                <input @click.prevent="submit" type="submit" name="login" class="btn btn-info" value="Login">
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user : {
                    email : '',
                    password : '',
                    name : ''
                }
            }
        },
        methods : {
            submit() {
                this.$http.post('https://vuejs-project-785aa.firebaseio.com/data.json', this.user)
                .then(response => {
                    console.log(response);
                }, error => {
                    console.log(error);
                });
            }
        }
    }
</script>

<style>
    form{
        margin-top:40px;
    }
    h1{
        text-align: center;
    }
</style>
