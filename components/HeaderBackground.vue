<template>
  <div class="position-absolute w-100 h-100">
    <div id="particles-background" class="position-absolute w-100 h-100"></div>
    <div id="particles-foreground" class="position-absolute w-100 h-100"></div>
    <div class="position-absolute w-100" style="bottom: 0">
      <TriangleTransition left="#100532" right="rgba(0, 0, 0, 0)" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { tsParticles } from 'tsparticles'
import TriangleTransition from '~/components/TriangleTransition.vue'

export default {
  data() {
    return {
      granimInstance: null,
    }
  },
  computed: { TriangleTransition },
  mounted() {
    this.setupParticles()
  },
  methods: {
    setupParticles() {
      tsParticles.loadJSON(
        'particles-foreground',
        'json/particles-foreground.json'
      )
      tsParticles.loadJSON(
        'particles-background',
        'json/particles-background.json'
      )
    },
  },
}
</script>

<style>
#particles-background {
  background: linear-gradient(180deg, #100532 0%, #261e64 100%);
}
</style>
