<script setup lang="ts">
import { ref } from 'vue';
import Button from './Button.vue';

const email = defineModel('email');
const password = defineModel('password');

function handleSubmit() {
    alert(email.value + ' ' + password.value);
}
</script>
<template>
    <form @submit.prevent="handleSubmit">
        <div>
            <label for="email">Email</label>
            <input type="email" name="email" v-model="email"/>
            
        </div>
        <div>
            <label for="password">password</label>
            <input type="password" name="password" v-model="password"/>
        </div>
        <Button type="submit">Connexion</Button>
    </form>
</template>