<template>
  <div class="w-full py-12 bg-white mb-16">
    <!-- Title Section -->
    <div class="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12">
      <div class="bg-[#B9FF66] py-2 px-4 w-fit self-center sm:self-auto">
        <p class="text-2xl font-bold">Testimonials</p>
      </div>
      <span class="text-sm sm:text-base text-center sm:text-left sm:self-center">
        Hear what our clients have to say about their experience working <br>
        with our digital marketing agency
      </span>
    </div>

    <!-- Testimonial Slider -->
    <div class="max-w-4xl mx-auto relative">
      <div class="bg-black p-8 rounded-2xl">
        <!-- Quote Container -->
        <div class="relative">
          <div class="overflow-hidden">
            <div class="flex transition-transform duration-1000 ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
              <div v-for="testimonial in testimonials" :key="testimonial.id" class="w-full flex-shrink-0">
                <div class="max-w-2xl mx-auto">
                  <div class="border border-[#B9FF66] p-6 rounded-bl-7xl mb-4 rounded-xl">
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
    quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "Sarah Johnson",
    position: "Marketing Director"
  },
  {
    id: 2,
    quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "Michael Chen",
    position: "CEO"
  },
  {
    id: 3,
    quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
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
