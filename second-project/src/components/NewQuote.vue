<template lang="html">
    <div class="row">
        <div class="form-group col-12">
            <label>Quote</label>
            <textarea class="form-control" rows="3" v-model="quote"></textarea>
        </div>
        <div class="form-group col-12">
            <button class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
        </div>
    </div>
</template>


<script>
    export default {
        data: function() {
            return {
                quote : ''
            };
        },
        methods: {
            createNew() {
                this.$emit('quoteAdded',this.quote);
                this.quote = "";
            }
        }
    }
</script>


<style lang="css" scoped>
</style>
