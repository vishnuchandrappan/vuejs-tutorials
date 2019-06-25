<template lang="html">
    <div class="row justify-content-around">
        <p class="col-sm-6">Name : {{ name.name }}</p>
        <p class="col-sm-6">Lorem ipsum dolor sit amet</p>
        <p>Age : {{ age }}</p>
        <button type="button" @click="changeAge" name="button">Change Age</button>
    </div>
</template>

<script>
export default {
    props : ['name','age'],
    methods :{
        changeAge: function() {
            this.age ++;
            this.$emit('ageChanged', this.age);
        },
    }
}
</script>

<style lang="css" scoped>
</style>
