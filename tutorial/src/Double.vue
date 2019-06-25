<template lang="html">
  <div>
    Double : {{ count }}
    <hr>
    <button type="button" @click="count = count*2" name="button">Double</button>
    <hr><hr>
    <ServerStatus-ss></ServerStatus-ss>
  </div>
</template>

<script>
  import SS from './ServerStatus.vue'
  export default {
      data : function (){
        return {
          count : 1
        }
      },
      components : {
        'ServerStatus-ss' : SS
      }
  }
</script>

<style lang="css" scoped>
</style>
