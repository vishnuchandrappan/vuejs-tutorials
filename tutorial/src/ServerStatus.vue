<template lang="html">
  <div class="">
    Increment : {{ count }}
    <hr>
    <button type="button" @click="count++" name="button">+</button>
    <hr>
    <home-ss></home-ss>
  </div>
</template>

<script>
    import Home from './Home.vue'
    export default {
        data : function () {
           return {
              count : 0
           }
        },
        components : {
          'home-ss' : Home
        }
    }
</script>

<style lang="css" scoped>
</style>
