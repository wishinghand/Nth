<template>
<div>
  <ul>
    <li v-for="word in words">
      {{word.word}}
    </li>
  </ul>
</div>
</template>

<script>
import global from '../../scripts/global'
export default {
  data () {
    return {
      words: null
    }
  },
  created () {
    global.getWords('juliet')
  }
}
</script>

<style lang="scss">

</style>
