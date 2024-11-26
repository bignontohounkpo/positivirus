<template>
  <div class="px-12 py-8">
    <div class="flex gap-4 mb-12">
      <div class="bg-[#B9FF66] py-2 px-4">
        <p class="text-2xl font-bold">Services</p>
      </div>
      <span class="text-sm">
        At our digital marketing agency, we offer a range of services to <br>
        help businesses grow and succeed online. These services include
      </span>
    </div>

    <!-- Services Cards Grid -->
    <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 mb-16">
      <ServiceCard
        v-for="(service, index) in services"
        :key="index"
        :title="service.title"
        :description="service.description"
        :icon-src="service.iconSrc"
        :image-src="service.imageSrc"
        :variant="getVariant(index)"
      />
    </div>

    <!-- New Section with Gray Background -->
    <div class="bg-[#F3F3F3] rounded-3xl p-5">
      <div class="grid lg:grid-cols-2 grid-cols-1 items-center">
        <div class="space-y-6 lg:pr-8 lg:text-left text-center mx-auto max-w-2xl">
          <h2 class="text-4xl font-bold">Let's make things happen</h2>
          <p class="text-lg">
            Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
          </p>
          <button class="bg-black text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
            Get your free proposal
          </button>
        </div>
        <div class="hidden lg:flex justify-end">
          <img src="/images/Frame_19.svg" alt="Contact frame" class="ml-auto">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceCard from './ServiceCard.vue'

export default {
  name: 'Services',
  components: {
    ServiceCard
  },
  methods: {
    getVariant(index) {
      const variants = ['gray', 'green', 'black'];
      return variants[index % 3];
    }
  },
  data() {
    return {
      services: [
        {
          title: 'Search Engine Optimization',
          description: 'Improve your search engine rankings',
          iconSrc: '/icons/arrow_green.svg',
          imageSrc: '/images/analytics.svg'
        },
        {
          title: 'Pay-per-Click Advertising',
          description: 'Reach your target audience effectively',
          iconSrc: '/icons/arrow_green.svg',
          imageSrc: '/images/apy.svg'
        },
        {
          title: 'Social Media Marketing',
          description: 'Engage with your audience on social',
          iconSrc: '/icons/arrow_green.svg',
          imageSrc: '/images/social.svg'
        },
        {
          title: 'Email Marketing',
          description: 'Connect directly with customers',
          iconSrc: '/icons/Arrow1.svg',
          imageSrc: '/images/email.svg'
        },
        {
          title: 'Content Creation',
          description: 'Engaging content that converts',
          iconSrc: '/icons/Arrow1.svg',
          imageSrc: '/images/content_creation.svg'
        },
        {
          title: 'Analytics and Tracking',
          description: 'Data-driven insights for growth',
          iconSrc: '/icons/Arrow1.svg',
          imageSrc: '/images/analytics.svg'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Add any additional custom styles here */
</style>