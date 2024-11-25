<script setup lang="ts">
import { ref } from 'vue';
import Button from './Button.vue';

// Modèle pour les champs du formulaire
const email = ref('');
const password = ref('');

// Fonction de gestion de la soumission du formulaire
function handleSubmit() {
    alert(`Email: ${email.value} | Password: ${password.value}`);
}
</script>

<template>
    <form @submit.prevent="handleSubmit" class="form">
        <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                class="form-input"
                v-model="email"
                required
            />
        </div>

        <div class="form-group">
            <label for="password" class="form-label">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                class="form-input"
                v-model="password"
                required
            />
        </div>

        <Button type="submit" class="form-button">Connexion</Button>
    </form>
</template>

<style lang="scss" scoped>

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: $secondary-color;
}


.form {
    max-width: rem(450px);
    margin: rem(50px) auto;
    padding: rem(20px);
    background: white;
    border-radius: rem(8px);
    box-shadow: 0 rem(4px) rem(6px) rgba(0, 0, 0, 0.1);

    .form-group {
        margin-bottom: rem(16px);

        .form-label {
            display: block;
            margin-bottom: 8px;
            font-size: 14px;
            color: $gray;
        }

        .form-input {
            width: 92%;
            padding: rem(12px) rem(16px);
            font-size: rem(16px);
            border: 1px solid $gray;
            border-radius: rem(4px);
            transition: border-color 0.3s;

            &:focus {
                border-color: $primary-color;
                outline: none;
            }
        }
    }

    .form-button {
        width: 100%;
        padding: rem(12px) rem(16px);
        background-color: $primary-color;
        color: white;
        font-size: rem(16px);
        font-weight: bold;
        text-align: center;
        border: none;
        border-radius: rem(4px);
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
            background-color: darken($primary-color, 10%);
        }

        &:disabled {
            background-color: lighten($primary-color, 20%);
            cursor: not-allowed;
        }
    }
}
</style>
