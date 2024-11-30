<template>
  <div class="flex flex-col rounded-3xl p-6 hover:shadow-lg transition-shadow h-full" 
    :class="{
      'bg-[#F3F3F3]': variant === 'gray',
      'bg-[#B9FF66]': variant === 'green',
      'bg-black text-white': variant === 'black'
    }">
    <div class="flex flex-1 mb-6 gap-4">
      <div class="flex-1">
        <h3 class="text-2xl font-bold mb-4">{{ title }}</h3>
      </div>
      <div class="flex-1 flex items-center justify-center">
        <img :src="imageSrc" :alt="title" class="w-full h-32 object-contain" :class="{'invert': variant === 'black'}">
      </div>
    </div>
    
    <!-- Learn More Section at Bottom -->
    <div class="flex items-center gap-3 mt-auto">
      <div class="p-2 rounded-full bg-black" 
        :class="variant === 'black' ? 'bg-white' : 'bg-black'">
        <img src="/icons/Arrow 1.svg" alt="Learn More" class="w-6 h-6" :class="{'invert': variant !== 'black'}">
      </div>
      <a href="#" class="hidden md:block">
        <p class="text-sm font-medium">{{ description }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    iconSrc: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      required: true
    },
    variant: {
      type: String,
      default: 'gray',
      validator: function(value) {
        return ['gray', 'green', 'black'].indexOf(value) !== -1
      }
    }
  }
}
</script>

<style scoped>
</style>
