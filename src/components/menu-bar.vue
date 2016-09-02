<template>
      <!-- Tabs -->
    <quasar-tabs>
      <quasar-tab target="#tab-j">
        J
      </quasar-tab>

      <quasar-tab target="#tab-q">
        Q
      </quasar-tab>

      <quasar-tab>
        Q no U
      </quasar-tab>

      <quasar-tab>
        X
      </quasar-tab>

      <quasar-tab>
            Z
      </quasar-tab>

      <quasar-tab>
            2 Letters
      </quasar-tab>

      <quasar-tab>
            3 Letters
      </quasar-tab>

    </quasar-tabs>

    <!-- Targets -->
    <juliet-words id="tab-j"></juliet-words>

    <quebec-words id="tab-quebec"></quebec-words>

</template>

<script>
// import various list components and put them in tab content
import quebecWords from './wordlists/quebec-words.vue'

export default {
  data () {
    return {}
  },
  components: {
    quebecWords
  }
}
</script>

<style lang="scss">

</style>
