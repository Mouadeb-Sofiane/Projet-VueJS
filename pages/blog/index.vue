<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";

const POSTS_QUERY = groq`*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const { data: posts } = await useSanityQuery<SanityDocument[]>(POSTS_QUERY);
</script>
<template>
    <div class="margin">
        <h1>Blog</h1>
        {{ posts }}
        
    </div>
    
</template>
<style setup lang="scss">
.margin{
    margin-top: 70px;
}
</style>