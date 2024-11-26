<script setup lang="ts">
import { ref } from 'vue';
import Button from './Button.vue';
import HideIcon from '../components/icons/Hide.vue';
import ShowIcon from '../components/icons/Show.vue';


const email = ref('');
const password = ref('');
const showPassword = ref(false);


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
            <div class="password-wrapper">
                <input
                    :type="showPassword ? 'text' : 'password'"
                    id="password"
                    name="password"
                    class="form-input"
                    v-model="password"
                    required
                />
                <button
                    type="button"
                    class="toggle-password"
                    @click="showPassword = !showPassword"
                     >
                     <ShowIcon v-if="!showPassword" />
                     <HideIcon v-else />
                </button>
            </div>
        </div>
        <div class="form-btn">
            <Button type="submit" class="button -long">Connexion</Button>
        </div>
    </form>
</template>

<style setup lang="scss">

.form {
    max-width: rem(450px);
    margin: rem(50px) auto;
    padding: rem(20px);
    background: white;
    border-radius: rem(8px);
    box-shadow: 0 rem(4px) rem(6px) rgba(0, 0, 0, 0.1);

    .form-btn {
        text-align: center;;
    }
    .form-group {
        margin-bottom: rem(16px);
        text

        .form-label {
            display: block;
            margin-bottom: rem(8px);
            font-size: rem(14px);
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
        .password-wrapper {
            position: relative;

        .toggle-password {
            position: absolute;
            top: 50%;
            right: rem(12px);
            transform: translateY(-50%);
            background: none;
            border: none;
            cursor: pointer;

            svg {
                width: rem(20px);
                height: rem(20px);
            }

            &:hover svg {
                fill: darken($primary-color, 10%);
            }
        }
      }
    }

    .form-button {
        align-items: center;
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
