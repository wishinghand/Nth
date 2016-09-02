<template>
      <!-- Tabs -->
    <quasar-tabs>

        <quasar-tab target="#tab-j">
            J
        </quasar-tab>

        <quasar-tab target="#tab-q">
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

        <quasar-tab target="#tab-noVowels">
            No vowels
        </quasar-tab>

    </quasar-tabs>

    <!-- Targets -->
    <!-- NATO phonetic instead of letters in tag names because Vue doesn't like single letter words in their custom components -->
    <juliet-words id="tab-j"></juliet-words>

    <quebec-words id="tab-q"></quebec-words>

    <no-quebec-words id="tab-qnou"></no-quebec-words>

    <xray-words id="tab-x"></xray-words>

    <zebra-words id="tab-z"></zebra-words>

    <two-letter-words id="tab-twoLetters"></two-letter-words>

    <three-letter-words id="tab-threeLetters"></three-letter-words>

    <no-vowels id="tab-noVowels"></no-vowels>

</template>

<script>
// import various list components and put them in tab content
import julietWords from './wordlists/juliet-words.vue'
import quebecWords from './wordlists/quebec-words.vue'
import noQuebecWords from './wordlists/no-quebec-words.vue'
import xrayWords from './wordlists/xray-words.vue'
import zebraWords from './wordlists/zebra-words.vue'
import twoLetterWords from './wordlists/two-words.vue'
import threeLetterWords from './wordlists/three-words.vue'
import noVowels from './wordlists/no-vowels.vue'

export default {
  data () {
    return {}
  },
  components: {
    julietWords,
    quebecWords,
    noQuebecWords,
    xrayWords,
    zebraWords,
    twoLetterWords,
    threeLetterWords,
    noVowels
  }
}
</script>

<style lang="scss">

</style>
