<template>
  <footer class="bg-[#1c1c1c] text-white px-6 lg:px-10 py-8 rounded-2xl mt-32">
    <!-- Header avec logo, menu et icônes -->
    <div class="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0 mb-12">
      <div class="w-[140px]">
        <img src="/images/logo.svg" alt="Positivus" class="w-full h-auto [filter:brightness(0)_invert(1)]">
      </div>
      
      <nav class="flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-8">
        <a href="#" class="text-white underline text-center lg:text-left">About us</a>
        <a href="#" class="text-white underline text-center lg:text-left">Services</a>
        <a href="#" class="text-white underline text-center lg:text-left">Use Cases</a>
        <a href="#" class="text-white underline text-center lg:text-left">Pricing</a>
        <a href="#" class="text-white underline text-center lg:text-left">Blog</a>
      </nav>

      <div class="flex space-x-6">
        <a href="#" class="text-white">
          <img src="/icons/linkedin_white.svg" alt="LinkedIn" class="w-6 h-6">
        </a>
        <a href="#" class="text-white">
          <img src="/icons/facebook.svg" alt="Facebook" class="w-6 h-6">
        </a>
        <a href="#" class="text-white">
          <img src="/icons/twiter.svg" alt="Twitter" class="w-6 h-6">
        </a>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Section Contact -->
      <div class="flex flex-col items-center lg:items-start text-center lg:text-left">
        <h3 class="inline-block bg-[#9ef53e] text-black px-4 py-2 rounded-lg mb-4 font-medium">Contact us:</h3>
        <div class="space-y-2">
          <p>Email: <a href="mailto:info@positivus.com" class="text-white underline">info@positivus.com</a></p>
          <p>Phone: <a href="tel:5555678901" class="text-white underline">555-567-8901</a></p>
          <p>Address: 1234 Main St<br>Moonstone City, Stardust State 12345</p>
        </div>
      </div>

      <!-- Section Newsletter -->
      <div class="lg:col-span-2 flex justify-start items-end pb-4">
        <form class="flex flex-col lg:flex-row gap-4 w-full lg:w-auto">
          <input 
            type="email" 
            placeholder="Email" 
            class="w-full lg:w-64 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white outline-none placeholder-white/50"
          >
          <button 
            type="submit" 
            class="w-full lg:w-auto bg-[#9ef53e] text-black px-6 py-3 rounded-lg font-medium whitespace-nowrap"
          >
            Subscribe to news
          </button>
        </form>
      </div>
    </div>

    <hr class="border-[#555] my-8">

    <!-- Section bas -->
    <div class="flex flex-col lg:flex-row justify-between items-center gap-4 text-sm text-white/70">
      <p class="text-center lg:text-left">&copy; 2023 Positivus. All Rights Reserved.</p>
      <a href="#" class="text-white/70 underline">Privacy Policy</a>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
</style>