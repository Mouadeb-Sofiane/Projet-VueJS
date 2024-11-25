<script lang="ts" setup>
import { ref } from "vue";

// État du bouton bascule (true = activé, false = désactivé)
const isActive = ref(false);

// Fonction pour basculer l'état
const toggleState = () => {
  isActive.value = !isActive.value;
  console.log("Toggle State:", isActive.value ? "true" : "false");
};
</script>

<template>
    <div>
      <div
        :class="['toggle', isActive ? 'true' : 'false']"
        @click="toggleState"
      >
        <div class="track -font"></div>
        <div class="thumb -font"></div>
      </div>
      
      <!-- Affichage du texte True ou False -->
      <p>{{ isActive ? 'True' : 'False' }}</p>
    </div>
</template>
