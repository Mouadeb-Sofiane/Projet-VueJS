<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  habit: {
    type: Object as () => { id: number; title: string; description: string },
    required: true,
  },
});

const emit = defineEmits(['habit:deleted']);

const message = ref('');

const confirmDelete = async () => {
  const response = await fetch(`http://localhost:4000/habits/${props.habit.id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${useCookie('api_tracking_jwt').value}`,
    },
  });

  if (response.ok) {
    message.value = 'Habitude supprimée avec succès.';
    emit('habit:deleted'); 
  } else {
    message.value = "Erreur lors de la suppression de l'habitude.";
  }
};

const cancelDelete = () => {
  emit('cancel-delete'); 
};
</script>

<template>
  <div style="border: 1px solid #ccc; padding: 1em; margin: 1em 0;">
    <h3>Confirmer la suppression</h3>
    <p>Êtes-vous sûr de vouloir supprimer l'habitude : <strong>{{ habit.title }}</strong> ?</p>
    <button @click="confirmDelete" style="background-color: red; color: white;">Confirmer</button>
    <button @click="cancelDelete" style="margin-left: 10px;">Annuler</button>
    <p>{{ message }}</p>
  </div>
</template>
