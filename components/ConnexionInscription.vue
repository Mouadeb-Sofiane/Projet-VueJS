<script setup lang="ts">

const props = defineProps<{
    variant?: "inscription" | "connexion";
}>();

function getTitreBouton() {
  return props.variant === "inscription" ? "Inscription" : "Connexion";
}

function getText() {
  return props.variant === "inscription"
    ? "Bienvenue sur la page inscription"
    : "Bienvenue sur la page connexion";
}

function getRedirectText() {
  return props.variant === "inscription"
    ? "Vous avez déjà un compte ? connectez-vous"
    : "Vous n'avez pas de compte ? inscrivez-vous";
}

function getRedirectLink() {
  return props.variant === "inscription" ? "/connexion" : "/inscription";
}

</script>

<template>
  <main :class="`home home--${variant}`">
    <div class="home__content">
      <div class="home__form">
        <h1 class="home__title">{{ getText() }}</h1>
        <Form :title="getTitreBouton()" />
        <p class="home__redirect">
          {{ getRedirectText() }}
          <NuxtLink :to="getRedirectLink()" class="home__link">ici</NuxtLink>.
        </p>
      </div>
    </div>
  </main>
</template>

<style setup lang="scss">
.home {
  display: flex;
  flex-direction: column;

  &--connexion {
    background: url("../images/Build-Good-Habits.jpg");
    background-size: cover;
    padding-top: rem(38px);
  }

  &--inscription {
    background: url("../images/Old-New-Habits.jpg");
    background-size: cover;
    padding-top: rem(38px);
  }

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__form {
    flex: 0.67;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  &__title {
    text-align: center;
    color: $black;

    .home--inscription & {
      color: $white;
    }
  }

  &__redirect {
    color: $grey800;
    background-color: $white;
    padding: 2vh 4vh;
    border-radius: rem(8px);
    font-size: small;
  }

  &__link {
    color: $blue;
    text-decoration: underline;
  }
}
</style>