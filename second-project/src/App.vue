<template lang="html">
    <div class="container">
        <new-quote @quoteAdded="addNewQuote"></new-quote>
        <app-quote-grid :quotes="quotes"></app-quote-grid>
    </div>
</template>


<script>
    import QuoteGrid from './components/QuoteGrid.vue';
    import NewQuote from './components/NewQuote.vue';

    export default {
        data : function() {
            return {
                quotes : [
                    'First Quote'
                ],
                maxQuotes : 10
            }
        },
        components : {
            appQuoteGrid : QuoteGrid,
            newQuote : NewQuote
        },
        methods: {
            addNewQuote(quote) {
                this.quotes.push(quote);
            }
        }
    }
</script>


<style lang="css" scoped>
</style>
