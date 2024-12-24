<script setup lang="ts">
defineProps<{
        title: string;
        text: string;
}>();
</script>
<template>
    <span class="homepage__stat-value">{{ title }}</span>
    <span class="homepage__stat-text">{{ text }}</span>
</template>
<style lang="scss" scoped>
.homepage {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 2rem;
  background-color: $grey75;

  &__hero {
    background-color: $grey850;
    color: $white;
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
      background-color: $grey700;
      padding: 1.5rem;
      border-radius: 5px;
      color: $white;
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
        background-color: $red;
      }
    }
  }

  &__secondpart-home {
    margin-top: 4rem;
    padding: 3rem;
    background-color: $white;
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
      color: $grey600;
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
      background-color: $grey700;
      padding: 1.5rem;
      border-radius: 8px;
      color: $white;
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
        color: $grey250;
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
    color: $grey850;
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