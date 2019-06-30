<template lang="html">
    <div class="container">
        <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
        <new-quote @quoteAdded="addNewQuote"></new-quote>
        <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
        <div class="alert alert-danger" v-if="quotes.length >= 10">
            <h4 class="alert alert-danger">Maximum Limit Reached !</h4>
            <h6 class="alert alert-warning">Click on Quotes to Delete !</h6>
        </div>
    </div>
</template>


<script>
    import QuoteGrid from './components/QuoteGrid.vue';
    import NewQuote from './components/NewQuote.vue';
    import Header from './components/QuotesBar.vue';

    export default {
        data : function() {
            return {
                quotes : [
                    'Keep Your Eyes on the Stars and Feet on the Groud !'
                ],
                maxQuotes : 10,
                quoteLimit : false
            }
        },
        components : {
            appQuoteGrid : QuoteGrid,
            newQuote : NewQuote,
            appHeader : Header
        },
        methods: {
            addNewQuote(quote) {
                this.quotes.push(quote);
            },
            deleteQuote(index) {
                this.quotes.splice(index,1);
            }
        },
        watch : {
            quotes() {
                if (this.quotes.length > this.maxQuotes) {
                    this.quotes.pop()
                    this.quoteLimit = true;
                }
                else {
                    this.quoteLimit = false;
                }
            }
        }
    }
</script>


<style lang="css" scoped>
</style>
