<!-- default view on load -->
<template>
  <quasar-layout>
    <div slot="header" class="toolbar">
      <quasar-toolbar-title :padding="1">
        Nth
      </quasar-toolbar-title>
    </div>

    <quasar-tabs slot="navigation">

        <quasar-tab target="#tab-j" :active="true">
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
  </quasar-layout>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style lang="scss" scoped>
</style>
