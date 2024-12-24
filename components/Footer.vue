<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";

const { data: footer } = await useSanityQuery<SanityDocument>(
  groq`*[_type == "footer"][0]`
);
</script>

<template>
  <footer class="footer">
    <div class="footer__container">
    <!-- Section Navigation -->
    <nav class="footer__nav">
      <ul class="footer__nav__list">
        <li v-for="(link, index) in footer?.links" :key="index" class="footer__nav__item">
          <a :href="link.url" class="footer__nav__link">{{ link.label }}</a>
        </li>
      </ul>
    </nav>

    <!-- Section Réseaux sociaux -->
<section class="footer__social">
  <h2 class="footer__social__title">Suivez-nous</h2>
  <ul class="footer__social__list">
    <li v-for="(social, index) in footer?.socialMedia" :key="index" class="footer__social__item">
      <a :href="social.url" target="_blank" rel="noopener noreferrer" class="footer__social__link">
        <SanityImage
          :asset-id="social.logo.asset._ref"
          :alt="social.platform"
          class="footer__social__logo" 
        />
      </a>
    </li>
  </ul>
</section>

<!-- Section Nos Partenaires -->
<section class="footer__partners">
  <h2 class="footer__partners__title">Nos Partenaires</h2>
  <div class="footer__partners__list">
    <div v-for="(partner, index) in footer?.partners" :key="index" class="footer__partners__item">
      <a :href="partner.url" target="_blank" rel="noopener noreferrer">
        <SanityImage
          :asset-id="partner.logo.asset._ref"
          :alt="partner.name"
          class="footer__partners__logo" 
        />
      </a>
    </div>
  </div>
</section>

  </div>
    <!-- Section Copyright -->
    <div class="footer__copyright">
      <p>{{ footer?.copyright }}</p>
    </div>
  </footer>
  
</template>

<style lang="scss" scoped>
.footer {
  background-color: $grey850;
  color: $white;
  padding: 2rem;
  text-align: center;
  font-family: Arial, sans-serif;

  &__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  &__nav {
    margin-bottom: 2rem;

    &__list {
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    &__item {
      list-style: none;
    }

    &__link {
      color: $white;
      text-decoration: none;
      font-size: 1rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__partners {
    margin-bottom: 2rem;

    &__title {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    &__list {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      flex-wrap: wrap;
    }

    &__item {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__logo {
      border-radius: 5px;
      transition: transform 0.3s;
      width: 80px;  
      height: 80px; 
      object-fit: cover;  
      margin: 0 auto;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  &__social {
    margin-bottom: 2rem;

    &__list {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }

    &__item {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__link {
      color: $white;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    &__logo {
      width: 40px;  
      height: 40px; 
      object-fit: contain; 
      margin: 0 auto;
    }
  }

  &__copyright {
    font-size: 0.9rem;
    color: $grey250;
  }
}

</style>
