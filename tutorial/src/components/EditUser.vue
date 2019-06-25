<template lang="html">
    <div class="row justify-content-around">
        <input type="text" class="text-dark form-control col-sm-6" v-model="name.name">
        <button class="btn btn-danger col-sm-6 form-control" type="button" @click="name.name = 'John Smith'" name="button">Change</button>
    </div>
</template>

<script>
export default {
    props : ['name']
}
</script>

<style lang="css" scoped>
</style>
