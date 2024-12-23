<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";

const { data: homepage } = await useSanityQuery<SanityDocument>(
    groq`*[_type == "homepage"][0]`
);
</script>
<template>
  <div class="homepage">
    <div class="homepage__hero">
      <h1 class="homepage__hero-title">{{ homepage?.hero.title }}</h1>
      <p class="homepage__hero-text">{{ homepage?.hero.text }}</p>

      <img 
        v-if="homepage?.hero.image" 
        :src="homepage?.hero.image.asset.url" 
        alt="Hero Image"
        class="homepage__hero-image"
      />

      <div class="homepage__hero-stats">
        <div v-for="(stat, index) in homepage?.hero.stats" :key="index" class="homepage__hero-stat">
          <span class="homepage__stat-value">{{ stat.title }}</span>
          <span class="homepage__stat-text">{{ stat.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.homepage {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;

  &__hero {
    background-color: #333;
    color: white;
    padding: 3rem;
    text-align: center;
    margin-bottom: 3rem;

    &-title {
      font-size: 2.8rem;
      margin-bottom: 1.5rem;
      font-weight: bold;
    }

    &-text {
      font-size: 1rem;
      margin-bottom: 2.5rem;
      text-align: justify;
    }

    &-image {
      width: 100%;
      max-width: 600px;
      height: auto;
      margin-top: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }

    &-stats {
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin-top: 2rem;
      flex-wrap: wrap;
    }

    &-stat {
      background-color: #444;
      padding: 1.5rem;
      border-radius: 5px;
      color: #fff;
      width: 180px;
      text-align: center;

      &-value {
        font-size: 1.8rem;
        font-weight: bold;
        margin-bottom: 0.8rem;
      }

      &-text {
        font-size: 1rem;
      }

      &--highlighted {
        background-color: #ff6347;
      }
    }
  }

  &__secondpart-home {
    margin-top: 4rem;
    padding: 3rem;
    background-color: #fff;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

    &-title {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      font-weight: bold;
    }

    &-text {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      color: #555;
    }

    &-image {
      width: 40px;
      max-width: 40px;
      height: 40px;
      margin-top: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }

    &-stats {
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin-top: 2rem;
      flex-wrap: wrap;
    }

    &-stat-card {
      background-color: #444;
      padding: 1.5rem;
      border-radius: 8px;
      color: #fff;
      text-align: center;
      width: 250px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      margin-bottom: 2rem;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
      }

      &-content {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      &-value {
        font-size: 1.8rem;
        font-weight: bold;
        margin-bottom: 0.8rem;
      }

      &-text {
        font-size: 1rem;
        color: #ccc;
      }

      &-image {
        width: 40px;
        max-width: 40px;
        height: auto;
        margin-top: 1rem;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      }
    }
  }

  &__page-title {
    font-size: 2.2rem;
    color: #333;
    text-align: center;
    font-weight: bold;
  }
}

@media (max-width: 768px) {
  .homepage__hero-stats,
  .homepage__secondpart-stats {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .homepage__stat-value {
    font-size: 1.5rem;
  }

  .homepage__stat-text {
    font-size: 0.9rem;
  }

  .homepage__stat-image {
    width: 100%;
    max-width: 120px;
    height: auto;
  }

  .homepage__secondpart-stat-card {
    width: 100%;
    max-width: 300px;
  }

  .homepage__secondpart-stat-card-image {
    width: 100%;
    max-width: 120px;
  }
}

</style>
