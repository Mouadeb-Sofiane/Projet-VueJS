<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";

const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{title, image, body, "categories": categories[]->{_id, title, slug}} `;
const route = useRoute();

const { data: posts } = await useSanityQuery<SanityDocument>(POST_QUERY, { slug: route.params.slug, });

if(!posts.value){
    throw createError({ statusCode: 404, statusMessage: 'Le post est introuvable.' });
}

</script>

<template>
 <div class="margin" v-if="posts">
   
        <div class="category" v-for="(category, index) in posts.categories" :key="index">
            <h2>{{ category.title }}</h2>
            <p>{{ category.slug.current }}</p>
        </div>
        <h1>{{ posts.title }}</h1>

        <div v-if="posts.image">
            <SanityImage :asset-id="posts.image.asset._ref" />
        </div>
        <SanityContent v-bind="{ blocks: posts.body }" />
        <SanityContent v-bind="{ blocks: posts.category }" />
    

 </div>
</template>

<style setup lang="scss">
.margin{
    margin-top: 70px;
}
</style>