<template>
  <div class="w-full px-4 sm:px-6 md:px-8 lg:px-16 py-12">
    <!-- Header -->
    <div class="flex flex-col sm:flex-row gap-4 mb-12">
      <div class="bg-[#B9FF66] py-2 px-4">
        <p class="text-2xl font-bold">Testimonials</p>
      </div>
      <span class="text-sm sm:text-base sm:self-center">
        Hear from Our Clients
      </span>
    </div>

    <!-- Carousel Container -->
    <div class="relative">
      <!-- Testimonials Slider -->
      <div class="overflow-hidden">
        <div 
          class="flex transition-transform duration-500 ease-out"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <div 
            v-for="(testimonial, index) in testimonials" 
            :key="index"
            class="w-full flex-shrink-0 px-4"
          >
            <!-- Testimonial Card -->
            <div class="bg-[#F3F3F3] p-8 rounded-2xl">
              <div class="flex flex-col sm:flex-row gap-8">
                <!-- Left Column: Image and Name -->
                <div class="flex flex-col items-center sm:items-start">
                  <div class="w-24 h-24 rounded-full overflow-hidden bg-gray-200 mb-4">
                    <img 
                      :src="testimonial.image" 
                      :alt="testimonial.name"
                      class="w-full h-full object-cover"
                      @error="handleImageError"
                    >
                  </div>
                  <h3 class="text-xl font-bold text-center sm:text-left">{{ testimonial.name }}</h3>
                  <p class="text-gray-600 text-center sm:text-left">{{ testimonial.position }}</p>
                </div>

                <!-- Right Column: Quote -->
                <div class="flex-1 relative">
                  <svg 
                    class="w-8 h-8 mb-4 text-black opacity-20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p class="text-lg">{{ testimonial.quote }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Arrows -->
      <button 
        v-if="testimonials.length > 1"
        @click="prevSlide"
        class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-black rounded-full p-2 text-white hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
        :class="{ 'opacity-50 cursor-not-allowed': currentSlide === 0 }"
        :disabled="currentSlide === 0"
      >
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button 
        v-if="testimonials.length > 1"
        @click="nextSlide"
        class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-black rounded-full p-2 text-white hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
        :class="{ 'opacity-50 cursor-not-allowed': currentSlide === testimonials.length - 1 }"
        :disabled="currentSlide === testimonials.length - 1"
      >
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Dots Navigation -->
      <div v-if="testimonials.length > 1" class="flex justify-center gap-2 mt-8">
        <button 
          v-for="(_, index) in testimonials" 
          :key="index"
          @click="goToSlide(index)"
          class="w-3 h-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          :class="currentSlide === index ? 'bg-black' : 'bg-gray-300 hover:bg-gray-400'"
          :aria-label="`Go to slide ${index + 1}`"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
const autoplayInterval = ref(null)

const testimonials = ref([
  {
    name: 'Sarah Johnson',
    position: 'CEO at TechStart',
    image: '/images/testimonial1.jpg',
    quote: 'Working with this digital marketing agency has been transformative for our business. Their strategic approach and dedication to results have helped us achieve remarkable growth.'
  },
  {
    name: 'Michael Chen',
    position: 'Marketing Director',
    image: '/images/testimonial2.jpg',
    quote: 'The team's expertise in digital marketing is unmatched. They've helped us navigate the complex digital landscape and achieve our marketing goals consistently.'
  },
  
  {
    name: 'Emma Williams',
    position: 'Small Business Owner',
    image: '/images/testimonial3.jpg',
    quote: 'I appreciate their data-driven approach and transparent communication. They've become an invaluable partner in our business growth journey.'
  }
])

const handleImageError = (event) => {
  // Fallback to a default image if the image fails to load
  event.target.src = '/images/default-avatar.jpg'
}

const startAutoplay = () => {
  if (testimonials.value.length <= 1) return
  
  stopAutoplay() // Clear any existing interval first
  
  autoplayInterval.value = setInterval(() => {
    if (currentSlide.value < testimonials.value.length - 1) {
      currentSlide.value++
    } else {
      currentSlide.value = 0
    }
  }, 5000)
}

const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value)
    autoplayInterval.value = null
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
  restartAutoplay()
}

const nextSlide = () => {
  if (currentSlide.value < testimonials.value.length - 1) {
    currentSlide.value++
  }
  restartAutoplay()
}

const goToSlide = (index) => {
  currentSlide.value = index
  restartAutoplay()
}

const restartAutoplay = () => {
  stopAutoplay()
  startAutoplay()
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease-out;
}

.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* Prevent text selection when clicking navigation buttons */
button {
  user-select: none;
  -webkit-user-select: none;
}
</style>
