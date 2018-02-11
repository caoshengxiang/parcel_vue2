<template>
  <div>
    <p>来自vuex state语言: {{lang}}, {{currentLang}}</p>
    <div style="border: 1px solid; height: 50px;" v-for="i in 20">
      <p>{{i}}. home page</p>
    </div>

  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'

  export default {
    name: 'home',
    computed: {
      // ...mapState([
      //   'lang',
      // ]),
      lang () {
        return this.$store.state.lang
      },
      currentLang () {
        return this.$store.getters.getterLang
      }
    },
  }
</script>

<style scoped>

</style>