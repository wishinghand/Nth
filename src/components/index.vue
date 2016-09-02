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
      <menu-bar></menu-bar>
    </div>
  </quasar-layout>
</template>

<script>
import menuBar from './menu-bar.vue'

export default {
  data () {
    return {}
  },
  components: {
    menuBar
  }
}
</script>

<style lang="scss">
  .toolbar {
    background-color: lightblue
  }
</style>