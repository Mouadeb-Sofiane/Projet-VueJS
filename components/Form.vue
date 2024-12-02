<script setup lang="ts">
const email = ref('');
const password = ref('');
const showPassword = ref(false);

defineProps<{
  title: string;
}>();

function handleSubmit() {
  alert(`Email: ${email.value} | Password: ${password.value}`);
}
</script>

<template>
  <form class="form" @submit.prevent="handleSubmit">
    <div>
      <h1 class="form__title">{{ title }}</h1>
    </div>
    <div class="form__group">
      <label for="email" class="form__label">Email</label>
      <input
        id="email"
        v-model="email"
        type="email"
        name="email"
        class="form__input"
        required
      >
    </div>

    <div class="form__group">
      <label for="password" class="form__label">Password</label>
      <div class="form__password-wrapper">
        <input
          id="password"
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          name="password"
          class="form__input"
          required
        >
        <button
          type="button"
          class="form__toggle-password"
          @click="showPassword = !showPassword"
        >
          <ShowIcon v-if="!showPassword" />
          <HideIcon v-else />
        </button>
      </div>
    </div>
    <div class="form__btn">
      <Button type="submit" class="form-button -long">{{ title }}</Button>
    </div>
  </form>
</template>

<style setup lang="scss">
.form {
  max-width: rem(450px);
  margin: 1rem auto;
  padding: 2.5rem;
  background: white;
  color: black;
  border-radius: rem(8px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &__title {
    text-align: center;
  }

  &__btn {
    text-align: center;
  }

  &__group {
    margin-bottom: rem(16px);

    &__label {
      display: block;
      margin-bottom: rem(8px);
      font-size: rem(14px);
    }
  }

  &__input {
    width: 100%;
    padding: rem(12px) rem(16px);
    font-size: rem(16px);
    border: 1px solid $grey800;
    border-radius: rem(32px);
    transition: border-color 0.3s;
    background-color: $secondary-color;
    padding-right : 10px;

    &:focus {
      border-color: $primaryColor;
      outline: none;
    }
  }

  &__password-wrapper {
    position: relative;
    display: flex;
    align-items: center;

    .form__toggle-password {
      position: absolute;
      top: 50%;
      right: 12px;
      transform: translateY(-50%);
      border: none;
      background: transparent;
      cursor: pointer;
      padding: 0;
    }

    svg {
      width: 20px;
      height: 20px;
      color: $grey400;
    }
  }
}

.form-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: rem(10px) rem(20px);
  font-size: rem(16px);
  border-radius: rem(32px);
  background-color: $primaryColor;
  color: $white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: darken($primaryColor, 10%);
  }

  &:disabled {
    background-color: lighten($primaryColor, 20%);
    cursor: not-allowed;
  }
}
</style>
