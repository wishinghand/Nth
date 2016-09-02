<template>
      <!-- Tabs -->
    <quasar-tabs>
      <quasar-tab target="#tab-1">
        J
      </quasar-tab>

      <quasar-tab target="#tab-2">
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
    <div id="tab-1">
      LOLOLOL
    </div>
    <div id="tab-2">
      <quebec-words></quebec-words>
    </div>
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
