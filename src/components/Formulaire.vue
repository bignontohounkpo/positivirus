<template>
        <div class="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12">
      <div class="bg-[#B9FF66] py-2 px-4">
        <p class="text-2xl font-bold">Contact Us</p>
      </div>
      <span class="text-sm sm:text-base sm:self-center">
        Connect with Us: Let's Discuss Your <br>
        Digital Marketing Needs
      </span>
    </div>

  <div class=" px-4 py-2 bg-[#F3F3F3] rounded-xl justify-between">
    <!-- Form Section -->
    <div class="p-8 flex flex-col md:flex-row items-center md:items-start gap-8 relative">
      <!-- Left Form -->
      <div class="flex-1 w-full max-w-md mx-auto md:max-w-none">
        <div class="flex items-center justify-center md:justify-start gap-4 mb-6">
          <label class="flex items-center gap-2">
            <input type="radio" name="contact" value="Say Hi" class="text-[#B9FF66]" checked />
            <span class="text-gray-700">Say Hi</span>
          </label>
          <label class="flex items-center gap-2">
            <input type="radio" name="contact" value="Get a Quote" class="text-[#B9FF66]" />
            <span class="text-gray-700">Get a Quote</span>
          </label>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              class="w-full mt-1 border rounded-lg px-4 py-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none"
            />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              class="w-full mt-1 border rounded-lg px-4 py-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none"
              required
            />
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-700">Message*</label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              rows="4"
              class="w-full mt-1 border rounded-lg px-4 py-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      <!-- Right Decorative Section -->
      <div class="hidden md:block flex-1">
        <div class="flex justify-end  items-center">
            <img src="/images/form.png" alt="" class=" h-96 object-contain">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const handleSubmit = () => {
  alert("Message sent!");
};
</script>

<style scoped>

</style>