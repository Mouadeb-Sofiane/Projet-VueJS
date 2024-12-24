<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";
import { useRoute } from 'vue-router';
import useSanityImage from "~/composable/useSanityImage";

// Requête pour récupérer un post avec ses catégories
const POST_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    title,
    image,
    body,
    "categories": categories[]->{_id, title, slug}
  }
`;

const { urlFor } = useSanityImage();

const route = useRoute();

const { data: post } = await useSanityQuery<SanityDocument>(POST_QUERY, {
  slug: route.params.slug,
});

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Le post est introuvable.' });
}

useSeoMeta({
    title: `${post.value.title} | trackingAPP`,
    ogTitle: post.value.title,
    ogImage: post.value.image && urlFor(post.value.image) ? urlFor(post.value.image)?.url() : '/algeria.jpg', 
});
</script>

<template>
  <div class="post" v-if="post">
    <h1 class="post__title">{{ post.title }}</h1>

    <div class="post__categories" v-if="post.categories && post.categories.length > 0">
      <h2 class="post__categories__header">Catégories :</h2>
      <div class="post__categories__list">
        <div
          class="post__categories__item"
          v-for="(category, index) in post.categories"
          :key="index"
        >
          <h3 class="post__categories__item__title">{{ category.title }}</h3>
          <p class="post__categories__item__slug">Slug : {{ category.slug.current }}</p>
        </div>
      </div>
    </div>

    <div class="post__content-container">
      <div class="post__content">
        <SanityContent v-bind="{ blocks: post.body }" />
      </div>

      <div class="post__image post__image--right" v-if="post.image">
        <SanityImage :asset-id="post.image.asset._ref" />
      </div>
    </div>
  </div>
</template>

<style setup lang="scss">
.post {
  &__title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 30px;
    text-align: center;
    color: $grey850;
  }

  &__categories {
    margin: 40px 0;

    &__header {
      font-size: 1.5rem;
      font-weight: bold;
      color: $grey600;
      margin-bottom: 20px;
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }

    &__item {
      background-color: $grey50;
      border: 1px solid $grey300;
      border-radius: 8px;
      padding: 15px;
      flex: 1 1 calc(33.33% - 20px); 
      max-width: calc(33.33% - 20px);
      text-align: center;

      @media (max-width: 768px) {
        flex: 1 1 calc(50% - 20px); 
      }

      @media (max-width: 480px) {
        flex: 1 1 100%; 
      }

      &__title {
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 5px;
        color: $blue1;
      }

      &__slug {
        font-size: 0.9rem;
        color: $grey500;
      }
    }
  }

  &__content-container {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    gap: 30px;
    margin-top: 40px;

    @media (max-width: 768px) {
      flex-direction: column-reverse;
    }
  }

  &__content {
    flex: 1;
    font-size: 1rem;
    line-height: 1.6;
    color: $grey700;

    p {
      margin-bottom: 20px;
    }

    a {
      color: $blue1;
      text-decoration: underline;

      &:hover {
        text-decoration: none;
      }
    }
  }

  &__image {
    flex: 0 0 400px; 
    max-width: 400px;
    align-self: flex-start;
    margin-left: auto;
    margin-right: 20px; 

    img {
      max-width: 100%;
      height: auto;
      border-radius: 10px;
      display: block;
    }

    &--right {
      margin-left: 20px;
    }
  }
}
</style>
