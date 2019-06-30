<template>
    <div class="container">
        <div class="row justify-content-around">
            <div class="col-sm-12">
                {{ userData.username }}
                <app-quote>
                    <h2 slot='title'>{{ title }}</h2>
                    <p slot='body'> {{ body }} </p>
                </app-quote>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './comp/Quote.vue'
    export default{
        components : {
            appQuote : Quote
        },
        data : function() {
            return {
                title : 'The Quote',
                body : 'Lorem Ipsum Quote'
            }
        }
    }
</script>

<style>
</style>
