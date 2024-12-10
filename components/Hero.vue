<script setup lang="ts">
defineProps<{
        title: string;
        text: string;
        image: { asset: { _ref: string } }
}>();
</script>
<template>
    <div class="homepage">
    <!-- Section Hero -->
    <div class="homepage__hero">
      <h1 class="homepage__hero-title">{{ title }}</h1>
      <p class="homepage__hero-text">{{ text }}</p>

      <!-- Image Hero -->
      <img 
        v-if="image" 
        :src="image.asset.url" 
        alt="Hero Image"
        class="homepage__hero-image"
      />

      <!-- Statistiques du Hero -->
      

    </div>
    </div>
</template>