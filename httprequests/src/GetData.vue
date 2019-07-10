<template lang="html">
    <div class="contianer">
        <div class="row">
            <div class="card col-sm-4" v-for="(data,i) in userData">
              <div class="card-body">
                  {{i}} => {{data}}
              </div>
            </div>
        </div>
        <button class="btn btn-info" @click="fetchData">Load !</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userData: {}
        }
    },
    methods: {
        fetchData() {
            this.$http.get('https://jsonplaceholder.typicode.com/todos')
                .then(response => {
                    this.userData = response.data
                })
        }
    }
}
</script>

<style lang="css" scoped>
</style>
