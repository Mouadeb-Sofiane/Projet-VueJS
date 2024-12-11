<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  habit: {
    type: Object as () => { id: number; title: string; description: string },
    required: true,
  },
});

const emit = defineEmits(['habit:modified']);

const updatedHabitTitle = ref(props.habit.title);
const updatedHabitDescription = ref(props.habit.description);
const message = ref('');

// Fonction pour modifier l'habitude
const modifyHabit = async () => {
  if (!updatedHabitTitle.value || !updatedHabitDescription.value) {
    message.value = 'Veuillez remplir tous les champs.';
    return;
  }

  const response = await fetch(`http://localhost:4000/habits/${props.habit.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${useCookie('api_tracking_jwt').value}`,
    },
    body: JSON.stringify({
      title: updatedHabitTitle.value,
      description: updatedHabitDescription.value,
    }),
  });

  if (response.ok) {
    message.value = 'Habitude modifiée avec succès !';
    emit('habit:modified'); // Émettre un événement pour informer le parent
  } else {
    message.value = "Erreur lors de la modification de l'habitude.";
  }
};
</script>

<template>
  <h2>Modifier l'habitude</h2>
  <form @submit.prevent="modifyHabit">
    <label for="title">Titre de l'habitude :</label>
    <input id="title" v-model="updatedHabitTitle" type="text" />

    <label for="description">Description :</label>
    <input id="description" v-model="updatedHabitDescription" type="text" />

    <button type="submit">Modifier</button>
  </form>
  <p>{{ message }}</p>
</template>
