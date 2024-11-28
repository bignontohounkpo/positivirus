<template>
  <Navbar />
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <HeroSection />
    <Services />
    <Cases />
    <Acordeon />
    <Team />
    <Testimonial />  
    <Formulaire />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import HeroSection from "../components/HeroSection.vue"
import Services from "../components/Services.vue"
import Acordeon from "../components/Acordeon.vue"
import Testimonial from "../components/Testimonial.vue"
import Cases from "../components/Cases.vue"
import Team from "../components/Team.vue"
import Formulaire from "../components/Formulaire.vue"
import Footer from "../components/Footer.vue"

export default {
  components: {
    Navbar,
    HeroSection,
    Services,
    Acordeon,
    Testimonial,
    Cases,
    Team,
    Formulaire,
    Footer
  },
};
</script>

<style scoped>
</style>