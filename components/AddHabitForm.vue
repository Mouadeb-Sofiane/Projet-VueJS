<script setup lang="ts">
const response = await fetch('http://localhost:4000/dashboard', {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${useCookie('api_tracking_jwt').value}`,
  },
});

const emit = defineEmits(['habit:created']);
const data = await response.json();

const newHabitTitle = ref('');
const newHabitDescription = ref('');
const message = ref('');

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
    data.personalHabits.push(newHabit);
    message.value = 'Nouvelle habitude ajoutée avec succès !';
    newHabitTitle.value = '';
    emit('habit:created');
    newHabitDescription.value = '';
  } else {
    message.value = "Erreur lors de l'ajout de l'habitude.";
  }
};

const toggleHabitTracking = async (habitId: number, currentStatus: boolean) => {
  const trackingResponse = await fetch(`http://localhost:4000/habit-tracking/${habitId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${useCookie('api_tracking_jwt').value}`,
    },
    body: JSON.stringify({
      completed: !currentStatus,
      date: new Date().toISOString().split('T')[0], // Format YYYY-MM-DD
    }),
  });

  if (trackingResponse.ok) {
    const updatedHabit = await trackingResponse.json();
    const habitIndex = data.personalHabits.findIndex((h: any) => h.id === habitId);
    if (habitIndex !== -1) {
      data.personalHabits[habitIndex].completed = updatedHabit.completed;
    }
  } else {
    message.value = "Erreur lors de la mise à jour du suivi de l'habitude.";
  }
};
</script>

<template>
  <div class="add-habit-form">
    <h2 class="add-habit-form__title">Ajouter une nouvelle habitude</h2>
    <form @submit.prevent="addHabit">
      <div class="add-habit-form__group">
        <label for="title" class="add-habit-form__label">Titre de l'habitude :</label>
        <input id="title" v-model="newHabitTitle" type="text" class="add-habit-form__input" />
      </div>

      <div class="add-habit-form__group">
        <label for="description" class="add-habit-form__label">Description :</label>
        <input id="description" v-model="newHabitDescription" type="text" class="add-habit-form__input" />
      </div>

      <button type="submit" class="add-habit-form__button" :disabled="!newHabitTitle || !newHabitDescription">
        Ajouter
      </button>
    </form>

    <p v-if="message" :class="['add-habit-form__message', message.includes('Erreur') ? 'add-habit-form__message--error' : 'add-habit-form__message--success']">
      {{ message }}
    </p>

    <div class="habit-list">
      <h3>Vos habitudes</h3>
      <ul>
        <li v-for="habit in data.personalHabits" :key="habit.id">
          <span>{{ habit.title }}</span>
          <button @click="toggleHabitTracking(habit.id, habit.completed)">
            {{ habit.completed ? 'Marquer comme non fait' : 'Marquer comme fait' }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.add-habit-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 25px;
  background-color: $grey100;
  border: 1px solid $grey400;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &__title {
    font-size: 1.5rem;
    font-weight: bold;
    color: $grey800;
    margin-bottom: 10px;
  }

  &__group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__label {
    font-weight: bold;
    color: $grey800;
  }

  &__input {
    padding: 12px;
    font-size: 1rem;
    border: 1px solid $grey400;
    border-radius: 5px;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: $blue1;
      outline: none;
    }
  }

  &__button {
    padding: 12px 20px;
    background-color: $blue1;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: $bluehover;
    }

    &:disabled {
      background-color: $grey400;
      cursor: not-allowed;
    }
  }

  &__message {
    margin-top: 20px;
    font-size: 1rem;
    color: $colorinput;

    &--error {
      color: $error-color;
    }

    &--success {
      color: $green;
    }
  }
}
</style>
