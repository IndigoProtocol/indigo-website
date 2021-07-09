<template>
  <footer class="pt-5">
    <div class="container">
      <hr />
      <div class="py-5">
        <div class="row align-items-center">
          <div
            class="col-12 col-md-6 d-flex justify-content-center justify-content-lg-start"
          >
            <a
              href="https://twitter.com/Indigo_protocol"
              class="footer-link"
              target="_blank"
            >
              <font-awesome-icon class="fa-fw" :icon="['fab', 'twitter']" />
            </a>
            <a
              href="https://medium.com/@Indigo_protocol"
              class="footer-link"
              target="_blank"
            >
              <font-awesome-icon class="fa-fw" :icon="['fab', 'medium']" />
            </a>
            <a
              href="https://discord.gg/YUbduZezdP"
              class="footer-link"
              target="_blank"
            >
              <font-awesome-icon class="fa-fw" :icon="['fab', 'discord']" />
            </a>
            <a
              href="mailto:info@indigoprotocol.io"
              class="footer-link"
              target="_blank"
            >
              <font-awesome-icon class="fa-fw" :icon="['fas', 'envelope']" />
            </a>
          </div>
          <div class="col-12 col-md-6 pt-3 pt-md-0 text-center text-lg-right">
            <p class="mb-0">&copy; copyright 2021 by Indigo Laboratories</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
hr {
  background-color: #fff;
}

footer {
  background-image: url('/images/footer.png');
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 275px;
}

.footer-link {
  border: solid 3px #fff;
  border-radius: 50%;
  box-shadow: 0 0 10px 0 #fff;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-right: 15px;
}

.footer-link:last-child {
  margin-right: 0;
}

.footer-link:hover {
  color: #fff;
}
</style>
