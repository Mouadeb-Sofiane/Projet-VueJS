<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";

const POSTS_QUERY = groq`*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, image, slug, publishedAt}`;

const { data: posts } = await useSanityQuery<SanityDocument[]>(POSTS_QUERY );

const { projectId, dataset } = useSanity().client.config();

const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null
</script>
<template>
    <div class="margin">
        <h1>Blog</h1>
            <div v-for="(post, index) in posts" :key="index" >
                <Button>
                    <NuxtLink class="link" :to="`/blog/${post.slug.current}`">{{ post.title }}</NuxtLink>
                </Button>
                <img v-if="post.image" :src="urlFor(post.image)?.url()" alt="">
            </div>
        {{ posts }}  
    </div>
</template>
<style setup lang="scss">
.link{
    text-decoration: none;
    color : white;
}
.margin{
    margin-top: 70px;
}
</style>