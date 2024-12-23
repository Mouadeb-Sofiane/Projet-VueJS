<script setup lang="ts">
defineProps<{
  title: string;
  text: string;
  image: { asset: { _ref: string; url: string } };
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
    </div>
  </div>
</template>

<style setup lang="scss">
.homepage__hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  gap: 1.5rem; // Espace entre les éléments

  &__title {
    font-size: 2rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.5rem;
  }

  &__text {
    font-size: 1rem;
    font-weight: 400;
    color: #555;
    margin-bottom: 1rem;
  }

  &__image {
    width: 80px; // Uniforme pour toutes les images
    height: 80px;
    object-fit: cover; // Remplit l'espace sans déformation
    border-radius: 50%;
    border: 2px solid #ddd; // Bordure pour mettre en valeur l'image
    margin-top: 1rem;
  }
}
</style>
