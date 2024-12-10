<script setup lang="ts">
defineProps<{
    value: string;
    text: string;
    image: { asset: { _ref: string } };

}>();
</script>
<template>
 <div 
      class="homepage__secondpart-stat-card"
    >
      <div class="homepage__stat-card-content">
        <h2 class="homepage__stat-value">{{ value }}</h2>
        <p class="homepage__stat-text">{{ text }}</p>

        <!-- Image de chaque tâche -->
        <div class="post__image" v-if="image">
          <SanityImage :asset-id="image.asset._ref" />
        </div>
      </div>
    </div>
</template>