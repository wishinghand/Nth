<!-- default view on load -->
<template>
  <div>
    <quasar-layout>
      <div slot="header" class="toolbar">
        <quasar-toolbar-title :padding="1">
          Nth
        </quasar-toolbar-title>
      </div>

      <quasar-tabs slot="navigation">
        <quasar-tab v-link="{path: '/juliet', exact: true}">
            J
        </quasar-tab>

        <quasar-tab v-link="{path: '/quebec', exact: true}">
            Q
        </quasar-tab>

        <quasar-tab  v-link="{path: '/qNoU', exact: true}">
            Q no U
        </quasar-tab>

        <quasar-tab  v-link="{path: '/xray', exact: true}">
            X
        </quasar-tab>

        <quasar-tab  v-link="{path: '/zebra', exact: true}">
            Z
        </quasar-tab>

        <quasar-tab  v-link="{path: '/twoLetters', exact: true}">
            2 Letters
        </quasar-tab>

        <quasar-tab v-link="{path: '/threeLetters', exact: true}">
            3 Letters
        </quasar-tab>

        <quasar-tab v-link="{path: '/noVowels', exact: true}">
            No vowels
        </quasar-tab>

        <quasar-tab v-link="{path: '/twoAlphas', exact: true}">
            AA
        </quasar-tab>

        <quasar-tab v-link="{path: '/twoEchos', exact: true}">
            EE
        </quasar-tab>

        <quasar-tab v-link="{path: '/twoIndias', exact: true}">
            II
        </quasar-tab>

        <quasar-tab v-link="{path: '/twoOctobers', exact: true}">
            OO
        </quasar-tab>

        <quasar-tab v-link="{path: '/twoUnicorns', exact: true}">
            UU
        </quasar-tab>

        <quasar-tab v-link="{path: '/twoYankees', exact: true}">
            YY
        </quasar-tab>
      </quasar-tabs>

      <router-view></router-view>
    </quasar-layout>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style lang="scss" scoped>
</style>
