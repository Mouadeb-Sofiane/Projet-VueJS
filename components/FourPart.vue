<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";

// Requête Sanity pour récupérer les données de la page d'accueil
const { data: homepage } = await useSanityQuery<SanityDocument>(
  groq`*[_type == "homepage"][0]`
);
</script>

<template>
  <section class="homepage__testimonials">
    <h2 class="homepage__testimonials-title">{{ homepage?.fourthparthome.titre }}</h2>

    <div class="homepage__testimonials-wrapper">
      <div class="homepage__testimonials-list">
        <div 
          v-for="(temoignage, index) in homepage?.fourthparthome.temoignages" 
          :key="temoignage._key" 
          class="homepage__testimonials-item"
        >
          <div class="homepage__testimonials-item-content">
            <h3 class="homepage__testimonials-item-title">{{ temoignage.titre }}</h3>

            <div class="homepage__testimonials-item-image" v-if="temoignage.image">
              <SanityImage :asset-id="temoignage.image.asset._ref" />
            </div>

            <p class="homepage__testimonials-item-position">{{ temoignage.position }}</p>
            <p class="homepage__testimonials-item-name">{{ temoignage.nom }} - {{ temoignage.entreprise }}</p>
            <p class="homepage__testimonials-item-text">{{ temoignage.texte }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.homepage__testimonials {
  padding: 2rem;
  background-color: #f4f4f4;
  position: relative;

  &-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  &-wrapper {
    position: relative;
    overflow: hidden; /* Cache les éléments qui débordent */
  }

  &-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Grille responsive */
    gap: 2rem;
    padding: 1rem 0;
  }

  &-item {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
    }

    &-content {
      text-align: center;
    }

    &-title {
      font-size: 1.2rem;
      font-weight: bold;
      color: #333;
      margin-bottom: 0.5rem;
    }

    &-text {
      font-size: 1rem;
      color: #666;
      margin-bottom: 1rem;
    }

    &-position {
      font-size: 0.9rem;
      color: #888;
    }

    &-name {
      font-size: 1rem;
      font-weight: bold;
      color: #333;
    }

    &-image {
      margin-top: 1rem;
      img {
        width: 164px;
        height: 164px;
        object-fit: cover;
        border-radius: 50%;
      }
    }
  }

  .homepage__testimonials-item-text {
    text-align: justify;
  }
}
</style>
