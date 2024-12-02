<script setup lang="ts">
const habits = [
  {
    icon: "📚",
    title: "Lecture",
    value: 400,
    unit: "pages",
    gradient: "linear-gradient(135deg, #00FF59, #2F80ED)",
    description: (habit) => `J'ai lu ${habit.value} ${habit.unit} en 2 heures par jour, pendant 4 jours.`,
  },
  {
    icon: "🏃‍♀️",
    title: "Sport",
    value: 62.4,
    unit: "calories",
    gradient: "linear-gradient(135deg, #E9B113, #EB5757)",
    description: (habit) =>
      `J'ai dépensé ${habit.value} ${habit.unit} en 4 jours et 8 heures de ${habit.title}.`,
  },
  {
    icon: "🎮",
    title: "Jeux vidéo",
    value: 18,
    unit: "minutes",
    gradient: "linear-gradient(135deg, #E9B113, #2F80ED)",
    description: (habit) =>
      `En 3 jours, j'ai joué en tout ${habit.value} ${habit.unit}.`,
  },
  {
    icon: "",
    title: "Apprendre la langue anglaise",
    value: 256,
    unit: "minutes",
    gradient: "linear-gradient(135deg, #6867F1, #E747A0)",
    description: (habit) =>
      `En 3 jours, j'ai appris l'alphabet anglais en ${habit.value} ${habit.unit}.`,
  },
];
</script>

<template>
  <div class="habitude-cards">
    <div
      v-for="(habit, index) in habits"
      :key="index"
      class="habitude-card"
      :style="{ background: habit.gradient }"
    >
      <div class="habitude-card__header">
        <span class="habitude-card__icon">{{ habit.icon }}</span>
        <h3 class="habitude-card__title">{{ habit.title }}</h3>
      </div>
      <div class="habitude-card__content">
        <span class="habitude-card__value">{{ habit.value }}</span>
        <span class="habitude-card__unit">{{ habit.unit }}</span>
        <p class="habitude-card__description">
          {{ habit.description(habit) }}
        </p>
      </div>
    </div>
  </div>
</template>

<style setup lang="scss">
.habitude-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
  padding-top: rem(80px);
}

.habitude-card {
  padding-top: rem(38px);
  border-radius: 12px;
  color: $white;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    &-icon {
      font-size: 2rem;
      margin-right: 0.5rem;
    }

    &-title {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }

  &__content {
    &-value {
      font-size: 2.5rem;
      font-weight: bold;
      line-height: 1;
    }

    &-unit {
      font-size: 1rem;
      text-transform: uppercase;
      margin-left: 0.5rem;
    }

    &-description {
      font-size: 0.9rem;
      margin-top: 0.5rem;
      line-height: 1.4;
    }
  }
}
</style>