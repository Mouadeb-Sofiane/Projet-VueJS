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

    <h2>Habitudes Personnelles</h2>
    <ul class="dashboard__habit-list">
      <li 
        class="dashboard__habit-list__item" 
        v-for="(habit, index) in data.personalHabits" 
        :key="index"
      >
        <span class="dashboard__habit-list__item__title">{{ habit.title }}</span>
        <span class="dashboard__habit-list__item__description">{{ habit.description }}</span>

        <button 
          class="dashboard__habit-list__item__button dashboard__habit-list__item__button--delete" 
          @click="resetActions(); habitToDelete = habit"
        >
          Supprimer
        </button>

        <button 
          class="dashboard__habit-list__item__button dashboard__habit-list__item__button--edit" 
          @click="toggleEditHabit(habit)"
        >
          {{ habitToEdit?.id === habit.id ? 'Annuler' : 'Modifier' }}
        </button>
      </li>
    </ul>

    <DeleteHabitForm
      v-if="habitToDelete"
      :habit="habitToDelete"
      @habit:deleted="onHabitDeleted"
      @cancel-delete="habitToDelete = null"
      class="dashboard__form dashboard__form--delete"
    />

    <ModifyHabitForm
      v-if="habitToEdit"
      :habit="habitToEdit"
      @habit:modified="onHabitModified"
      class="dashboard__form dashboard__form--edit"
    />

    <AddHabitForm @habit:created="onHabitCreated" />

    <p class="dashboard__message">{{ message }}</p>

    
  </div>
</template>
