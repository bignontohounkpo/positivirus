<template>
  <div class="w-full py-12 bg-white">
    <!-- Title Section -->
    <div class="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12">
      <div class="bg-[#B9FF66] py-2 px-4">
        <p class="text-2xl font-bold">Team</p>
      </div>
      <span class="text-sm sm:text-base sm:self-center">
        Meet the Skilled and Dedicated Members of <br>
        Our Digital Marketing Team
      </span>
    </div>

    <!-- Team Grid -->
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="member in teamMembers" 
             :key="member.id" 
             class="bg-white p-6 rounded-2xl border border-gray-200 border-b-4 border-b-black">
          <!-- Header with Image, Info, and LinkedIn -->
          <div class="flex items-start justify-between mb-4">
            <div class="flex gap-4">
              <img :src="member.image" :alt="member.name" class="w-16 h-16 rounded-full object-cover">
              <div>
                <h3 class="text-black font-bold">{{ member.name }}</h3>
                <p class="text-black">{{ member.position }}</p>
              </div>
            </div>
            <a :href="member.linkedin" target="_blank" class="text-[#B9FF66] hover:text-black">
              <img src="/icons/linkedin.svg" alt="LinkedIn" class="w-6 h-6">
            </a>
          </div>

          <!-- Divider -->
          <div class="h-px bg-gray-200 my-4"></div>

          <!-- Description -->
          <p class="text-black">{{ member.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const teamMembers = [
  {
    id: 1,
    name: 'John Smith',
    position: 'CEO & Founder',
    image: '/images/john.svg',
    linkedin: 'https://linkedin.com',
    description: 'With over 10 years of experience in digital marketing, John leads our team with innovative strategies and a passion for client success.'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    position: 'SEO Specialist',
    image: '/images/sarah.png',
    linkedin: 'https://linkedin.com',
    description: 'Sarahs expertise in SEO and data analytics has helped numerous clients achieve top rankings in search results.'
  },
  {
    id: 3,
    name: 'Michael Chen',
    position: 'Content Strategist',
    image: '/images/michael.svg',
    linkedin: 'https://linkedin.com',
    description: 'Michael crafts compelling content strategies that engage audiences and drive meaningful conversions.'
  },
  {
    id: 4,
    name: 'Emily Davis',
    position: 'Social Media Manager',
    image: '/images/emily.svg',
    linkedin: 'https://linkedin.com',
    description: 'Emilys creative approach to social media has helped brands build strong online communities and increase engagement.'
  },
  {
    id: 5,
    name: 'David Wilson',
    position: 'PPC Specialist',
    image: '/images/jane.jpg.svg',
    linkedin: 'https://linkedin.com',
    description: 'Davids analytical mindset and PPC expertise deliver outstanding ROI for our clients advertising campaigns.'
  },
  {
    id: 6,
    name: 'Lisa Thompson',
    position: 'Digital PR Manager',
    image: '/images/jane.svg',
    linkedin: 'https://linkedin.com',
    description: 'Lisa builds strong relationships with media and influencers to enhance our clients digital presence.'
  }
]
</script>

<style scoped>
</style>
