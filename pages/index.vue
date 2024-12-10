<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";

// Requête Sanity pour récupérer les données de la homepage
const { data: homepage } = await useSanityQuery<SanityDocument>(
    groq`*[_type == "homepage"][0]`
);
</script>

<template>

  <div class="homepage">
    <!-- Section Hero -->
    <div class="homepage__hero">
      <h1 class="homepage__hero-title">{{ homepage?.hero.title }}</h1>
      <p class="homepage__hero-text">{{ homepage?.hero.text }}</p>

      <!-- Image Hero -->
      <img 
        v-if="homepage?.hero.image" 
        :src="homepage?.hero.image.asset.url" 
        alt="Hero Image"
        class="homepage__hero-image"
      />

      <!-- Statistiques du Hero -->
      <div class="homepage__hero-stats">
        <div v-for="(stat, index) in homepage?.hero.stats" :key="index" class="homepage__hero-stat">
          <span class="homepage__stat-value">{{ stat.title }}</span>
          <span class="homepage__stat-text">{{ stat.text }}</span>
        </div>
      </div>
    </div>
    
    <!-- Section Second Part Home -->
    <section class="homepage__secondpart-home">
        <h2 class="homepage__secondpart-title">{{ homepage?.secondparthome.title }}</h2>
      <p class="homepage__secondpart-text">{{ homepage?.secondparthome.text }}</p>

      <!-- Image Section -->
      <div class="post__image" v-if="homepage?.secondparthome.image">
        <SanityImage :asset-id="homepage.secondparthome.image.asset._ref" />
      </div>
    </section>

      <!-- Tâches du Second Part -->
      <div class="homepage__secondpart-stats">
        <div v-for="(task, index) in homepage?.secondparthome.tasks" :key="index" class="homepage__secondpart-stat-card">
          <div class="homepage__stat-card-content">
            <h2 class="homepage__stat-value">{{ task.value }}</h2>
            <p class="homepage__stat-text">{{ task.text }}</p>

            <!-- Image de chaque tâche -->
            <div class="post__image" v-if="task.image">
              <SanityImage :asset-id="task.image.asset._ref" />
            </div>
          </div>
        </div>
      </div>
      <Card v-bind=" homepage?.secondpartstatcard" />
      <TaskCard v-bind=" homepage?.secondparttaskcard" />
    <!-- Titre de la page -->
    <h2 class="homepage__page-title">{{ homepage?.title }}</h2>
  </div>
 
</template>

<style lang="scss" scoped>
.homepage {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 2rem;
  background-color: #f4f4f4;

  /* Hero Section */
  &__hero {
    background-color: #333;
    color: white;
    padding: 3rem;
    border-radius: 10px;
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

  /* Second Part Home Section */
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

  /* Page Title */
  &__page-title {
    font-size: 2.2rem;
    color: #333;
    text-align: center;
    font-weight: bold;
  }
}

/* Responsive Styles */
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

  /* Second Part Cards */
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
