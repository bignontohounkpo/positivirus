<template>
  <Navbar />
  <div class="px-12 ">


    <div class=" py-16 flex items-center justify-center ">
      <div class="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
        <div class="  ">
          <p class="text-5xl text-black font-medium"> Navigating the <br>
            digital <br>
            landscape <br>
            for success
          </p>
          <div class=" px-3 py-3">
            <p class="">
              Our digital marketing agency helps businesses <br> grow and succeed online through a range of <br>services
              including
              SEO, PPC, social media marketing, <br>and content creation. Book a consultation
            </p>
          </div>
          <button class="text-white bg-black px-3 rounded-lg p-4">
            Book a Consultation
          </button>

        </div>

        <div class=""
        >
          <img src="/images/Illustration.svg" alt="" class="bounce-animation "
       data-aos="flip-up"
       data-aos-duration="1000">
        </div>
      </div>
    </div>
  </div>
  <div class=" bg-[#F3F3F3] items-center justify-center">
    <div class="px-12 grid grid-cols-6 animate-scroll whitespace-nowrap">
      <img src="/icons/amazon.svg" alt="">
      <img src="/icons/dribble.svg" alt="">
      <img src="/icons/hubspot.svg" alt="">
      <img src="/icons/notion.svg" alt="">
      <img src="/icons/netflix.svg" alt="">
      <img src="/icons/zoom.svg" alt="">
    </div>
  </div>

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
.bounce-animation {
  animation: float-up-down 2s ease-in-out infinite;
}
</style>