<template lang="html">
    <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="panel panel-default">
            <div class="panel-body quote">
                <slot> </slot>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        props : ['quotes']
    }
</script>


<style lang="css" scoped>
    .panel-body{
        text-align: center;
        padding:5px;
        border: solid 2px;
        margin: 2px;
        border-radius: 5px;
        font-size: 18px;
        transition: 0.4s;
    }
    .quote{
        cursor: pointer;
    }
    .qoute:hover{
        background: tomato;
    }
    .col-sm-6, .col-md-4, .col-lg-3,.col-12{
        transition: 1s;
    }
    .col-sm-6:hover, .col-md-4:hover, .col-lg-3:hover{
        transform : scale(1.1);
        transition: 0.2s;
    }
</style>
