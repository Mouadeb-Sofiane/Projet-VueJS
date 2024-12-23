<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";
import FourPart from "~/components/FourPart.vue";
import SecondPartStat from "~/components/SecondPartStat.vue";

// Requête Sanity pour récupérer les données de la homepage
const { data: homepage } = await useSanityQuery<SanityDocument>(
    groq`*[_type == "homepage"][0]`
);
</script>

<template>
  <!-- <pre>
  {{ homepage }}
  </pre> -->
  <div class="homepage">

    <StatHero v-bind=" homepage?.hero.stats" /> 
    <PriceCard v-bind=" homepage?.thirdparthome.princings" />
        <SecondPartStat v-bind=" homepage?.secondparthome.tasks" />       
          <FourPart v-bind=" homepage?.fourthparthome.temoignages" />
  </div>
 
</template>

<style lang="scss" scoped>

.homepage {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #F4F4F4;
  margin-top: 3%;
}

</style>
