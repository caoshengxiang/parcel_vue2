<template>
    <div>
      <div style="border: 1px solid; height: 50px;" v-for="i in 20">
        <p>{{i}}. test</p>
      </div>
    </div>
</template>
<script>
    export default {
        name: 'Test',
        props: {},
        data () {
            return {
              show: true
            }
        },
        watch: {
        },
        computed: {
        },
        methods: {
        },
        components: {
        },
        created() {
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    div {
        ul {
            li {
                list-style: none;
            }
        }
    }
</style>
