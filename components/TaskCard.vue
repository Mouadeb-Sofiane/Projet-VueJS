<script setup lang="ts">
defineProps<{
  value: string;
  text: string;
  image: { asset: { _ref: string } };
}>();
</script>

<template>
  <div class="homepage__stat-card">
    <div class="homepage__stat-card__image" v-if="image">
      <SanityImage :asset-id="image.asset._ref" />
    </div>
    <div class="homepage__stat-card__content">
      <h2 class="homepage__stat-card__value">{{ value }}</h2>
      <p class="homepage__stat-card__text">{{ text }}</p>
    </div>
  </div>
</template>


<style setup lang="scss">
.homepage__stat-card {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 1rem;
  justify-items: center;
  width: 100%;
  max-width: 300px;
  padding: 20px;
  border-radius: 16px;
  background: linear-gradient(135deg, $white, $grey75);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &__image {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, $pink, $pink-hover);
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    &__value {
      font-size: 2rem;
      font-weight: bold;
      color: $grey850;
      margin: 0;
    }

    &__text {
      font-size: 1rem;
      color: $grey550;
      margin: 0.5rem 0 0;
    }
  }
}

</style>
