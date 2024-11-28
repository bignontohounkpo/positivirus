<template>
  <div class="w-full py-12 bg-white">
    <!-- Title Section -->
    <div class="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12">
      <div class="bg-[#B9FF66] py-2 px-4">
        <p class="text-2xl font-bold">Testimonials</p>
      </div>
      <span class="text-sm sm:text-base sm:self-center">
        Hear from Our Satisfied Clients About <br>
        Their Experience Working with Us
      </span>
    </div>

    <!-- Testimonial Slider -->
    <div class="max-w-5xl mx-auto relative">
      <div class="bg-black p-8 rounded-2xl">
        <!-- Quote Container -->
        <div class="relative">
          <div class="overflow-hidden">
            <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
              <div v-for="testimonial in testimonials" :key="testimonial.id" class="w-full flex-shrink-0">
                <div class="border-2 border-[#B9FF66] p-6 rounded-br-3xl">
                  <p class="text-white text-lg mb-6">{{ testimonial.quote }}</p>
                  <div class="flex items-center">
                    <div>
                      <p class="text-[#B9FF66] font-semibold">{{ testimonial.name }}</p>
                      <p class="text-gray-400">{{ testimonial.position }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Navigation Dots -->
          <div class="flex justify-center mt-6 gap-2">
            <button
              v-for="(_, index) in testimonials"
              :key="index"
              @click="setCurrentIndex(index)"
              class="w-3 h-3 rounded-full transition-colors duration-200"
              :class="index === currentIndex ? 'bg-[#B9FF66]' : 'bg-gray-600'"
            ></button>
          </div>

          <!-- Navigation Arrows -->
          <button
            @click="prevSlide"
            class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-[#B9FF66] hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            @click="nextSlide"
            class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-[#B9FF66] hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const testimonials = [
  {
    id: 1,
    quote: "Working with Positivus has been a game-changer for our online presence. Their strategic approach and attention to detail have helped us achieve remarkable growth.",
    name: "Sarah Johnson",
    position: "Marketing Director"
  },
  {
    id: 2,
    quote: "The team at Positivus truly understands digital marketing. They've helped us increase our online visibility and generate more qualified leads than ever before.",
    name: "Michael Chen",
    position: "CEO"
  },
  {
    id: 3,
    quote: "I'm amazed by the results Positivus has delivered. Their expertise in SEO and content marketing has significantly boosted our website traffic and conversions.",
    name: "Emily Rodriguez",
    position: "E-commerce Manager"
  }
]

const currentIndex = ref(0)
const autoplayInterval = ref(null)

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length
}

const setCurrentIndex = (index) => {
  currentIndex.value = index
}

const startAutoplay = () => {
  autoplayInterval.value = setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value)
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style scoped>
</style>
