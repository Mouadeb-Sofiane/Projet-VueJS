<script setup lang="ts">
import { ref } from 'vue';
import Button from './Button.vue';
import HideIcon from '../components/icons/Hide.vue';
import ShowIcon from '../components/icons/Show.vue';


const email = ref('');
const password = ref('');
const showPassword = ref(false);

defineProps <{
    title : string;     
}>();

function handleSubmit() {
    alert(`Email: ${email.value} | Password: ${password.value}`);
}
</script>

<template>
    <form @submit.prevent="handleSubmit" class="form">
        <div>
            <h1 class="form__title">{{ title }}</h1>
        </div>
        <div class="form__group">
            <label for="email" class="form__label">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                class="form__input"
                v-model="email"
                required
            />
        </div>

        <div class="form__group">
            <label for="password" class="form__label">Password</label>
            <div class="form__password-wrapper">
                <input
                    :type="showPassword ? 'text' : 'password'"
                    id="password"
                    name="password"
                    class="form__input"
                    v-model="password"
                    required
                />
                <button
                    type="button"
                    class="form__toggle-password"
                    @click="showPassword = !showPassword"
                     >
                     <ShowIcon class="form__icon" v-if="!showPassword" />
                     <HideIcon class="form__icon" v-else />
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
    color: $black;
    border-radius: rem(8px);
    box-shadow: 0 rem(4px) rem(6px) rgba(0, 0, 0, 0.1);

    &__title {
        text-align: center;
        color: $black;
    }
    
    &__btn {
        text-align: center;;
    }
        &__group {
            margin-bottom: rem(16px);

            &__label {
                display: block;
                margin-bottom: rem(8px);
                font-size: rem(14px);
                color: $black;
            }
        }


        &__input {
            width: 100%;
            padding: rem(12px) rem(16px);
            font-size: rem(16px);
            border-radius: rem(4px);
            transition: border-color 0.3s;

            &:focus {
                border-color: $primaryColor;
                outline: none;
            }
        }
        &__password-wrapper {
            display: flex;

        &__toggle-password {
            position: absolute;
            top: 50%;
            right: rem(12px);
            transform: translateY(-50%);
            border-radius: rem(4px);
            background: $white;
            border: none;
        }
      }
    }

    .form-button {
        align-items: center;
        &:hover {
            background-color: darken($primaryColor, 10%);
        }

        &:disabled {
            background-color: lighten($primaryColor, 20%);
            cursor: not-allowed;
        }
    }

</style>
