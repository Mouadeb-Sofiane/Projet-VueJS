<script setup lang="ts">
defineProps<{
  title: string;
  text: string;
  image: { asset: { _ref: string; url: string } };
}>();
</script>

<template>
  <div class="homepage">
    <div class="homepage__hero">
      <h1 class="homepage__hero-title">{{ title }}</h1>
      <p class="homepage__hero-text">{{ text }}</p>

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
  background-color: $white;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  gap: 1.5rem; 

  &__title {
    font-size: 2rem;
    font-weight: 600;
    color: $grey850;
    margin-bottom: 0.5rem;
  }

  &__text {
    font-size: 1rem;
    font-weight: 400;
    color: $grey600;
    margin-bottom: 1rem;
  }

  &__image {
    width: 80px; 
    height: 80px;
    object-fit: cover; 
    border-radius: 50%;
    border: 2px solid $grey300; 
    margin-top: 1rem;
  }
}
</style>
