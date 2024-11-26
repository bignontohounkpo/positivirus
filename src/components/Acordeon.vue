<template>
  <div class="w-full px-4 sm:px-6 md:px-8 lg:px-16">
    <!-- Accordion Header -->
    <div class="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12">
      <div class="bg-[#B9FF66] py-2 px-4">
        <p class="text-2xl font-bold">Our Working Process</p>
      </div>
      <span class="text-sm sm:text-base sm:self-center">
        Step-by-Step Guide to Archieving <br>
        Your Business Goals
      </span>
    </div>

    <!-- Accordion Items -->
    <div class="space-y-4 sm:space-y-6">
      <div 
        v-for="(item, index) in items" 
        :key="index" 
        class="border border-black rounded-2xl transition-all duration-300"
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
            class="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
          >
        </div>
        <div 
          v-show="item.isOpen"
          class="px-4 sm:px-6 pb-4 sm:pb-6 overflow-hidden transition-all duration-500 ease-in-out"
        >
          <p class="text-black ml-8 sm:ml-16 text-sm sm:text-base">{{ item.content }}</p>
        </div>
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
    title: 'What services are included in your digital marketing package?',
    content: 'Our digital marketing package includes SEO optimization, social media management, content creation, email marketing campaigns, PPC advertising, and detailed analytics reporting. We customize our services based on your specific business needs and goals.',
    isOpen: false
  },
  {
    number: '03',
    title: 'How long does it take to see results from digital marketing?',
    content: 'The timeline for seeing results varies depending on factors such as your industry, competition, and chosen strategies. Generally, some initial results can be seen within 3-6 months, with more significant results developing over 6-12 months of consistent effort.',
    isOpen: false
  },
  {
    number: '04',
    title: 'How much does digital marketing cost?',
    content: 'Our digital marketing costs vary based on your business needs, goals, and the scope of services required. We offer customized packages to fit different budgets and provide transparent pricing with no hidden fees.',
    isOpen: false
  },
  {
    number: '05',
    title: 'How do you measure digital marketing success?',
    content: 'We measure success through various metrics including website traffic, conversion rates, engagement rates, ROI, keyword rankings, and more. We provide regular detailed reports and analytics to track progress and adjust strategies as needed.',
    isOpen: false
  },
  {
    number: '06',
    title: 'How do you measure digital marketing success?',
    content: 'We measure success through various metrics including website traffic, conversion rates, engagement rates, ROI, keyword rankings, and more. We provide regular detailed reports and analytics to track progress and adjust strategies as needed.',
    isOpen: false
  }
])

const toggleAccordion = (index) => {
  items.value = items.value.map((item, i) => ({
    ...item,
    isOpen: i === index ? !item.isOpen : false
  }))
}
</script>

<style scoped>
@media (max-width: 640px) {
  .text-base {
    line-height: 1.4;
  }
}
</style>