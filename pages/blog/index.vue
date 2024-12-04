<script setup lang="ts">
// Imports nécessaires
import type { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Configuration de la page
definePageMeta({ layout: "minimal" });

// === Données Réactives ===
const filter = ref(""); // Filtre actif (catégorie sélectionnée)
const page = ref(1); // Page actuelle
const perPage = 3; // Nombre d'éléments par page

// === Calculs Dérivés ===
const paginationStart = computed(() => (page.value - 1) * perPage);
const paginationEnd = computed(() => page.value * perPage);

// === Récupération des Catégories ===
const { data: categories } = await useSanityQuery<SanityDocument[]>(
  groq`*[ _type == "category" && defined(slug.current) ]`
);

// === Compte des Posts ===
const { data: postsCount } = await useSanityQuery<number>(
  groq`count(*[
    _type == "post" 
    && defined(slug.current) 
    && ($filter == '' || $filter in (categories[]->slug.current))
  ])`,
  { filter }
);

// === Calcul des Pages Totales ===
const totalPages = computed(() =>
  Math.ceil((postsCount.value || 0) / perPage)
);

// === Récupération des Posts (Filtrés et Paginés) ===
const { data: posts } = await useSanityQuery<SanityDocument[]>(
  groq`*[ 
    _type == "post" 
    && defined(slug.current) 
    && ($filter == '' || $filter in (categories[]->slug.current))
  ]|order(publishedAt desc)[$start...$end]{
    _id, image, title, "categories": categories[]->{title, slug}, slug, publishedAt
  }`,
  { filter: filter, start: paginationStart, end: paginationEnd }
);

// === Gestion des Images ===
const { projectId, dataset } = useSanity().client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

// === Méthodes ===
/** Gestion du clic sur une catégorie */
function onCategoriesClick(categorie: SanityDocument) {
  filter.value =
    filter.value === categorie.slug.current ? "" : categorie.slug.current;
  page.value = 1; // Réinitialise la page lors d'un changement de filtre
}

/** Gestion du clic sur une page de pagination */
function onPageClick(index: number) {
  page.value = index;
}
</script>
<template>
  <div class="l-blog">
    <!-- Titre -->
    <h1>Blog</h1>

    <!-- Pagination -->
    <div class="p-blog_pagination">
      <div
        v-for="n in totalPages"
        :key="n"
        class="pagination__item"
        :class="{ active: n === page }"
        @click="onPageClick(n)"
      >
        Page {{ n }}
      </div>
    </div>

    <!-- Filtres par Catégorie -->
    <div class="p-blog_filters">
      <h2>Filtres</h2>
      <div
        v-for="(categorie, index) in categories"
        :key="index"
        class="blog__filter"
      >
        <button
          :class="{ active: filter === categorie.slug.current }"
          @click="onCategoriesClick(categorie)"
        >
          {{ categorie.title }}
        </button>
      </div>
    </div>

    <!-- Liste des Posts -->
    <ul v-if="posts && posts.length" class="p-blog_list">
      <li
        v-for="(post, index) in posts"
        :key="index"
        class="blog__item"
      >
        <div class="blog__categories">
          <span v-for="(categorie, i) in post.categories" :key="i">
            {{ categorie.title }}
          </span>
        </div>
        <h3>
          <NuxtLink :to="`/blog/${post.slug.current}`">
            {{ post.title }}
          </NuxtLink>
        </h3>
        <img
          v-if="post.image"
          :src="urlFor(post.image)?.url()"
          alt="Image du post"
        />
      </li>
    </ul>

    <!-- Message Aucun Résultat -->
    <p v-else>Aucun résultat trouvé.</p>
  </div>
</template>

<style setup lang="scss">
.l-blog {
  .p-blog_pagination {
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 1rem 0;
    .pagination__item {
      cursor: pointer;
      &.active {
        font-weight: bold;
      }
    }
  }

  .p-blog_filters {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem 0;
    .blog__filter {
      button {
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        background-color: #f9f9f9;
        border: 1px solid #ddd; 
        cursor: pointer;
        &.active {
          background-color: #333;
          color: #fff;
        }
      }
    }
  }

  .p-blog_list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap; // Permet de passer à la ligne automatiquement si nécessaire
    gap: 1rem; // Espace entre les cartes
    justify-content: space-between; // Égalise les espaces

    .blog__item {
      flex: 1 1 calc(33.33% - 1rem); // Largeur calculée pour 3 cartes par ligne avec espace
      max-width: calc(33.33% - 1rem); // Limite la largeur des cartes
      box-sizing: border-box; // Inclut padding et border dans les dimensions
      margin-bottom: 1rem;
      padding: 1rem;
      border: 1px solid #ddd;
      border-radius: 0.25rem;
      background-color: #f9f9f9;
      display: flex;
      flex-direction: column;

      h3 {  
        margin: 0;
        a {
          text-decoration: none;  
        }
      }

      img {
        width: 100%;
        height: auto;
        margin-top: 1rem;
      }

      .blog__categories {
        margin-bottom: 0.5rem;
        span {
          margin-right: 0.5rem;
        }
      }
    }
  }
}

// === Responsive Design ===
@media screen and (max-width: 1024px) {
  .p-blog_list {
    .blog__item {
      flex: 1 1 calc(50% - 1rem); // 2 cartes par ligne
      max-width: calc(50% - 1rem);
    }
  }
}

@media screen and (max-width: 768px) {
  .p-blog_list {
    .blog__item {
      flex: 1 1 100%; // 1 carte par ligne
      max-width: 100%;
    }
  }
}

</style>