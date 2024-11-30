<template>
  <div class="w-full px-4 sm:px-6 md:px-8 lg:px-16 mb-16">
    <!-- Accordion Header -->
    <div class="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12">
      <div class="bg-[#B9FF66] py-2 px-4 w-fit self-center sm:self-auto">
        <p class="text-2xl font-bold">Testimonial</p>
      </div>
      <span class="text-sm sm:text-base text-center sm:text-left sm:self-center">
        Find answers to common questions about our digital marketing <br>
        services and process
      </span>
    </div>

    <!-- Accordion Items -->
    <div class="space-y-4 sm:space-y-6">
      <div 
        v-for="(item, index) in items" 
        :key="index" 
        class="border-gray-700 border-b-4 border-b-black rounded-2xl transition-all duration-300"
        :class="{
          'border-2': item.isOpen,
          'bg-[#B9FF66]': item.isOpen
        }"
      >
        <div 
          @click="toggleAccordion(index)"
          class="flex justify-between items-center p-4 sm:p-6 cursor-pointer"
        >
          <div class="flex items-center gap-3 sm:gap-8">
            <span class="text-lg sm:text-xl font-bold" v-if="item.number">{{ item.number }}</span>
            <h3 class="text-base sm:text-xl font-medium pr-4">{{ item.title }}</h3>
          </div>
          <img 
            :src="item.isOpen ? '/icons/Plus_icon.svg' : '/icons/Plus icon.svg'"
            :alt="item.isOpen ? 'Minus icon' : 'Plus icon'"
            class="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transition-transform duration-300"
            :class="{ 'rotate-45': item.isOpen }"
          >
        </div>
        <transition
          name="accordion"
          @enter="startTransition"
          @leave="endTransition"
        >
          <div 
            v-show="item.isOpen"
            class="overflow-hidden"
          >
            <p class="text-black ml-8 sm:ml-16 text-sm sm:text-base px-4 sm:px-6 pb-4 sm:pb-6">
              {{ item.content }}
            </p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  {
    number: '01',
    title: 'Consultation',
    content: 'Digital marketing is the practice of promoting products, services, or brands through digital channels such as social media, search engines, email, and websites. It encompasses various strategies and techniques to reach and engage target audiences online.',
    isOpen: true
  },
  {
    number: '02',
    title: 'Research and Strategy Development',
    content: 'Our digital marketing package includes SEO optimization, social media management, content creation, email marketing campaigns, PPC advertising, and detailed analytics reporting. We customize our services based on your specific business needs and goals.',
    isOpen: false
  },
  {
    number: '03',
    title: 'Implementation',
    content: 'The timeline for seeing results varies depending on factors such as your industry, competition, and chosen strategies. Generally, some initial results can be seen within 3-6 months, with more significant results developing over 6-12 months of consistent effort.',
    isOpen: false
  },
  {
    number: '04',
    title: 'Monitoring and Optimization',
    content: 'Our digital marketing costs vary based on your business needs, goals, and the scope of services required. We offer customized packages to fit different budgets and provide transparent pricing with no hidden fees.',
    isOpen: false
  },
  {
    number: '05',
    title: ' Reporting and Communication',
    content: 'We measure success through various metrics including website traffic, conversion rates, engagement rates, ROI, keyword rankings, and more. We provide regular detailed reports and analytics to track progress and adjust strategies as needed.',
    isOpen: false
  },
  {
    number: '06',
    title: 'Continual Improvement',
    content: 'We measure success through various metrics including website traffic, conversion rates, engagement rates, ROI, keyword rankings, and more. We provide regular detailed reports and analytics to track progress and adjust strategies as needed.',
    isOpen: false
  }
])

const startTransition = (el) => {
  el.style.height = '0'
  el.style.opacity = '0'
  void el.offsetHeight
  el.style.height = el.scrollHeight + 'px'
  el.style.opacity = '1'
}

const endTransition = (el) => {
  el.style.height = el.scrollHeight + 'px'
  void el.offsetHeight
  el.style.height = '0'
  el.style.opacity = '0'
}

const toggleAccordion = (index) => {
  items.value = items.value.map((item, i) => ({
    ...item,
    isOpen: i === index ? !item.isOpen : false
  }))
}
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  height: 0;
  opacity: 0;
}

@media (max-width: 640px) {
  .accordion-item {
    margin-bottom: 1rem;
  }
}
</style>