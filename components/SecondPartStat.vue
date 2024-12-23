<script setup lang="ts">  
import type { SanityDocument } from "@sanity/client";

const { data: homepage } = await useSanityQuery<SanityDocument>(
  groq`*[_type == "homepage"][0]`
);
</script>

<template>
  <div class="homepage__secondpart">
    <h2 class="homepage__secondpart-title">{{ homepage?.secondparthome.title }}</h2>
    
    <div 
      v-for="(task, index) in homepage?.secondparthome.tasks" 
      :key="index" 
      class="homepage__secondpart-card"
    >
      <div class="homepage__secondpart-card-image" v-if="task.image">
        <SanityImage :asset-id="task.image.asset._ref" />
      </div>
      <div class="homepage__secondpart-card-content">
        <h2 class="homepage__secondpart-card-value">{{ task.value }}</h2>
        <p class="homepage__secondpart-card-text">{{ task.text }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.homepage__secondpart {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 3rem;
  align-items: center;
  background-color: #F4F4F4;

  &-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #fff;
    border-radius: 16px;
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(255, 255, 255, 0.7);
    width: 100%;
    max-width: 800px;
    padding: 1rem 1.5rem;
    gap: 1.5rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px) scale(1.01);
      box-shadow: 10px 10px 20px #00000033, -6px -6px 12px rgba(255, 255, 255, 0.8);
    }

    &-image {
      flex-shrink: 0;
      width: 120px;
      height: 120px;
      background: #f5f5f5;
      border-radius: 16px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &-content {
      flex: 1;
      text-align: left;

      &-value {
        font-size: 1.8rem;
        font-weight: bold;
        color: #222;
        margin-bottom: 0.5rem;
      }

      &-text {
        font-size: 1rem;
        color: #555;
        line-height: 1.4;
      }
    }
  }
}
</style>
