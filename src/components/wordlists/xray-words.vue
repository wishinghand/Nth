<template>
  <ul>
      <li v-for="word in words">
        {{word.word}}
      </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      words: ''
    }
  },
  ready () {
    this.$set('words', require('json!assets/xrayWords.json'))
  }
}
</script>

<style lang="scss">
</style>
