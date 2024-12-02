<script setup lang="ts">
import { ref } from 'vue';

const usagePercentage = ref(85); 
</script>

<template>
  <div class="home">

    <main class="home__main">
      <section class="home__section">
        <h2 class="home__section-title">Pourquoi les habitudes ?</h2>
        <p class="home__section-text">
          Les bonnes habitudes construisent un avenir meilleur. Que vous vouliez être plus productif, 
          en meilleure santé ou plus organisé, cela commence par une routine. Notre plateforme vous 
          offre la possibilité de suivre vos habitudes quotidiennes et de les analyser pour 
          vous aider à améliorer votre quotidien. Et ainsi, gagner en productivité et en santé. Le 
          plus important, vous vous sentir mieux et vous aider à atteindre vos objectifs. 
        </p>
      </section>

      <section class="home__section">
        <h2 class="home__section-title">Nos clients</h2>
          <div class="home__progress">
            <svg class="home__progress-circle" viewBox="0 0 36 36">
            <circle class="home__progress-bg" cx="18" cy="18" r="16"/>
              <circle
                class="home__progress-value"
                cx="18"
                cy="18"
                r="16"
                :style="{ strokeDashoffset: (100 - usagePercentage) * 100 / 100 }"
              />
            </svg>
            <span class="home__progress-text">{{ usagePercentage }}%</span>
          </div>
            <p class="home__section-text">
              Actuellement, <span class="home__highlight">{{ usagePercentage }}%</span> de nos clients utilisent notre plateforme quotidiennement. Rejoignez-les pour améliorer vos habitudes dès aujourd'hui !
            </p>
      </section>

      <section class="home__features">
        <h2 class="home__section-title">Fonctionnalités principales</h2>
        <ul class="home__features-list">
          <li class="home__feature">
            <span class="home__feature-icon">✔️</span> Suivez vos habitudes quotidiennes.
          </li>
          <li class="home__feature">
            <span class="home__feature-icon">📊</span> Analysez vos progrès avec des statistiques.
          </li>
          <li class="home__feature">
            <span class="home__feature-icon">⏰</span> Recevez des rappels pour rester motivé.
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<style lang="scss">
.home {
  
  text-align: center;
  padding: 2rem;
  color: $black;
  padding-bottom: rem(16px);
  
  &__main {
    padding-top: rem(38px);
    max-width: rem(800px);
    margin: 0 auto;
  }

  &__progress {
    position: relative;
    display: inline-block;
    width: rem(120px);
    height: rem(120px);
    margin: 1rem auto;

    &-circle {
      width: 100%;
      height: 100%;
      transform: rotate(-90deg);
    }

    &-bg {
      fill: none;
      stroke: $grey100; 
      stroke-width: 4;
    }

    &-value {
      fill: none;
      stroke: $primaryColor; 
      stroke-width: 4;
      stroke-dasharray: 100;
      stroke-dashoffset: 25;
      transition: stroke-dashoffset 0.5s ease;
    }

    &-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 1.2rem;
      font-weight: bold;
      color: $primaryColor;
    }
  }

  &__highlight {
    font-weight: bold;
    color: $primaryColor; 
    font-size: 1.2rem;
  }

  &__section {
    margin-bottom: 2rem;

    &-title {
      font-size: 2rem;
      margin-bottom: 1rem;
      color: $black;
      font-weight: bold ;
    }

    &-text {
      font-size: 1rem;
      line-height: 1.6;
      color: $black;
      text-align: justify;
    }

  }

  &__features {
    &-list {
      list-style: none;
      padding: 0;

      .home__feature {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;

        &-icon {
          font-size: 1.5rem;
          margin-right: 0.5rem;
          color: $primaryColor;
        }
      }
    }
  }
}
</style>