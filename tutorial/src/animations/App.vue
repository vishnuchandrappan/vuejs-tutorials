<template lang="html">
    <div class="container">
        <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"> -->
        <div class="row">
            <div class="col-12">
                <h1>Animations</h1>
                <hr>
                <button class="btn btn-info" @click="status = !status">{{ !status ? "Show" : "Hide" }}</button>
                <br> <br>
                <transition name="fade">
                    <h3 v-if="status" class="alert alert-danger">Alert !!!</h3>
                </transition>
                <transition name="slide" type="animation">
                    <h3 v-if="status" class="alert alert-success">Alert !!!</h3>
                </transition>
                <transition name="fade" appear>
                    <h3 v-if="status" class="alert alert-dark">Alert !!!</h3>
                </transition>
                <transition name="slide" type="animation" appear>
                    <h3 v-if="status" class="alert alert-primary">Alert !!!</h3>
                </transition>
                <transition enter-active-class="animated jello"
                            leave-active-class="animated pulse"
                            appear>
                    <h3 v-if="status" class="alert alert-warning">Alert - Animate CSS !!!</h3>
                </transition>
                <transition :name="anim" appear mode="out-in">
                    <h3 v-if="status" class="alert alert-primary" key="one">Alert !!!</h3>
                    <h3 v-else class="alert alert-danger" key="two">No Alert !!!</h3>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                status : 1,
                anim: 'fade'
            }
        },
    }
</script>

<style lang="css" scoped>

    @import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css";

    .fade-enter{
        opacity: 0;
        transform: translateX(-500px);
    }
    .fade-enter-active{
        transition: 0.6s;
        /* transform: translateX(0px); */
    }
    .fade-leave{
    }
    .fade-leave-active{
        transition: 1s;
        opacity: 0;
        /* transform: translateY(-500px); */
        transform: translateX(500px);
        /* transform: scale(0); */
    }
    .slide-enter{
        opacity: 0;
    }
    .slide-enter-active{
        animation: slide-in 1s ease-out forwards;
        transition: 0.5s;
    }
    .slide-leave{

    }
    .slide-leave-active{
        animation: slide-out 1s ease-out forwards;
        transition: 1s;
        opacity: 0;
    }


    @keyframes slide-in {
        from {
            transform: translateX(500px);
        }
        to {
            transform: translateX(0px);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateX(0px);
        }
        to {
            transform: translateX(-500px);
        }
    }
</style>
