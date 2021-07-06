<template>
  <section id="roadmap" class="dark-indigo-section">
    <h2 class="text-center pt-5 mb-5">Roadmap</h2>

    <div class="container pb-3">
      <ul class="roadmap-timeline">
        <li class="complete">
          <div class="content-wrapper">
            <div class="line"></div>
            <div class="content">
              <p><strong>May 2021</strong></p>
              <p>Web App Design Development</p>
              <p>Plutus Contract Demo</p>
            </div>
          </div>
        </li>
        <li class="complete">
          <div class="content-wrapper">
            <div class="line"></div>
            <div class="content">
              <p><strong>June 2021</strong></p>
              <p>Whitepaper Development</p>
              <p>Bug Fixes</p>
            </div>
          </div>
        </li>
        <li class="complete last-complete">
          <div class="content-wrapper">
            <div class="line"></div>
            <div class="content">
              <p><strong>July 2021</strong></p>
              <p>Whitepaper Release</p>
              <p>Begin 3rd-party integrations</p>
              <p>Partnership Announcements</p>
              <p>Continue Smart Contract Development</p>
            </div>
          </div>
        </li>
        <li>
          <div class="content-wrapper">
            <div class="line"></div>
            <div class="content">
              <p><strong>August 2021</strong></p>
              <p>Catalyst Fund 6 Entry</p>
              <p>Complete 3rd-party integrations</p>
              <p>Code Review & Security Audits</p>
              <p>Testnet Release *</p>
            </div>
          </div>
        </li>
        <li>
          <div class="content-wrapper">
            <div class="line"></div>
            <div class="content">
              <p><strong>September 2021</strong></p>
              <p>Indigo Protocol v1 Mainnet Launch *</p>
            </div>
          </div>
        </li>
      </ul>
      <p class="text-white-50"><small>* Roadmap items subject to change, based on IOHK development of Plutus.</small></p>

    </div>
  </section>
</template>

<style>
/* Roadmap */
.roadmap-timeline {
  list-style-type: none;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  max-width: 100%;
}

.roadmap-timeline li {
  flex-basis: 0;
  flex-grow: 1;
}

.content-wrapper {
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top: 4px solid #28205a;
  border-bottom: 0;
  border-left: 0;
  border-right: 0;
  position: relative;
}

.content-wrapper::before {
  content: '';
  width: 25px;
  height: 25px;
  background-color: #28205a;
  border-radius: 25px;
  position: absolute;
  top: -14px;
  left: calc(50% - 12.5px);
}

.complete .content-wrapper {
  border-top: 4px solid #6251cc;
}

.complete .content-wrapper::before {
  background-color: #6251cc;
}

.line {
  height: 25px;
  width: 1px;
  border: 1px solid #28205a;
  text-align: center;
}

.complete .line {
  border: 1px solid #6251cc;
}

.content {
  background-color: #28205a;
  width: 100%;
  font-size: 0.9rem;
  padding: 25px;
  border-radius: 8px;
  text-align: center;
}

.content p:last-child {
  margin-bottom: 0;
}

.complete .content {
  background-color: #261e64;
  color: white;
}

.roadmap-timeline li.last-complete .content-wrapper {
  border-image: linear-gradient(to right, #6251cc, #6251cc, #28205a) 100% 1;
}

.roadmap-timeline li:first-child {
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
}

.roadmap-timeline li:last-child {
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
}

@media (max-width: 768px) {
  .roadmap-timeline {
    align-items: normal;
    flex-direction: column;
    padding-left: 10px;
  }

  .content-wrapper {
    flex-direction: row;
    border-left: 4px solid #28205a;
    border-top: 0;
    padding: 20px 0;
  }

  .content-wrapper::before {
    top: calc(50% - 12.5px);
    left: -14px;
  }

  .complete .content-wrapper {
    border-left: 4px solid #261e64;
    border-top: 0;
  }

  .roadmap-timeline li.last-complete .content-wrapper {
    border-image: linear-gradient(to bottom, #6251cc, #6251cc, #28205a) 1 100%;
  }

  .line {
    width: 25px;
    height: 1px;
  }
}
</style>
