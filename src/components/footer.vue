<template>
  <div>
      <footer class=" border-top">
          <hr>
        <div class="row">
        <div class="col-12 col-md ml-5">
            <h3><router-link to="/">HighTech</router-link></h3>
            <small class="d-block mb-3 text-muted">made with ❤️ by <span class="lead"><u>hightech</u></span>. &copy; {{ new Date().toString().slice(11,15)}}</small>
        </div>
        <div class="col-6 col-md">
            <h5>Projects</h5>
            <ul class="list-unstyled text-small">
            <li><a class="text-muted" href="#">HighTech Door Lock</a></li>
            <li><a class="text-muted" href="#">Game</a></li>
            <li><a class="text-muted" href="#">HighTech question and answer </a></li>
            <li><a class="text-muted" href="#">Atse Tech</a></li>
            <li><a class="text-muted" href="#">Academyko</a></li>
            </ul>
        </div>
        <div class="col-6 col-md">
            <h5>FAQ</h5>
            <ul class="list-unstyled text-small">
            <li><a class="text-muted" href="#">what is HighTech?</a></li>
            <li><a class="text-muted" href="#">what HighTech develops? </a></li>
            <li><a class="text-muted" href="#">How To Join HighTech?</a></li>
            <li><a class="text-muted" href="#">What is the benefit to be in HighTech?</a></li>
            </ul>
        </div>
        <div class="col-6 col-md">
            <h5>About</h5>
            <ul class="list-unstyled text-small">
            <li><router-link class="text-muted" to="/team">Team</router-link></li>
            <li><router-link class="text-muted" to="/contact#map">Locations</router-link></li>
            <li><a class="text-muted" href="#">Privacy</a></li>
            <li><a class="text-muted" href="#">Terms</a></li>
            </ul>
        </div>
        </div>
    </footer>
      <!-- footer goes here -->
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>