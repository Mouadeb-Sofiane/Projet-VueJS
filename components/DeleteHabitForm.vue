<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  habit: {
    type: Object as () => { id: number; title: string; description: string },
    required: true,
  },
});

const emit = defineEmits(['habit:deleted', 'cancel-delete']);

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
  <div class="confirmation">
    <h3 class="confirmation__title">Confirmer la suppression</h3>
    <p class="confirmation__text">
      Êtes-vous sûr de vouloir supprimer l'habitude : 
      <strong class="confirmation__text--highlight">{{ habit.title }}</strong> ?
    </p>
    <div class="confirmation__actions">
      <button class="confirmation__button confirmation__button--confirm" @click="confirmDelete">Confirmer</button>
      <button class="confirmation__button confirmation__button--cancel" @click="cancelDelete">Annuler</button>
    </div>
    <p class="confirmation__message">{{ message }}</p>
  </div>
</template>

<style lang="scss" scoped>
.confirmation {
  border: 1px solid $grey400;
  padding: 1em;
  margin: 1em 0;
  border-radius: 4px;
  background-color: $grey100;

  &__title {
    font-size: 1.5em;
    margin-bottom: 0.5em;
    color: $grey800;
  }

  &__text {
    margin-bottom: 1em;
    font-size: 1em;
    color: $colorinput;

    &--highlight {
      font-weight: bold;
      color: $black;
    }
  }

  &__actions {
    display: flex;
    gap: 0.5em;
    margin-bottom: 1em;
  }

  &__button {
    padding: 0.5em 1em;
    font-size: 1em;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &--confirm {
      background-color: $error-color;
      color: $white;

      &:hover {
        background-color: $error-color-hover;
      }
    }

    &--cancel {
      background-color: $grey100;
      color: $grey800;

      &:hover {
        background-color: $grey400;
      }
    }
  }

  &__message {
    font-size: 0.9em;
    color: $colorinput;

    &--success {
      color: $green;
    }

    &--error {
      color: $error-color;
    }
  }
}
</style>
