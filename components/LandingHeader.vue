<template>
  <header
    class="masthead-wrapper d-flex mw-100 vw-100 mx-auto flex-column position-relative"
  >
    <HeaderBackground />
    <header class="header-container masthead mt-3 mt-lg-5 mb-auto">
      <div class="navbar navbar-expand-lg">
        <div class="container d-flex align-items-center">
          <a href="#" class="navbar-brand">
            <img
              src="/images/logo.svg"
              alt="Indigo Logo"
              class="masthead-brand"
            />
          </a>
          <!-- Toggle button -->
          <button
            v-b-toggle.navbarSupportedContent
            class="navbar-toggler text-white"
            type="button"
          >
            <font-awesome-icon :icon="['fas', 'bars']" />
          </button>
          <!-- Collapsible wrapper -->
          <b-collapse id="navbarSupportedContent" class="navbar-collapse">
            <ul class="navbar-nav ml-auto my-2 my-lg-0">
              <li class="nav-item">
                <a
                  v-smooth-scroll
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >Home</a
                >
              </li>
              <li class="nav-item">
                <a v-smooth-scroll class="nav-link" href="#about">About</a>
              </li>
              <li v-if="false" class="nav-item">
                <a v-smooth-scroll class="nav-link" href="#whitepaper"
                >Whitepaper</a
                >
              </li>
              <li v-if="false" class="nav-item">
                <a v-smooth-scroll class="nav-link" href="#token">Token</a>
              </li>
              <li class="nav-item">
                <a v-smooth-scroll class="nav-link" href="#faq">FAQ</a>
              </li>
              <li class="nav-item">
                <a v-smooth-scroll class="nav-link" href="#team">Team</a>
              </li>
              <li class="nav-item">
                <a v-smooth-scroll class="nav-link" href="#roadmap">Roadmap</a>
              </li>
            </ul>
          </b-collapse>
          <a
            v-if="false"
            href="#"
            class="masthead-button btn btn-outline-light ml-5 px-2 d-none d-lg-block"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </header>

    <div class="header-container d-flex h-100 mx-auto flex-column">
      <div class="container">
        <main role="main" class="cover">
          <div class="row align-items-center">
            <div class="col-12 col-lg-6">
              <h1 class="cover-heading">BUILDING ASSETS ON THE BLOCKCHAIN</h1>
              <p class="lead">
                Indigo is an algorithmic, autonomous synthetics protocol for on-chain price exposure to real-world
                assets, built on Cardano.
              </p>
              <p v-if="false" class="lead">
                <a href="#" class="masthead-button btn btn-outline-light px-4">
                  Get Started Now
                </a>
              </p>
            </div>
            <div class="d-none d-lg-block col-6">
              <img
                src="/images/header-image.svg"
                alt="Indigo Protocol"
                class="w-100"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  </header>
</template>

<style>
/*
 * Header
 */
.masthead-wrapper {
  font-family: 'Barlow', 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
  color: #fff;
  min-width: 100%;
}

.masthead-brand {
  margin-bottom: 0;
  width: 220px;
}

header .navbar-nav .nav-link {
  padding: 0.25rem 0;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.75);
  background-color: transparent;
}

header .navbar-nav .nav-link::after {
  content: ''; /* This is necessary for the pseudo element to work. */
  display: block; /* This will put the pseudo element on its own line. */
  width: 0; /* Change this to whatever width you want to have before hover. */
  padding-top: 2px; /* This creates some space between the element and the border. */
  border-bottom: 0.25rem solid rgba(255, 255, 255, 0.25); /* This creates the border. Replace black with whatever color you want. */
  transition: 0.5s; /* This establishes the amount of time in seconds the animation should take from start to finish */
}

header .navbar-nav .nav-link.active::after {
  border-bottom: 0.25rem solid rgba(255, 255, 255, 1); /* This creates the border. Replace black with whatever color you want. */
}

header .navbar-nav .nav-link:hover::after,
header .navbar-nav .nav-link.active::after {
  width: 105%; /* This will be the new width of your border when on hover */
}

header .navbar-nav .active {
  color: #fff;
}

header .navbar-nav .nav-link + .nav-link {
  margin-left: 1.5rem;
}

.masthead-button {
  border-width: 2px;
  border-radius: 0;
  order: 3;
  font-size: 1rem;
  font-weight: 500;
}

@media (min-width: 48em) {
  .masthead-brand {
    float: left;
  }

  .nav-masthead {
    float: right;
  }
}

.header-container {
  z-index: 2;
}

/*
 * Cover
 */
.cover {
  padding-bottom: 260px;
  padding-top: 130px;
}

.cover-heading {
  font-family: 'Barlow', 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 300;
  font-size: 50px;
  word-spacing: 1px;
}

.cover .lead {
  font-family: 'Barlow', 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 300;
  font-size: 20px;
}
</style>
