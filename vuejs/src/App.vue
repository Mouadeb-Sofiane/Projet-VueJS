<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './navigation/Header.vue';
import Footer from './navigation/Footer.vue';
</script>

<template class="body">
  <Header />
    <RouterView />
  <Footer />
</template>