<script lang="ts" setup>
import { ref } from 'vue';

interface Habit {
  id: number;
  title: string;
  description: string;
  completed: boolean; // Nouvelle propriété pour l'état d'accomplissement
}

const { data, refresh } = await useAsyncData('dashboard', async () => {
  const response = await fetch('http://localhost:4000/dashboard', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${useCookie('api_tracking_jwt').value}`,
    },
  });

  return await response.json();
});

const habitToEdit = ref<Habit | null>(null);
const habitToDelete = ref<Habit | null>(null);
const message = ref('');

// Fonction pour basculer l'état d'accomplissement d'une habitude
const toggleHabitCompletion = async (habit: Habit) => {
  habit.completed = !habit.completed;

  const response = await fetch(`http://localhost:4000/habits/${habit.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${useCookie('api_tracking_jwt').value}`,
    },
    body: JSON.stringify({ completed: habit.completed }),
  });

  if (response.ok) {
    refresh(); // Actualiser les données après modification
    message.value = `L'état de l'habitude "${habit.title}" a été mis à jour.`;
  } else {
    message.value = "Erreur lors de la mise à jour de l'habitude.";
  }
};

// Autres fonctions de gestion des habitudes
const toggleEditHabit = (habit: Habit) => {
  habitToEdit.value = habitToEdit.value?.id === habit.id ? null : habit;
};

const resetActions = () => {
  habitToEdit.value = null;
  habitToDelete.value = null;
};

</script>
<template>
    <div class="dashboard__habit-list">
      <ul>
        <li
          v-for="(habit, index) in data.personalHabits"
          :key="index"
          :class="{ 'dashboard__habit-item--completed': habit.completed }"
          class="dashboard__habit-item"
        >
          <div class="dashboard__habit-content">
            <span class="dashboard__habit-title">{{ habit.title }}</span>
            <span class="dashboard__habit-description">{{ habit.description }}</span>
          </div>
  
          <div class="dashboard__habit-buttons">
            <button
              class="dashboard__habit-button dashboard__habit-button--tracking"
              @click="toggleHabitCompletion(habit)"
            >
              {{ habit.completed ? 'Marquer comme non fait' : 'Marquer comme fait' }}
            </button>
  
            <button
              class="dashboard__habit-button dashboard__habit-button--delete"
              @click="resetActions(); habitToDelete = habit"
            >
              Supprimer
            </button>
  
            <button
              class="dashboard__habit-button dashboard__habit-button--edit"
              @click="toggleEditHabit(habit)"
            >
              {{ habitToEdit?.id === habit.id ? 'Annuler' : 'Modifier' }}
            </button>
          </div>
        </li>
      </ul>
  
      <p class="dashboard__message">{{ message }}</p>
    </div>
  </template>
<style setup lang="scss">
.dashboard__habit-button--tracking {
  background-color: $grey100;
  color: $white;
  border: none;

  &:hover {
    background-color: $grey300;
  }
}

.dashboard__habit-item--completed {
  background-color: $grey100;
  border-left: 5px solid $grey400;
}

.dashboard__message {
  margin-top: 2rem;
  font-size: 1rem;
  color: $grey500;
  text-align: center;
}
</style>
  