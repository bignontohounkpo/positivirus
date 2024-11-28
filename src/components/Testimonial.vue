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
    <div class="max-w-4xl mx-auto relative">
      <div class="bg-black p-8 rounded-2xl">
        <!-- Quote Container -->
        <div class="relative">
          <div class="overflow-hidden">
            <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
              <div v-for="testimonial in testimonials" :key="testimonial.id" class="w-full flex-shrink-0">
                <div class="max-w-2xl mx-auto">
                  <div class="border-2 border-[#B9FF66] p-6 rounded-bl-3xl mb-4">
                    <p class="text-white text-lg">{{ testimonial.quote }}</p>
                  </div>
                  <div class="text-center">
                    <p class="text-[#B9FF66]  font-semibold">{{ testimonial.name }}</p>
                    <p class="text-gray-400">{{ testimonial.position }}</p>
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
  stopAutoplay()
  autoplayInterval.value = setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value)
    autoplayInterval.value = null
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
