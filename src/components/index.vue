<template>
  <quasar-layout>
    <div slot="header" class="toolbar bg-amber-2" >
      <quasar-toolbar-title :padding="1" class="text-center text-brown-10">
        Nth - A Provocative Problem Solver
      </quasar-toolbar-title>
    </div>

    <quasar-tabs slot="navigation" class="bg-brown-10">
      <quasar-tab route="/wordlist/juliet">
          J
      </quasar-tab>

      <quasar-tab route="/wordlist/quebec">
          Q
      </quasar-tab>

      <quasar-tab route="/wordlist/qNoU">
          Q no U
      </quasar-tab>

      <quasar-tab route="/wordlist/xray">
          X
      </quasar-tab>

      <quasar-tab route="/wordlist/zebra">
          Z
      </quasar-tab>

      <quasar-tab route="/wordlist/noVowels">
        No Vowels
      </quasar-tab>

      <quasar-tab route="/wordlist/twoLetters">
          2 Letters
      </quasar-tab>

      <quasar-tab route="/wordlist/threeLetters">
          3 Letters
      </quasar-tab>

      <quasar-tab route="/wordlist/twoAlphas">
          AA
      </quasar-tab>

      <quasar-tab route="/wordlist/twoEchos">
          EE
      </quasar-tab>

      <quasar-tab route="/wordlist/twoIndias">
          II
      </quasar-tab>

      <quasar-tab route="/wordlist/twoOctobers">
          OO
      </quasar-tab>

      <quasar-tab route="/wordlist/twoUnicorns">
          UU
      </quasar-tab>

      <quasar-tab route="/wordlist/twoYankees">
          YY
      </quasar-tab>
    </quasar-tabs>

    <router-view class="layout-view" ></router-view>
  </quasar-layout>
</template>

<script>
export default {
  data () {
    return {
      selectedList: ''
    }
  }
}
</script>

<style>

  li {
    list-style: none;
  }

  .instruction {
    text-align: center;
    font-style: italic;
  }

  .wordStyle {
    width: 66%;
    margin-bottom: .5rem;
    padding: .25rem;
  }

  .defText {
    padding: 1.5rem;
  }

</style>
