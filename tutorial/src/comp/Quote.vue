<template lang="html">
    <div>
        <div class="bg-primary">
            <slot name="title"></slot>
        </div>
        <div class="bg-secondary">
            <slot name="body"></slot>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="css" scoped>
    div{
        border: 1px solid #ccc;
        padding: 30px;
        box-shadow: 1px 1px 2px silver;
        margin: 30px auto;
        text-align: center;
        transition: 0.4s;
    }
    div:hover{
        box-shadow: 1px 1px 2px black;
    }
</style>
