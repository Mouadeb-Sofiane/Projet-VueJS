<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";
import { useRoute } from 'vue-router';

// Requête pour récupérer un post avec ses catégories
const POST_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    title,
    image,
    body,
    "categories": categories[]->{_id, title, slug}
  }
`;

const route = useRoute();

const { data: post } = await useSanityQuery<SanityDocument>(POST_QUERY, {
  slug: route.params.slug,
});

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Le post est introuvable.' });
}
</script>

<template>
  <div class="post margin" v-if="post">
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
      <div class="post__image" v-if="post.image">
        <SanityImage :asset-id="post.image.asset._ref" />
      </div>

      <div class="post__content">
        <SanityContent v-bind="{ blocks: post.body }" />
      </div>
    </div>
  </div>
</template>

<style setup lang="scss">
.post {
  &__title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
    color: #333;
  }

  &__categories {
    margin: 30px 0;
  
    &__header {
      font-size: 1.5rem;
      font-weight: bold;
      color: #555;
      margin-bottom: 15px;
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }

    &__item {
      background-color: #f9f9f9;
      border: 1px solid #ddd;
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
        color: #0070f3;
      }

      &__slug {
        font-size: 0.9rem;
        color: #999;
      }
    }
  }

  &__image {
    margin: 20px 0;

    img {
      max-width: 100%;
      border-radius: 10px;
      display: block;
      margin: 0 auto;
    }
  }

  &__content-container {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  &__content {
    font-size: 1rem;
    line-height: 1.6;
    color: #444;
    margin-top: 20px;

    p {
      margin-bottom: 15px;
    }

    a {
      color: #0070f3;
      text-decoration: underline;

      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
