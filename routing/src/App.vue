<template>
    <div class="container">
        <app-nav></app-nav>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    import NavBar from './templates/NavBar.vue';
    export default {
        components : {
            appNav : NavBar
        }
    }
</script>

<style>
</style>
