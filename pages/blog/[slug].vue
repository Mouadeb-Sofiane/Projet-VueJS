<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";

const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;
const route = useRoute();

const { data: post } = await useSanityQuery<SanityDocument>(POST_QUERY, { slug: route.params.slug, });

if(!post.value){
    throw createError({ statusCode: 404, statusMessage: 'Le post est introuvable.' });
}

</script>

<template>
 <div class="margin" v-if="post">
    une page d'article de blog : {{ post }}
    <h1>{{ post.title }}</h1>
        <div v-if="post.image">
            <SanityImage :asset-id="post.image.asset._ref" />
        </div>
    <SanityContent v-bind="{ blocks: post.body }" />

 </div>
</template>

<style setup lang="scss">
.margin{
    margin-top: 70px;
}
</style>