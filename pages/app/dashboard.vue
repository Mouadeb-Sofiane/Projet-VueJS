<script lang="ts" setup>
import { ref } from 'vue';

// Charger les habitudes à partir de l'API
const { data, refresh } = await useAsyncData('dashboard', async () => {
  const response = await fetch('http://localhost:4000/dashboard', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${useCookie('api_tracking_jwt').value}`,
    },
  });

  return await response.json();
});

function onHabitCreated() {
  refresh();
}

function onHabitModified() {
  refresh();
}

function onHabitDeleted() {
  refresh();
  habitToDelete.value = null;
}

const message = ref('');
const habitToEdit = ref(null);
const habitToDelete = ref(null);
</script>

<template>
  <div>
    <h1>Mon dashboard</h1>

    <!-- Habitudes personnelles -->
    <h2>Habitudes Personnelles</h2>
    <ul>
      <li v-for="(habit, index) in data.personalHabits" :key="index">
        {{ habit.title }} : {{ habit.description }}
        <button @click="habitToDelete = habit" style="margin-left: 10px; background-color: red; color: white;">Supprimer</button>
        <button @click="habitToEdit = habit" style="margin-left: 10px;">Modifier</button>
      </li>
    </ul>

    <!-- Formulaire de suppression -->
    <DeleteHabitForm
      v-if="habitToDelete"
      :habit="habitToDelete"
      @habit:deleted="onHabitDeleted"
      @cancel-delete="habitToDelete = null"
    />

    <!-- Formulaire de modification -->
    <ModifyHabitForm
      v-if="habitToEdit"
      :habit="habitToEdit"
      @habit:modified="onHabitModified"
    />

    <AddHabitForm @habit:created="onHabitCreated" />
    <p>{{ message }}</p>
  </div>
</template>
