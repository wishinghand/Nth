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
    this.$set('words', require('assets/zebraWords.json'))
  }
}
</script>

<style lang="scss" scoped>
</style>
