<template>
  <div>
    <header-app class="fixed-top"></header-app>
     <!---->
    <transition name="fade" >
      <router-view></router-view>
    </transition>

    <footer-app></footer-app>
  </div>
</template>

<script>
  import header from "./components/header.vue"
  import footer from "./components/footer.vue"
  
  export default {
    components:{
      "header-app":header,
      
      'footer-app':footer
    },
    data(){
      return {
        
      }
    },
    methods:{
      profile(){
        alert(this.team)
      }
    }

  }
</script>

<style>
  /* .slide-enter-active, .slide-leave-active {
    transition: opacity .2s ease-out, transform .51s;
  }
  .slide-enter, .slide-leave-to, .slide-leave-active {
    opacity: 0;
    transform: rotate(60deg);
  } */
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s ;
  }
  .fade-enter, .fade-leave-to, .fade-leave-active {
    opacity: 0;
  }
  
</style>