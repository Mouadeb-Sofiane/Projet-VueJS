<script setup lang="ts">
defineProps<{
        title: string;
        text: string;
        image: { asset: { _ref: string } };

}>();
</script>

<template>
  <section class="homepage__secondpart-home">
        <h2 class="homepage__secondpart-title">{{ title }}</h2>
      <p class="homepage__secondpart-text">{{ text }}</p>

      <!-- Image Section -->
      <div class="post__image" v-if="image">
        <SanityImage :asset-id="image.asset._ref" />
      </div>
    </section>
</template>

<style lang="scss">
.homepage__secondpart-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr; 
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; 
  }
}

.homepage__secondpart-stat-card {
  padding: 16px;
  border: 1px solid $grey200;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: $white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  .homepage__stat-card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .homepage__stat-value {
    font-size: 24px;
    color: $grey850;
    margin-top: 12px;
  }

  .homepage__stat-text {
    color: $grey500;
    font-size: 16px;
    margin-top: 8px;
    text-align: center;
  }

  .post__image {
    margin-top: 16px;
    width: 100%;
    height: auto;
  }
}
</style>
