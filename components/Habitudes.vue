<script setup lang="ts">
const habits = [
  {
    icon: "📚",
    title: "Lecture",
    value: 18,
    unit: "Livre",
    description: "J'ai lue pendant 3 jours et 19 heures",
    gradient: "linear-gradient(135deg, #56CCF2, #2F80ED)", 
  },
  {
    icon: "💧",
    title: "Entrainement",
    value: "62.4k",
    unit: "calories",
    description: "A la place de 116 Big Macs 🍔 Je vais m'entraîner pendant 4 jours et 8 heures.",
    gradient: "linear-gradient(135deg, #F2994A, #EB5757)",
  },
  {
    icon: "🎮",
    title: "Jeux",
    value: 18,
    unit: "Jeux",
    description: "J'ai joué pendant 3 jours et 19 heures",
    gradient: "linear-gradient(135deg, #E9B113, #2F80ED)",
  },
  {
    icon: "🏃‍♀️",
    title: "Sport",
    value: 62.4,
    unit: "km",
    description: "A la place de 116 Big Macs 🍔 Je vais m'entraîner pendant 4 jours et 8 heures.",
    gradient: "linear-gradient(135deg, #E9B113, #EB5757)",
  }
];
</script>

<template>
  <h2 class="dashboard__subtitle">Les habitudes les plus populaires</h2>
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
          <p class="habitude-card__description">{{ habit.description }}</p>
        </div>
      </div>
    </div>
</template>

<style setup lang="scss">
.dashboard__subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
}
.habitude-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.habitude-card {
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