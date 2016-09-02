<template>
      <!-- Tabs -->
    <quasar-tabs>
        <quasar-tab target="#tab-1">
            J
        </quasar-tab>

        <quasar-tab target="#tab-2">
            Q
        </quasar-tab>

        <quasar-tab  target="#tab-qnou">
            Q no U
        </quasar-tab>

        <quasar-tab  target="#tab-x">
            X
        </quasar-tab>

        <quasar-tab  target="#tab-z">
            Z
        </quasar-tab>

        <quasar-tab  target="#tab-twoLetters">
            2 Letters
        </quasar-tab>

        <quasar-tab target="#tab-threeLetters">
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

        <no-quebec-words id="tab-qnou"></no-quebec-words>

        <xray-words id="tab-x"></xray-words>

        <zebra-words id="tab-z"></zebra-words>

        <two-letter-words id="tab-twoLetters"></two-letter-words>

        <three-letter-words id="tab-threeLetters"></three-letter-words>
</template>

<script>
// import various list components and put them in tab content
import quebecWords from './wordlists/quebec-words.vue'
import noQuebecWords from './wordlists/no-quebec-words.vue'
import xrayWords from './wordlists/xray-words.vue'
import zebraWords from './wordlists/zebra-words.vue'
import twoLetterWords from './wordlists/two-words.vue'
import threeLetterWords from './wordlists/three-words.vue'

export default {
  data () {
    return {}
  },
  components: {
    quebecWords,
    noQuebecWords,
    xrayWords,
    zebraWords,
    twoLetterWords,
    threeLetterWords
  }
}
</script>

<style lang="scss">

</style>