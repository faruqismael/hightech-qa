<template>
  <div class="mb-5"> <!-- class fixed-top-->
      <!-- header goes here -->
      <nav style="background-color:#62d2a2 !important" class="navbar-container navbar navbar-expand-lg navbar-light bg-light">
        <h3 class="navbar-brand " ><router-link to="/">HighTech</router-link></h3>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <router-link class="nav-link" to="/">Home <span class=" current sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="#">Projects</a>
            </li>
            <li class="nav-item dropdown active">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categories
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Web Dev</a>
                <a class="dropdown-item" href="#">Android Dev</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Embedded</a>
                </div>
            </li>
            <li class="nav-item active">
                <router-link to="/team" class="nav-link" >Team</router-link>
            </li>
            <li class="nav-item active">
                <router-link class="nav-link " to="/contact" tabindex="-1" aria-disabled="true">Contact</router-link>
            </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            <div class="my-2 my-lg-0 ml-3">
                <button class="btn btn-primary">Login</button>
            </div>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
    props:['changeToTeam']

}
</script>

<style>
    a:hover{
        text-decoration: underline !important;
        cursor: pointer;
    }
    .router-link-exact-active{
        color:red !important;
    }
</style>