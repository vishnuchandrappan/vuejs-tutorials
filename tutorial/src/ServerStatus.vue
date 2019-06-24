<template lang="html">
  <div class="">
    Server Status : {{ status }}
    <hr>
    <button type="button" @click="changeStatus" name="button">Change !</button>
  </div>
</template>

<script>
    export default {
        data : function () {
           return {
              status : 'Critical'
           }
        },
        methods : {
            changeStatus() {
                this.status = 'Normal';
            }
        }
    }
</script>

<style lang="css" scoped>
</style>
