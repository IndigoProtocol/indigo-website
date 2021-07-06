<template>
  <section id="faq" class="light-indigo-section">
    <div class="container">
      <h2 class="text-center">Frequently Asked Questions</h2>
      <div class="row mb-5">
        <div class="offset-1 col-10 offset-lg-2 col-lg-8">
          <p class="text-center">Learn more about the Indigo Protocol here.</p>
        </div>
      </div>

      <div class="faqs pb-3">
        <div v-for="(faq, index) in faqs" :id="'faq-' + index" class="faq">
          <a
            :href="'#faq-question-' + index"
            class="faq-header"
            @click="toggleFaq(index)"
          >
            <div class="expand-question">
              <font-awesome-icon
                class="fa-fw"
                :icon="['fas', index === faqIndex ? 'minus' : 'plus']"
              />
            </div>
            <h5 class="question-header">{{ faq.question }}</h5>
            <font-awesome-icon
              class="fa-fw expand-question-chevron"
              :icon="[
                'fas',
                index === faqIndex ? 'chevron-up' : 'chevron-down',
              ]"
            />
          </a>
          <div
            :class="['faq-content', index === faqIndex ? 'd-block' : 'd-none']"
          >
            <p v-html="nl2br(faq.answer)"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      faqIndex: -1,
      faqs: [
        {
          question: 'How can I use Indigo?',
          answer:
            'Currently, Indigo is in development so there is no way to interact with the protocol. However, when the application is launched there will be both a Web and Mobile application that allows you to interact with the Indigo Protocol.',
        },
        {
          question: 'What are the key benefits of Indigo?',
          answer:
            'Indigo will allow anyone, anywhere, at any time to tokenize any asset and trade it. It allows people to enter markets they otherwise would never have access to, and it levels the playing field in terms of financial freedom. As the usage of iAssets grows we will become freed from the constraints that have been placed on trading, investing, and saving. This is the power of decentralized finance.',
        },
        {
          question: 'How can I earn $INDY?',
          answer:
            'Those who wish to earn $INDY tokens can do so in two different ways:' +
            '\n' +
            '1. By providing liquidity to any iAsset pool pairs.' +
            '\n' +
            '2. By staking your $INDY to  the protocol, you earn rewards generated from withdrawing collateral from CDP positions within the protocol.',
        },
        {
          question: 'What are iAssets?',
          answer:
            'iAssets are blockchain tokens that behave like synthetic versions of real-world assets by reflecting the exchange prices on-chain. They give traders the price exposure to real assets while enabling fractional ownership, open access and censorship resistance as any other cryptocurrency.',
        },
      ],
    }
  },
  methods: {
    nl2br(str) {
      if (typeof str === 'undefined' || str === null) {
        return ''
      }
      // Adjust comment to avoid issue on locutus.io display
      const breakTag = '<br ' + '/>'
      return (str + '').replace(/(\r\n|\n\r|\r|\n)/g, breakTag + '$1')
    },

    toggleFaq(index) {
      this.faqIndex = this.faqIndex === index ? -1 : index
    },
  },
}
</script>
<style>
/* FAQ */

.faq {
  background-color: #100532;
  border-radius: 8px;
  color: #fff;
  padding: 15px;
  margin-bottom: 20px;
}

.faq .faq-header {
  display: flex;
  align-items: center;
  color: #fff;
}

.faq .faq-header .question-header {
  margin: 0 0 0 20px;
}

.faq .faq-header .expand-question {
  background-color: #fff;
  border-radius: 50%;
  color: #100532;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  justify-items: center;
  font-size: 8px;
  width: 30px;
  min-width: 30px;
  height: 30px;
  min-height: 30px;
}

.faq .faq-header .expand-question-chevron {
  font-size: 20px;
  margin-left: auto;
}

.faq .faq-content {
  margin-top: 20px;
}
</style>
