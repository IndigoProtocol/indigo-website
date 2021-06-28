<template>
  <div class="triangle-transition" :style="style"></div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: ['left', 'right'],
  computed: {
    style() {
      return (
        'background: linear-gradient(to top right, ' +
        this.left +
        ' 0%, ' +
        this.left +
        ' 50%, ' +
        this.right +
        ' 50%,  ' +
        this.right +
        ' 100%)'
      )
    },
  },
})
</script>

<style>
.triangle-transition {
  min-height: 160px;
  min-width: 100%;
}
</style>
