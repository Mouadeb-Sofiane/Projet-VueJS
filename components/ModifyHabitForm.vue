<script lang="ts" setup>
import { ref, watch } from 'vue';

const props = defineProps({
  habit: {
    type: Object as () => { id: number; title: string; description: string },
    required: true,
  },
});

const emit = defineEmits(['habit:modified']);

const updatedHabitTitle = ref('');
const updatedHabitDescription = ref('');

watch(
  () => props.habit,
  (newValue) => {
    if (newValue) {
      updatedHabitTitle.value = newValue.title;
      updatedHabitDescription.value = newValue.description;
    }
  },
  { immediate: true } 
);

const message = ref('');

const modifyHabit = async () => {
  if (!updatedHabitTitle.value || !updatedHabitDescription.value) {
    alert('Veuillez remplir tous les champs.');
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
    message.value = ('Habitude modifiée avec succès.');
    emit('habit:modified'); 
  } else {
    message.value =("Erreur lors de la modification de l'habitude.");
  }
};
</script>

<template>
  <div class="habit-modify">
    <h2 class="habit-modify__title">Modifier l'habitude</h2>
    <form class="habit-modify__form" @submit.prevent="modifyHabit">
      <div class="habit-modify__field">
        <label for="title" class="habit-modify__label">Titre de l'habitude :</label>
        <input id="title" v-model="updatedHabitTitle" type="text" class="habit-modify__input" />
      </div>

      <div class="habit-modify__field">
        <label for="description" class="habit-modify__label">Description :</label>
        <input id="description" v-model="updatedHabitDescription" type="text" class="habit-modify__input" />
      </div>

      <button type="submit" class="habit-modify__button">Modifier</button>
    </form>
    <p class="habit-modify__message">{{ message }}</p>
  </div>
</template>

<style lang="scss" scoped>
.habit-modify {
  padding: 1.5em;
  border: 1px solid $grey400;
  border-radius: 6px;
  background-color: $grey100;

  &__title {
    font-size: 1.5em;
    margin-bottom: 1em;
    color: $grey800;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  &__field {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }

  &__label {
    font-size: 1em;
    color: $colorinput;
  }

  &__input {
    padding: 0.5em;
    font-size: 1em;
    border: 1px solid $grey400;
    border-radius: 4px;

    &:focus {
      border-color: $blue1;
      outline: none;
      box-shadow: 0 0 4px rgba(0, 123, 255, 0.25);
    }
  }

  &__button {
    padding: 0.75em 1.5em;
    font-size: 1em;
    color: $white;
    background-color: $blue1;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 03s;

    &:hover {
      background-color: $bluehover;
    }
  }

  &__message {
    margin-top: 1em;
    font-size: 0.9em;

    &--success {
      color: $green;
    }

    &--error {
      color: $error-color;
    }
  }
}
</style>
