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
    description: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'
  },

  {
    id: 2,
    name: 'Jane Doe',
    position: 'Director of Operations',
    image: '/images/jane.jpg',
    linkedin: 'https://linkedin.com',
    description: '7+ years of experience in project management and team leadership. Strong organizational and communication skills'
  },
  {
    id: 3,
    name: 'Michael Brown',
    position: 'Senior SEO Specialist',
    image: '/images/michael.svg',
    linkedin: 'https://linkedin.com',
    description: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization'
  },
  {
    id: 4,
    name: 'Emily Johnson',
    position: 'PCC Manager',
    image: '/images/emily.svg',
    linkedin: 'https://linkedin.com',
    description: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis'
  },
  {
    id: 5,
    name: 'Brian Williams',
    position: 'Social Media Specialist',
    image: '/images/brian.svg',
    linkedin: 'https://linkedin.com',
    description: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement'
  },

  {
    id: 6,
    name: 'Sarah Kim',
    position: 'Content Creator ',
    image: '/images/sarah.png',
    linkedin: 'https://linkedin.com',
    description: '2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries'
  }
]
</script>

<style scoped>
</style>
