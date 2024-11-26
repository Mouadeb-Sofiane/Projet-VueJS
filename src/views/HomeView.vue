<script setup lang="ts">
import Toggle from '@/components/Toggle.vue';
import Button from '@/components/Button.vue';
</script>

<template>
  <h1 class="h1">Test</h1>
  <Toggle />
</template>

<style lang="scss">
.h1 {
  color: red;
  &:hover {
    color: green;
  }
}
</style>
