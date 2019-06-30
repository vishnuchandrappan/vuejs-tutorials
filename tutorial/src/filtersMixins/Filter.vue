<template lang="html">
    <div class="container jumbotron">
        <div class="form-group">
            <label for="">Search</label>
            <input type="text" class="form-control" v-model="keyword">
        </div>
        <ul class="row">
            <li class="col-sm-3" v-for="fruit in filterd">{{ fruit }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                fruits : ['Apple','Orange','Mangoes','Banana','Melon'],
                keyword: ''
            }
        },
        filters:{
            toUpperCase(value) {
                return value.toUpperCase();
            },
            toLowerCase(value) {
                return value.toLowerCase();
            }
        },
        computed : {
            filterd() {
                return this.fruits.filter((element) => {
                    return element.toUpperCase().match(this.keyword.toUpperCase());
                });
            }
        }
    }
</script>

<style lang="css" scoped>
</style>
