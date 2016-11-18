<template>
<div><br>
<p class="instruction">Click on a word to see its meaning</p>
  <ul>
    <li v-for="word in wordList" class="wordStyle">
      <span @click="openModal(word.word)">{{word.word}}</span>
    </li>
  </ul>

  <!-- this shows the definition of the word when clicked on -->
  <quasar-modal
    id="defPage"
    ref="basicModal"
    class="maximize"
    :content-css="{backgroundColor: '#F9E3AB'}"
  >

    <h4 class="text-center">Definition of <b>{{requestedWord}}</b></h4>
    <ol>
      <li v-for="def in definitions">
        {{def}}
      </li>
    </ol>
    <button class="round closeBtn" @click="$refs.basicModal.close()">Close</button>

  </quasar-modal>
</div>
</template>

<script>
export default {
  data () {
    return {
      wordList: '',
      requestedWord: '',
      definitions: []
    }
  },

  methods: {
    getWords () {
      var that = this

      this.$http.get('../../statics/' + this.$route.params.wordtype + '.json')
      .then(function (response) {
        that.wordList = response.data
      })
      .catch(function (error) {
        console.log(error)
      })
    },
    openModal (word) {
      // clears modal when opening a new page
      this.requestedWord = ''
      this.definitions = []
      this.$refs.basicModal.open()
      this.getDefinition(word)
    },
    getDefinition (word) {
      var endOfWord = word.slice(-3)

      if (endOfWord === '(S)') {
        word = word.slice(0, -3)
      }

      var config = {
        headers: {
          'X-Mashape-Key': 'Kikv2nFc5omsh2drxrkb4WTVObfGp132j70jsnSdDT5BS8A4eV',
          'Accept': 'application/json',
          'Content-Type': 'text/plain',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        }
      }

      this.$http.get(`https://wordsapiv1.p.mashape.com/words/${word}/definitions`, config)
      .then(response => {
        console.log(response)
        if (response.data.definitions.length === 0) {
          this.requestedWord = response.data.word
          this.requestedWord = this.requestedWord.charAt(0).toUpperCase() + this.requestedWord.slice(1)
          this.definitions = 'We were unable to find the definition for ' + this.requestedWord + '.'
        }
        else {
          this.requestedWord = response.data.word
          this.requestedWord = this.requestedWord.charAt(0).toUpperCase() + this.requestedWord.slice(1)

          for (var i = 0; i < response.data.definitions.length; i++) {
            // this.definition += (i + 1) + '. ' + response.data.definitions[i].definition + '<br />'
            // this.definitions += response.data.definitions[i].definition
            this.definitions.push(response.data.definitions[i].definition)
          }
        }
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  },
  watch: {
    '$route' () {
      this.getWords()
    }
  },
  mounted () {
    this.getWords()
  }
}
</script>

<style>
  .defPage {
    background-color: #F9E3AB;
  }

  .closeBtn {
    margin-left: 8rem;
    background-color: #632612;
    color: #9ed1fe;
  }
</style>