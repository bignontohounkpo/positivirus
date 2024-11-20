 <template>

   <Navbar/>
   <!--        <div class="md:hidden cursor-pointer" @click="toggleMenu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div> 
              const menuOpen = ref(false);
  
      const toggleMenu = () => {
        menuOpen.value = !menuOpen.value;
      };
                  <button
              class="px-5 py-2 border border-black shadow-sm hover:bg-black hover:text-white rounded-lg flex items-center gap-2"
            >
              Request a quote
              <svg xmlns="http://www.w3.org/2000/svg" class=" hidden hover:flex h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>-->
   
 </template>
 
 <script> 

import Navbar from '../components/Navbar.vue'; 
 export default {
  components: {
    Navbar, 
  },
 
 }
 </script>
 
 <style>
 
 </style>