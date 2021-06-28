<template>
  <section id="about" class="dark-indigo-section py-5">
    <div class="container">
      <h2 class="text-center">What is Indigo Protocol?</h2>
      <div class="row">
        <div class="offset-1 col-10 offset-lg-2 col-lg-8">
          <p class="text-center">
            Indigo allows the creation of fungible assets,
            “synthetics”, that track the price of real world assets. Indigo
            synthetics are intended to be used as key building blocks in smart
            contracts, and to bring the world’s assets to the blockchain.
          </p>
        </div>
      </div>
      <div class="row align-items-center mt-3">
        <div class="col-12 col-lg-6 order-1 order-lg-0">
          <div class="row">
            <div class="col-6">
              <div
                class="light-box w-100 text-center my-3 py-3 px-2 on-light-box-hover"
                @mouseover="on('mint')"
                @mouseleave="off()"
                @click="on('mint')"
              >
                <img
                  src="/images/what-is-indigo-protocol/mint.svg"
                  alt="What is Indigo Protocol? - Mint"
                  height="100"
                  class="mb-3 mw-100"
                />
                <p class="m-0"><strong>Mint</strong></p>
              </div>
            </div>
            <div class="col-6">
              <div
                class="light-box w-100 text-center my-3 py-3 px-2 on-light-box-hover"
                @mouseover="on('trade')"
                @mouseleave="off()"
                @click="on('trade')"
              >
                <img
                  src="/images/what-is-indigo-protocol/trade.svg"
                  alt="What is Indigo Protocol? - Trade"
                  height="100"
                  class="mb-3 mw-100"
                />
                <p class="m-0"><strong>Trade</strong></p>
              </div>
            </div>
            <div class="col-6 col-lg-4">
              <div
                class="light-box w-100 text-center my-3 py-3 px-2 on-light-box-hover"
                @mouseover="on('pool')"
                @mouseleave="off()"
                @click="on('pool')"
              >
                <img
                  src="/images/what-is-indigo-protocol/pool.svg"
                  alt="What is Indigo Protocol? - Pool"
                  height="100"
                  class="mb-3 mw-100"
                />
                <p class="m-0"><strong>Pool</strong></p>
              </div>
            </div>
            <div class="col-6 col-lg-4">
              <div
                class="light-box w-100 text-center my-3 py-3 px-2 on-light-box-hover"
                @mouseover="on('stake')"
                @mouseleave="off()"
                @click="on('stake')"
              >
                <img
                  src="/images/what-is-indigo-protocol/stake.svg"
                  alt="What is Indigo Protocol? - Stake"
                  height="100"
                  class="mb-3 mw-100"
                />
                <p class="m-0"><strong>Stake</strong></p>
              </div>
            </div>
            <div class="col-6 offset-3 col-lg-4 offset-lg-0">
              <div
                class="light-box w-100 text-center my-3 py-3 px-2 on-light-box-hover"
                @mouseover="on('govern')"
                @mouseleave="off()"
                @click="on('govern')"
              >
                <img
                  src="/images/what-is-indigo-protocol/govern.svg"
                  alt="What is Indigo Protocol? - Govern"
                  height="100"
                  class="mb-3 mw-100"
                />
                <p class="m-0"><strong>Govern</strong></p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6 order-0 order-lg-1 p-lg-5">
          <div class="d-flex position-relative mb-3 mb-lg-0">
            <img
              src="/images/what-is-indigo-protocol.svg"
              alt="What is Indigo Protocol?"
              class="w-100 m-2 m-lg-3 what-is-indigo-protocol-illustration"
            />
            <div
              class="selected-light-box position-absolute p-3 w-100 h-100"
              :style="{ opacity: isShowing ? 1 : 0 }"
            >
              <div v-if="selected && options[selected]">
                <h3>{{ options[selected].name }}</h3>

                <p class="mb-0">{{ nl2br(options[selected].text) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { isMobile } from 'mobile-device-detect';

export default {
  data() {
    return {
      selected: null,
      isShowing: false,
      options: {
        mint: {
          name: 'Mint',
          text:
            'Minting iAssets is decentralized and is conducted by users throughout the network by opening a position and depositing collateral in the form of a stablecoin or another iAsset. For example, to mint an iTSLA, at $600 and a 150% collateral ratio, I would provide $900 USD and receive an iTSLA token.',
        },
        trade: {
          name: 'Trade',
          text:
            'Once you have a iTSLA token you are able to trade that iAsset for another iAssets.',
        },
        pool: {
          name: 'Pool',
          text:
            'By providing both an iAsset and stablecoin, you can pool your token to provide liquidity to the protocol and participate as a liquidity provider aka. LP. As a reward you will earn interest in the form of $INDY tokens.',
        },
        stake: {
          name: 'Stake',
          text:
            'The native asset of the Indigo Protocol, the $INDY token, can be staked to vote on active polls and is required as a deposit for making new governance suggestions.',
        },
        govern: {
          name: 'Govern',
          text:
            'Using the staked $INDY token, you are able to create and vote on proposals to expand the Indigo Protocol. The approved proposals will allow Indigo Protocol users to modify and enhance monetary policy, among other critical features, within the protocol itself.',
        },
      },
    }
  },
  methods: {
    on(option) {
      this.selected = option
      this.isShowing = true

      if (window.outerWidth <= 768) {
        document
          .querySelector('.what-is-indigo-protocol-illustration')
          .scrollIntoView({
            behavior: 'smooth',
          })
      }
    },
    off() {
      if (!isMobile) {
        this.isShowing = false
      }
    },
    nl2br(str) {
      if (typeof str === 'undefined' || str === null) {
        return ''
      }
      // Adjust comment to avoid issue on locutus.io display
      const breakTag = '<br ' + '/>'
      return (str + '').replace(/(\r\n|\n\r|\r|\n)/g, breakTag + '$1')
    },
  },
}
</script>

<style>
.light-box {
  background-color: #261e64;
  border-radius: 20px;
  box-shadow: 0 0 20px 3px #261e64;
  transition: all 0.3s ease;
}

.on-light-box-hover:hover {
  background-color: #373261;
  box-shadow: 0 0 20px 3px #373261;
}

.selected-light-box {
  border-radius: 20px;
  background-color: rgba(55, 50, 97, 0.95);
  box-shadow: 0 0 20px 3px #373261;
  font-size: 1.125rem;
  transition: opacity 0.7s ease;
  overflow-y: scroll;
}

.what-is-indigo-protocol-illustration {
  max-height: 375px;
}
</style>
