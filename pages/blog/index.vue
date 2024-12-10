<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";
import useSanityImage from "~/composable/useSanityImage";


const filter = ref ('');

const page = ref (1);
const perPage = 3;

const paginationStart = computed(() => (page.value - 1) * perPage);
const paginationEnd = computed(() => page.value * perPage);

const TotalPage = computed(() => 
  Math.ceil((postCount.value || 0) / perPage));

const { urlFor } = useSanityImage();

const { data : postCount } = await useSanityQuery<number>(groq`count(*[
  _type == "post"
  && defined(slug.current)
  && ($filter == '' || $filter in (categories[]->slug.current))
])`,{filter});


const POSTS_QUERY = groq`*[
  _type == "post"
  && defined(slug.current)
  && ($filter == '' || $filter in (categories[]->slug.current))   
]|order(publishedAt desc)[$start...$end]{_id, title, image, "categories": categories[]->{_id, title, slug}, slug, publishedAt}`;

const { data: posts } = await useSanityQuery<SanityDocument[]>(POSTS_QUERY,{filter: filter, start: paginationStart, end: paginationEnd});

useSeoMeta({
  title: ' Le foot',
  description:
    "Le foot est une communauté francophone et d'aventuriers passionnés par le football.",
  ogDescription:
    " Le foot est une communauté francophone et d'aventuriers passionnés par le football.",
  ogTitle: "Le foot",
  ogImage: "/algeria.jpg",
});


const { data: categories } = await useSanityQuery<SanityDocument[]>(groq`*[
    _type == "category"
    && defined(slug.current)]`)

function onCategoryClick(category: SanityDocument) {
    if (filter.value === category.slug.current) {
        filter.value = '';
    } else {
        filter.value = category.slug.current
    }
    page.value = 1
}

function onPageClick(index: number) {
    page.value = index;
}

</script>

<template>
    <div class="margin blog">
      <h1 class="blog__title">Blog</h1>
        <div v-for="n in TotalPage" :key="n" @click="onPageClick(n)">
            Page {{ n }}
        </div>
        <div>
            filtre : {{ filter }}
            <div>
                <Button class="blog__filter" v-for="(category, index) in categories" :key="index" >
                    <NuxtLink class="blog__category"  @click="onCategoryClick(category)">
                        {{ category.title }}
                    </NuxtLink>
                </Button>
                
            </div>
        </div>
      </div>
      <div class="blog__post-list">
        <div class="blog__post" v-for="(post, index) in posts" :key="index">

            <div class="blog__categories">
                <Button
                    class="blog__categories__item"
                    v-for="(category, Cindex) in post.categories"
                    :key="Cindex"
                >
                {{ category.title }}
                </Button>
            </div>
            <img class="blog__image" v-if="post.image" :src="urlFor(post.image)?.url()" alt="Image du post" />
    
            <Button>
                <NuxtLink class="blog__post-title" :to="`/blog/${post.slug.current}`">
                    {{ post.title }}
                </NuxtLink>
            </Button>
        </div>
      </div>
</template>
  
<style setup lang="scss">
.margin {
  margin-top: 70px;
}

.blog {
  &__post-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
    gap: 20px;
  }

  &__post {
    background-color: #f9f9f9;
    border: 1px solid #e0e0e0;
    padding: 20px;
    border-radius: 8px;
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-5px);
    }
  }

  &__post-title {
    font-size: 1.5rem;
    color: white;
    margin-bottom: 10px;
    text-decoration: none;
  }

  &__categories {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 15px;

    &__item {
      background-color: #0070f3;
      color: white;
      padding: 5px 10px;
      border-radius: 5px;
      font-size: 0.9rem;
    }
  }

  &__image {
    max-width: rem(400px); 
    height: rem(250px);
    border-radius: 8px;
    margin-top: 10px;
    object-fit: cover; 
  }

  &__filter {
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #e0e0e0;
    color : black;
    margin-right: 10px;
    border: none;

    &:hover {
      background-color: #626060;
      color : white;
    }
  }
}

@media (max-width: 1024px) {
  .blog__post-list {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .blog__post-title {
    font-size: 1.2rem;
  }
}

@media (max-width: 768px) {
  .blog__post-list {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
    gap: 15px;
  }

  .blog__post {
    padding: 15px;
  }

  .blog__post-title {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .blog__post-list {
    grid-template-columns: 1fr; 
  }

  .blog__image {
    height: 180px; 
  }

  .blog__post-title {
    font-size: 0.9rem;
  }
}

</style>