<template>
  <div>
    <Navbar />
    <HeroSection />
    <Services />
    <Acordeon />
  </div>


</template>

<script>
import Navbar from "../components/Navbar.vue";
import HeroSection from"../components/HeroSection.vue"
import Services from "../components/Services.vue"
import Acordeon from "../components/Acordeon.vue"
export default {
  components: {
    Navbar,
    HeroSection,
    Services,
    Acordeon
  },
};
</script>

<style>
.bounce-animation {
  animation: float-up-down 2s ease-in-out infinite;
}
</style>