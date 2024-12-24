<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";

const { data: homepageData } = await useSanityQuery<SanityDocument>(
  groq`*[_type == "homepage"][0]`
);
</script>
<template>
    <div class="homepage">
      <section class="homepage__thirdpart-home">
        <h2 class="homepage__thirdpart-home-title">
          {{ homepageData?.thirdparthome.title }}
        </h2>
  
        <div class="homepage__pricings">
          <div
            v-for="(pricing) in homepageData?.thirdparthome.princings"
            :key="pricing._key"
            class="homepage__pricings-item"
          >
            <div class="pricing-card">
              <h3 class="pricing-card__title">{{ pricing.title }}</h3>
              <h4 class="pricing-card__subtitle">{{ pricing.subtitle }}</h4>
              <p class="pricing-card__text">{{ pricing.text }}</p>
  
              <ul class="pricing-card__list">
                <li class="pricing-card__list-item">{{ pricing.description }}</li>
                <li class="pricing-card__list-item">{{ pricing.description2 }}</li>
                <li class="pricing-card__list-item">{{ pricing.description3 }}</li>
              </ul>
  
              <SanityImage
                v-if="pricing.image"
                :asset-id="pricing.image.asset._ref"
                class="pricing-card__image"
                alt="Pricing Image"
              />
              <p class="pricing-card__price">{{ pricing.price }} € / mois</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
<style scoped lang="scss">

@mixin box-shadow($blur: 8px, $spread: 4px, $color: $shadow-color) {
  box-shadow: 0 $spread $blur $color;
}

@mixin responsive-breakpoint($breakpoint) {
  @media (max-width: $breakpoint) {
    @content;
  }
}

.homepage {
  &__thirdpart-home {
    padding: 2rem;
    background-color: $background-color;
    border-radius: $border-radius;
    text-align: center;

    &-title {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      font-weight: bold;
      color: $text-color;
    }
  }

  &__pricings {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;

    &-item {
      flex: 1 1 200px;
      max-width: 300px;
    }
  }
}

.pricing-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $white;
  padding: 1.5rem;
  border-radius: 8px;
  @include box-shadow(8px, 4px);

  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    @include box-shadow(12px, 6px);
  }

  &__title {
    font-size: 1.5rem;
    font-weight: bold;
    color: $text-color;
    margin-bottom: 1rem;
    text-align: center;
  }

  &__subtitle {
    font-size: 1.2rem;
    color: darken($text-color, 20%);
    margin-bottom: 0.8rem;
  }

  &__text {
    margin-bottom: 0.5rem;
    text-align: justify;
    font-size: 1rem;
    color: lighten($text-color, 10%);
  }

  &__list {
    margin: 1rem 0;
    padding-left: 1.5rem;
    text-align: left;

    &-item {
      font-size: 0.9rem;
      color: $text-color;
      margin-bottom: 0.5rem;
    }
  }

  &__image {
    width: 64px;
    height: 64px;
    object-fit: contain;
    border-radius: 50%;
    margin-bottom: 1rem;
  }

  &__price {
    font-size: 1.2rem;
    font-weight: bold;
    color: $primary-color;
    margin-top: 1rem;
  }
}

@include responsive-breakpoint(768px) {
  .homepage__pricings {
    flex-direction: column;
    gap: 1rem;
  }

  .homepage__thirdpart-home {
    padding: 1rem;
  }
}
</style>
  