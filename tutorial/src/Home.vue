<template lang="html">

  <div class="">
    <app-ss></app-ss>
  </div>

</template>

<script>
    import ServerStatus from './ServerStatus.vue';

    export default {

        components : {
          'app-ss' : ServerStatus
        }

    }
</script>

<style lang="css" scoped>
</style>
