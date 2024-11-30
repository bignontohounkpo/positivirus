<template >
  <div class="bg-[#F3F3F3] fixed top-0 left-0 right-0 z-50">
    <div class="text-[#191A23] container py-2 px-4 md:px-6 flex items-center justify-between relative">
      <!-- Logo -->
      <div class="flex items-center">
        <img src="/images/logo.svg" alt="Logo" class="h-8 w-32">
      </div>

      <!-- Bouton toggle (tablettes et téléphones) -->
      <button @click="toggleMenu" class="block lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Menu -->
      <div :class=" [
        Menu ? 'translate-x-0' : '-translate-x-full',
        'absolute lg:static top-full left-0 w-full  lg:w-auto bg-[#F3F3F3] lg:bg-transparent lg:translate-x-0 transition-transform duration-300 z-50'
      ]">
        <ul class="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-0 ">
          <li class="lg:mx-5" v-for="(link, index) in links" :key="index">
            <a :href="link.link" class="text-lg hover:text-gray-700 transition">
              {{ link.name }}
            </a>
          </li>
          <button
            class="active-scale border-2 ps-3 border-bg-black px-4 py-2 hover:bg-black hover:text-white rounded-xl w-full lg:w-auto max-w-[200px] lg:ml-2">
            Request a quote
            <svg xmlns="http://www.w3.org/2000/svg" class="hidden hover:flex hover:text-white h-4 w-4" fill="none" viewBox="0 0 24 24"
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

.z-50 {
  z-index: 50;
}
</style>
