<template >
  <div class="bg-[#F3F3F3]  top-0 sticky">
    <div class="text-[#191A23] container py-3.5 px-12 md:px-12 flex justify-between items-center relative">
      <!-- Logo -->
      <div class="flex items-center gap-3">
        <img src="/images/logo.svg" alt="Logo" class="h-8">
      </div>

      <!-- Bouton toggle (tablettes et téléphones) -->
      <button @click="toggleMenu" class="block lg:hidden text-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Menu -->
      <div :class="[
        Menu ? 'translate-x-0' : '-translate-x-full',
        'absolute lg:static top-full left-10 lg:left-auto w-3/4 md:w-1/2 lg:w-auto  lg:bg-transparent lg:translate-x-0 transition-transform duration-300 z-10'
      ]">
        <ul class="flex flex-col lg:flex-row lg:items-center gap-4 p-4 lg:p-0">
          <li class="lg:mx-5" v-for="(link, index) in links" :key="index">
            <a :href="link.link" class="text-lg hover:text-gray-700 transition">
              {{ link.name }}
            </a>
          </li>
          <button
            class="active-scale border-4 ps-3 border-bg-black p-4 hover:bg-black hover:text-white rounded-xl">
            Request a quote
            <svg xmlns="http://www.w3.org/2000/svg" class=" hidden hover:flex hover:text-white h-4 w-4" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    // État du menu
    const Menu = ref(false);

    // Liste des liens
    const links = [
      { name: "About us", link: "#" },
      { name: "Services", link: "#" },
      { name: "Use Cases", link: "#" },
      { name: "Pricing", link: "#" },
      { name: "Blog", link: "#" },
    ];

    // Fonction pour basculer l'affichage du menu
    const toggleMenu = () => {
      Menu.value = !Menu.value;
    };

    return {
      Menu,
      links,
      toggleMenu,
    };
  },
};
</script>

<style>
/* Optionnel : Ajout de transition fluide */
.transition-transform {
  transition: transform 0.3s ease-in-out;
}
</style>
