<template lang="html">
    <div class="">
        {{data.value}}
        <button class="btn btn-info" @click="data.value--">Decrement</button>
    </div>
</template>

<script>
    export default {
        props:['data','val']
    }
</script>

<style lang="css" scoped>
    .btn{
        margin:10px;
    }
</style>
