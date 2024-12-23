<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useCookie } from '#imports';

const router = useRouter();

const logout = () => {
  useCookie('api_tracking_jwt').value = ''; 

  router.push('/connexion');
};
</script>

<template>
  <button @click="logout" class="deconnexion-btn">
    Déconnexion
  </button>
</template>

<style lang="scss">
.deconnexion-btn {
  padding: 10px 20px;
  font-size: 1rem;
  background-color: $error-color; 
  color: $white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d32f2f; 
  }

  &:focus {
    outline: none;
  }
}
</style>
