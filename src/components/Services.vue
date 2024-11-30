<template>
  <div class="px-12 py-8 mb-16">
    <div class="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12">
      <div class="bg-[#B9FF66] py-2 px-4 w-fit self-center sm:self-auto">
        <p class="text-2xl font-bold">Services</p>
      </div>
      <span class="text-sm sm:text-base text-center sm:text-left sm:self-center">
        At our digital marketing agency, we offer a range of services to help <br>
        businesses grow and succeed online
      </span>
    </div>

    <!-- Services Cards Grid -->
    <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-8 mb-16">
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
      <div class="grid md:grid-cols-2 grid-cols-1 items-center">
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
      const variants = ['gray', 'green', 'black']
      return variants[index % variants.length]
    }
  },
  data() {
    return {
      services: [
        {
          title: 'Search Engine Optimization',
          description: 'Learn More',
          iconSrc: '/icons/arrow.svg',
          imageSrc: '/images/analytics.svg'
        },
        {
          title: 'Pay-per-Click Advertising',
          description: 'Learn More',
          iconSrc: '/icons/arrow.svg',
          imageSrc: '/images/apy.svg'
        },
        {
          title: 'Social Media Marketing',
          description: 'Learn More',
          iconSrc: '/icons/arrow.svg',
          imageSrc: '/images/social.svg'
        },
        {
          title: 'Email Marketing',
          description: 'Learn More',
          iconSrc: '/icons/arrow.svg',
          imageSrc: '/images/email.svg'
        },
        {
          title: 'Content Creation',
          description: 'Learn More',
          iconSrc: '/icons/arrow.svg',
          imageSrc: '/images/content_creation.svg'
        },
        {
          title: 'Analytics and Tracking',
          description: 'Learn More',
          iconSrc: '/icons/arrow.svg',
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