<template>
  <div>
    <AboutIndigoSection />
    <TriangleTransition left="#261e64" right="#100532" />
    <WhitepaperSection />
    <TriangleTransition left="#100532" right="#261e64" />
    <TokenSection />
    <TriangleTransition left="#261e64" right="#100532" />
    <FaqSection />
    <TriangleTransition left="#100532" right="#261e64" />
    <TeamSection />
    <RoadmapSection />
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Indigo Protocol - Derivatives Liquidity Protocol on Cardano',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'Derivatives Liquidity Protocol on Cardano',
        },
      ],
    }
  },
}
</script>

<style>
.dark-indigo-section {
  background-color: #100532;
}

.light-indigo-section {
  background-color: #261e64;
}
</style>
