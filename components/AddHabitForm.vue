<script setup lang="ts">
const response = await fetch('http://localhost:4000/dashboard', {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${useCookie('api_tracking_jwt').value}`,
  },
});

const emit = defineEmits(['habit:created'])

const data = await response.json();

// Variables pour gérer le formulaire
const newHabitTitle = ref('');
const newHabitDescription = ref('');
const message = ref('');

// Fonction pour ajouter une nouvelle habitude
const addHabit = async () => {
  if (!newHabitTitle.value || !newHabitDescription.value) {
    message.value = 'Veuillez remplir tous les champs.';
    return;
  }

  const habitResponse = await fetch('http://localhost:4000/habits', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${useCookie('api_tracking_jwt').value}`,
    },
    body: JSON.stringify({
      title: newHabitTitle.value,
      description: newHabitDescription.value,
    }),
  });

  if (habitResponse.ok) {
    const newHabit = await habitResponse.json();
    // Ajouter la nouvelle habitude dans la liste personnelle
    data.personalHabits.push(newHabit);
    message.value = 'Nouvelle habitude ajoutée avec succès !';
    // Réinitialiser le formulaire
    newHabitTitle.value = '';
    emit('habit:created')
    newHabitDescription.value = '';
  } else {
    message.value = "Erreur lors de l'ajout de l'habitude.";
  }
};
</script>

<template>
    <h2>Ajouter une nouvelle habitude</h2>
      <form @submit.prevent="addHabit">
        <label for="title">Titre de l'habitude :</label>
        <input id="title" v-model="newHabitTitle" type="text" >
  
        <label for="description">Description :</label>
        <input id="description" v-model="newHabitDescription" type="text" >
  
        <button type="submit">Ajouter</button>
      </form>
</template>