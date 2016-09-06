<!-- default view on load -->
<template>
  <quasar-layout>
    <div slot="header" class="toolbar">
      <quasar-toolbar-title :padding="1">
        Nth
      </quasar-toolbar-title>
    </div>

    <!-- Replace "div" with "router-view" if using subRoutes -->
    <div class="layout-view">
      <wordlists></wordlists>
    </div>
  </quasar-layout>
</template>

<script>
import wordlists from './wordlists.vue'

export default {
  data () {
    return {}
  },
  components: {
    wordlists
  }
}
</script>

<style lang="scss" scoped>
</style>
