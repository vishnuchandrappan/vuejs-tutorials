<template lang="html">
    <div>
        <app-navbar></app-Navbar>
        <transition name="bounce" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import NavBar from './components/NavBar.vue'
    export default {
        components : {
            appNavbar : NavBar
        },
    }
</script>

<style lang="css" scoped>
    .container{
        padding: 50px;
    }
    .bounce-enter-active {
      animation: bounce-in .3s;
    }
    .bounce-leave-active {
      animation: bounce-in .3s reverse;
    }
    @keyframes bounce-in {
      0% {
        transform: translateX(-500px);
        opacity:0;
      }
      10% {
        transform: translateX(-450px);
        opacity:0.1;
      }
      20% {
        transform: translateX(-400px);
        opacity:0.2;
      }
      30% {
        transform: translateX(-350px);
        opacity:0.3;
      }
      40% {
        transform: translateX(-300px);
        opacity:0.4;
      }
      50% {
        transform: translateX(-250px);
        opacity:0.5;
      }
      60% {
        transform: translateX(-200px);
        opacity:0.6;
      }
      70% {
        transform: translateX(-150px);
        opacity:0.7;
      }
      80% {
        transform: translateX(-100px);
        opacity:0.8;
      }
      90% {
        transform: translateX(-50px);
        opacity:0.9;
      }
      100% {
        transform: translateX(0px);
        opacity:1;
      }
    }
</style>
