<template lang="html">
    <div class="container">
        <h1>Vue X</h1>
        <hr>
        <div class="row">
            <decrementButton :data="data" :val="val" class="col"></decrementButton>
            <div style="text-align:center;font-size:34px" class="col">{{ data.value }}</div>
            <incrementButton :data="data" :val="val" class="col"></incrementButton>
        </div>
    </div>
</template>

<script>
    import DecBtn from './components/Decrement.vue';
    import IncBtn from './components/Increment.vue';
    export default {
        components : {
            incrementButton : IncBtn,
            decrementButton : DecBtn
        },
        data() {
            return {
                data : {
                    value : 0
                },
                val : 0
            }
        },
        methods:{
            changeValue(value) {
                this.value = value;
            }
        }
    }
</script>

<style lang="css" scoped>
</style>
