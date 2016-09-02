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
    return {}
  },
  ready () {
    this.$http.get('./statics/qNoUWords.json').then((response) => {
      // both of these work, not sure which is optimal
      this.$set('words', response.json())
      // this.words = response.json()
    }, (response) => {
      // alert('Couldn\'t find shit')
    })
  }
}
</script>

<style lang="scss">
</style>
