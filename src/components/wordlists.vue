<template>
  <!-- Tabs -->
  <quasar-tabs>
    <quasar-tab v-for="list in wordlists" :target='"#" + list.name'>
      {{ list.title }}
    </quasar-tab>
  </quasar-tabs>

  <!-- Targets -->
  <span v-for="list in wordlists" id="{{list.name}}">
    <ul>
      <li v-for="word in list.words">
        {{ word.word }}
      </li>
    </ul>
  </span>

</template>

<script>
export default {
  data () {
    return {
      // wordlists for each tab
      // name: use NATO-phonetic name as identifier for quasar-tabs and targets
      // title: title to use on tab
      wordlists: [{
        name: 'juliet',
        title: 'J',
        filename: 'jWords.json',
        words: ''
      }, {
        name: 'quebec',
        title: 'Q',
        filename: 'qWords.json',
        words: ''
      }, {
        name: 'noQuebec',
        title: 'Q no U',
        filename: 'qNoUWords.json',
        words: ''
      }, {
        name: 'xray',
        title: 'X',
        filename: 'xrayWords.json',
        words: ''
      }, {
        name: 'zebra',
        title: 'Z',
        filename: 'zebraWords.json',
        words: ''
      }, {
        name: 'twoLetter',
        title: '2 Letter',
        filename: 'twoLetterWords.json',
        words: ''
      }, {
        name: 'threeLetters',
        title: '3 Letter',
        filename: 'threeLetterWords.json',
        words: ''
      }, {
        name: 'noVowels',
        title: 'No Vowels',
        filename: 'noVowels.json',
        words: ''
      }]
    }
  },
  ready () {
    // load wordlist file for each tab
    for (var i = 0; i < this.wordlists.length; i++) {
      this.$set('wordlists[' + i + '].words', require('assets/' + this.wordlists[i].filename))
    }
  }
}
</script>

<style lang="scss">

</style>
