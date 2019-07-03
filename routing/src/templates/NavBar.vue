<template lang="html">
    <ul class="nav nav-pills">
        <router-link to="/" tag="li" class="nav-link" active-class="active" exact> <a>Home</a> </router-link>
        <router-link to="/user" tag="li" class="nav-link" active-class="active" exact> <a>User</a> </router-link>
        <router-link to="/user/10" tag="li" class="nav-link" active-class="active" exact> <a> User 10</a> </router-link>
        <hr>
        <button @click="navigateToUser" class="btn btn-primary">Go !</button>
    </ul>
</template>

<script>
    export default {
        methods : {
            navigateToUser() {
                this.$router.push('/');
            }
        }
    }
</script>

<style lang="css" scoped>
    .active a{
        color: white;
    }

</style>
