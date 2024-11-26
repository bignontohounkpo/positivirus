<template>
  <div class="flex rounded-3xl p-6 hover:shadow-lg transition-shadow" 
    :class="{
      'bg-[#F3F3F3]': variant === 'gray',
      'bg-[#B9FF66]': variant === 'green',
      'bg-black text-white': variant === 'black'
    }">
    <div class="flex-1">
      <h3 class="text-2xl font-bold mb-4">{{ title }}</h3>
      <div class="flex items-center gap-3 mb-4">
        <div class="p-2 rounded-full" 
          :class="variant === 'black' ? 'bg-white' : 'bg-black'">
          <img :src="iconSrc" alt="arrow" class="w-6 h-6" :class="{'invert': variant !== 'black'}">
        </div>
        <p class="text-sm">{{ description }}</p>
      </div>
    </div>
    <div class="flex-1">
      <img :src="imageSrc" :alt="title" class="w-full" :class="{'invert': variant === 'black'}">
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
