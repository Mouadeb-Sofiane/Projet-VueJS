<script lang="ts" setup>
import { ref } from 'vue';

const { data, refresh } = await useAsyncData('dashboard', async () => {
  const response = await fetch('http://localhost:4000/dashboard', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${useCookie('api_tracking_jwt').value}`,
    },
  });

  return await response.json();
});

const habitToEdit = ref(null);
const habitToDelete = ref(null);
const message = ref('');

const toggleEditHabit = (habit) => {
  if (habitToEdit.value?.id === habit.id) {
    habitToEdit.value = null;
  } else {
    habitToEdit.value = habit;
  }
};

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
    color: #333;
    text-align: center;
  }

  &__subtitle {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #333;
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
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 1rem;
    transition: background-color 0.3s ease, border-color 0.3s ease;
    position: relative;
    align-items: center;

    &:hover {
      background-color: #f9f9f9;
    }

    &--editing {
      background-color: #eef6ff;
      border-color: #007bff;
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
    color: #222;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  &__habit-description {
    font-size: 1rem;
    color: #555;
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
      background-color: #ff4e42;
      color: white;
      border: none;

      &:hover {
        background-color: #d93f31;
      }
    }

    &--edit {
      background-color: #4e8ef7;
      color: white;
      border: none;

      &:hover {
        background-color: #3b74c2;
      }
    }
  }

  &__message {
    margin-top: 2rem;
    font-size: 1rem;
    color: #777;
    text-align: center;
  }
}

</style>
