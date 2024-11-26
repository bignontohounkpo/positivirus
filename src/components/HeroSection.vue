<template>
     <div class="py-5 px-12 flex items-center justify-center">
      <div class="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-8">
        <!-- Image div - will appear first on mobile/tablet -->
        <div class="order-1 lg:order-2">
          <img src="/images/Illustration.svg" alt="Digital Marketing Illustration" 
            class="bounce-animation w-full max-w-md mx-auto"
            data-aos="flip-up"
            data-aos-duration="1000">
        </div>

        <!-- Text content - will appear second on mobile/tablet -->
        <div class="order-2 lg:order-1 text-center lg:text-left">
          <p class="text-4xl lg:text-5xl text-black font-medium leading-tight"> 
            Navigating the
            digital
            landscape
            for success
          </p>
          <div class="mt-6 mb-8">
            <p class="text-base lg:text-lg">
              Our digital marketing agency helps businesses grow and succeed online through a range of services including
              SEO, PPC, social media marketing, and content creation. Book a consultation
            </p>
          </div>
          <button class="text-white bg-black px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
            Book a Consultation
          </button>
        </div>
      </div>
    </div>

    <!-- Partners section with continuous scroll -->
    <div class="bg-[#F3F3F3] py-4 overflow-hidden">
      <div class="flex items-center px-12">
        <div class="flex space-x-8 animate-scroll-rtl">
          <img src="/icons/amazon.svg" alt="Amazon" class="h-8 md:h-10 lg:h-12">
          <img src="/icons/dribble.svg" alt="Dribbble" class="h-8 md:h-10 lg:h-12">
          <img src="/icons/hubspot.svg" alt="Hubspot" class="h-8 md:h-10 lg:h-12">
          <img src="/icons/notion.svg" alt="Notion" class="h-8 md:h-10 lg:h-12">
          <img src="/icons/netflix.svg" alt="Netflix" class="h-8 md:h-10 lg:h-12">
          <img src="/icons/zoom.svg" alt="Zoom" class="h-8 md:h-10 lg:h-12">
          <!-- Duplicate for seamless scroll -->
          <img src="/icons/amazon.svg" alt="Amazon" class="h-8 md:h-10 lg:h-12">
          <img src="/icons/dribble.svg" alt="Dribbble" class="h-8 md:h-10 lg:h-12">
          <img src="/icons/hubspot.svg" alt="Hubspot" class="h-8 md:h-10 lg:h-12">
          <img src="/icons/notion.svg" alt="Notion" class="h-8 md:h-10 lg:h-12">
          <img src="/icons/netflix.svg" alt="Netflix" class="h-8 md:h-10 lg:h-12">
          <img src="/icons/zoom.svg" alt="Zoom" class="h-8 md:h-10 lg:h-12">
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
.animate-scroll-rtl {
  animation: scroll-rtl 30s linear infinite;
}

@keyframes scroll-rtl {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
}

.bounce-animation {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>