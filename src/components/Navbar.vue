<template>
    <div class="shadow-md top-0">
      <div class="text-[#191A23] container py-3.5 px-6 md:px-12 flex justify-between items-center">
        <!-- Logo -->
        <div class="flex items-center gap-3">
          <img src="/images/logo.svg" alt="Logo">
        </div>
  
        <!-- Menu Hamburger (visible sur petits écrans) -->
        <button
          @click="toggleMenu"
          class="block md:hidden text-2xl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
  
        <!-- Liens du menu -->
        <div
          :class="[
            Menu ? 'block' : 'hidden',
            'md:block w-full md:w-auto mt-4 md:mt-0'
          ]"
          class="transition-all duration-300"
        >
          <ul class="md:flex md:items-center gap-4">
            <li
              class="md:mx-5 px-10 md:px-0 my-3 md:my-0"
              v-for="(link, index) in links"
              :key="index"
            >
              <a
                :href="link.link"
                class="text-lg hover:text-gray-700 transition"
              >
                {{ link.name }}
              </a>
            </li>
            <button
              class="active-scale border border-4 ps-3 shadow-sm border-bg-black p-4 hover:bg-black hover:text-white rounded-lg"
            >
              Request a quote
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
  .transition-all {
    transition: all 0.3s ease-in-out;
  }
  </style>
  