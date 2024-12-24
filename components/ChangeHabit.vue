<script lang="ts" setup>
import { ref } from 'vue';

// Définition de l'interface Habit
interface Habit {
  id: number;  // ou string selon votre type d'ID
  title: string;
  description: string;
}

// Utilisation de useAsyncData pour récupérer les données du dashboard
const { data, refresh } = await useAsyncData('dashboard', async () => {
  const response = await fetch('http://localhost:4000/dashboard', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${useCookie('api_tracking_jwt').value}`,
    },
  });

  return await response.json();
});

// Déclaration des variables ref avec les bons types
const habitToEdit = ref<Habit | null>(null);
const habitToDelete = ref<Habit | null>(null);
const message = ref('');

// Fonction pour gérer l'édition de l'habitude
const toggleEditHabit = (habit: Habit) => {
  if (habitToEdit.value?.id === habit.id) {
    habitToEdit.value = null;
  } else {
    habitToEdit.value = habit;
  }
};

// Fonctions pour gérer les événements créés, modifiés et supprimés
function onHabitCreated() {
  refresh();
}

function onHabitModified() {
  refresh();
  habitToEdit.value = null;
}

function onHabitDeleted() {
  refresh();
  habitToDelete.value = null;
}

// Réinitialisation des actions en cours
const resetActions = () => {
  habitToEdit.value = null;
  habitToDelete.value = null;
};
</script>

<template>
  <div class="dashboard">
    <h1 class="dashboard__title">Mon dashboard</h1>

    <h2 class="dashboard__subtitle">Habitudes Personnelles</h2>

    <div class="dashboard__layout">
      <div class="dashboard__forms">
        <AddHabitForm @habit:created="onHabitCreated" class="habit-form habit-form--add" />
        <ModifyHabitForm
          v-if="habitToEdit"
          :habit="habitToEdit"
          @habit:modified="onHabitModified"
          class="habit-form habit-form--edit"
        />
        <DeleteHabitForm
          v-if="habitToDelete"
          :habit="habitToDelete"
          @habit:deleted="onHabitDeleted"
          @cancel-delete="habitToDelete = null"
          class="habit-form habit-form--delete"
        />
      </div>

      <div class="dashboard__habit-list">
        <ul>
          <li 
            class="dashboard__habit-item" 
            v-for="(habit, index) in data.personalHabits" 
            :key="index"
            :class="{ 'dashboard__habit-item--editing': habitToEdit?.id === habit.id }"
          >
            <div class="dashboard__habit-content">
              <span class="dashboard__habit-title">{{ habit.title }}</span>
              <span class="dashboard__habit-description">{{ habit.description }}</span>
            </div>

            <div class="dashboard__habit-buttons">
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
      </div>
    </div>

    <p class="dashboard__message">{{ message }}</p>
  </div>
</template>

<style setup lang="scss"> 
.dashboard {
  &__title {
    margin: 5%;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    color: $grey850;
    text-align: center;
  }

  &__subtitle {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: $grey850;
    text-align: center;
  }

  &__layout {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    margin-top: 2rem;
  }

  &__forms {
    flex: 1;
    max-width: 45%;
  }

  &__habit-list {
    flex: 1;
    max-width: 45%;
    list-style: none;
    padding: 0;
  }

  &__habit-item {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border: 1px solid $grey300;
    border-radius: 8px;
    margin-bottom: 1rem;
    transition: background-color 0.3s ease, border-color 0.3s ease;
    position: relative;
    align-items: center;

    &:hover {
      background-color: $grey50;
    }

    &--editing {
      background-color: $greyedit;
      border-color: $blue1;
    }
  }

  &__habit-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }

  &__habit-title {
    font-size: 1.25rem;
    font-weight: bold;
    color: $grey900;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  &__habit-description {
    font-size: 1rem;
    color: $grey600;
    line-height: 1.5;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  &__habit-buttons {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
    justify-content: center;
    margin-bottom: 1rem;
  }

  &__habit-button {
    padding: 0.5rem 1rem;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
      transform: scale(1.05);
    }

    &--delete {
      background-color: $error-color;
      color: $white;
      border: none;

      &:hover {
        background-color: $error-color-hover;
      }
    }

    &--edit {
      background-color: $blue2;
      color: $white;
      border: none;

      &:hover {
        background-color: $blue1;
      }
    }
  }

  &__message {
    margin-top: 2rem;
    font-size: 1rem;
    color: $grey500;
    text-align: center;
  }
}
</style>
