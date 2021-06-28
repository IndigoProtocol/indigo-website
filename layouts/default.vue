<template>
  <main>
    <LandingHeader />
    <Nuxt />
    <LandingFooter />
  </main>
</template>

<style>
html {
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

/*
 * Base structure
 */

html,
body {
  height: 100%;
  background-color: #100532;
  color: #fff;
}

body {
  display: flex;
  font-family: 'Barlow', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  font-weight: 300;
  justify-content: center;
  word-spacing: 1px;
}

/*
 * Header
 */
.masthead-wrapper {
  font-family: 'Barlow', 'Helvetica Neue', Arial, sans-serif;
  color: #fff;
}

.masthead-brand {
  margin-bottom: 0;
  width: 220px;
}

.nav-masthead .nav-link {
  padding: 0.25rem 0;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.75);
  background-color: transparent;
}

.nav-masthead .nav-link::after {
  content: ''; /* This is necessary for the pseudo element to work. */
  display: block; /* This will put the pseudo element on its own line. */
  width: 0; /* Change this to whatever width you want to have before hover. */
  padding-top: 2px; /* This creates some space between the element and the border. */
  border-bottom: 0.25rem solid rgba(255, 255, 255, 0.25); /* This creates the border. Replace black with whatever color you want. */
  transition: 0.5s; /* This establishes the amount of time in seconds the animation should take from start to finish */
}

.nav-masthead .nav-link.active::after {
  border-bottom: 0.25rem solid rgba(255, 255, 255, 1); /* This creates the border. Replace black with whatever color you want. */
}

.nav-masthead .nav-link:hover::after,
.nav-masthead .nav-link.active::after {
  width: 105%; /* This will be the new width of your border when on hover */
}

.nav-masthead .active {
  color: #fff;
}

.nav-masthead .nav-link + .nav-link {
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
  font-family: 'Barlow', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 300;
  font-size: 50px;
  word-spacing: 1px;
}

.cover .lead {
  font-family: 'Barlow', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 300;
  font-size: 20px;
}

.cover .btn-lg {
  padding: 0.75rem 1.25rem;
  font-weight: 700;
}

.btn {
  border-radius: 0;
}

hr {
  background-color: #fff;
}

footer {
  background-image: url('/images/footer.png');
  background-position: bottom center;
  background-repeat: no-repeat;
}
</style>
<script>
import LandingHeader from '@/components/LandingHeader'
export default {
  components: { LandingHeader },
}
</script>
