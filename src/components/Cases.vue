<template>
    <div class="w-full py-12 bg-white">
      <!-- Title Section -->
      <div class="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12">
        <div class="bg-[#B9FF66] py-2 px-4">
          <p class="text-2xl font-bold">Case Studies</p>
        </div>
        <span class="text-sm sm:text-base sm:self-center">
          Explore Real-Life Examples of Our Proven Digital Marketing Success <br>
          through Our Case Studies
        </span>
      </div>
  
      <!-- Cards Section -->
      <div class="max-w-5xl mx-auto bg-black p-8 rounded-2xl flex flex-col md:flex-row justify-between items-stretch gap-6">
        <div
          v-for="(item, index) in caseStudies"
          :key="index"
          class="flex-1 text-left px-6 relative"
          :class="{ 'md:border-r md:border-gray-600': index !== caseStudies.length - 1 }"
        >
          <p class="text-gray-300 mb-4">{{ item.description }}</p>
          <a href="#" class="text-[#B9FF66] font-bold flex items-center gap-2 hover:underline">
            Learn more
            <img src="/icons/arrow_green.svg" alt="">
          </a>
        </div>
      </div>
    </div
    >
</template>

<script setup>
const caseStudies = [
  {
    description:
      "For a local restaurant, weimplemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    description:
      "For a B2B software company, we developed an SEO strategy that resulted in a first-place ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    description:
      "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
];
</script>

<style scoped>
.bg-black {
  box-shadow: none;
}
</style>