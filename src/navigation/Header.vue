<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import User from "../components/icons/User.vue";

const isOpen = ref(false);

const toggleMobileMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMobileMenu = () => {
  isOpen.value = false;
};
</script>

<template>
  <header class="header">
    <div class="header__container">
      <RouterLink to="/" class="header__logo">
        <img src="../images/Logo-SM.svg" alt="logo du site" />
      </RouterLink>

      <button @click="toggleMobileMenu" class="header__menu-button md:hidden">
        <svg v-if="!isOpen" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 9h14a1 1 0 110 2H3a1 1 0 110-2zm0-4h14a1 1 0 110 2H3a1 1 0 110-2zm0 8h14a1 1 0 110 2H3a1 1 0 110-2z" clip-rule="evenodd"></path>
        </svg>
        <svg v-else viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M6 6a.75.75 0 011.06 0L10 8.94l2.47-2.47a.75.75 0 111.06 1.06L11.06 10l2.47 2.47a.75.75 0 11-1.06 1.06L10 11.06l-2.47 2.47a.75.75 0 01-1.06-1.06L8.94 10 6.47 7.53A.75.75 0 016 6z" clip-rule="evenodd"></path>
        </svg>
      </button>

      <nav class="header__menu">
        <RouterLink to="/" class="header__menu-item">Accueil</RouterLink>
        <RouterLink to="/about" class="header__menu-item">À propos</RouterLink>
        <RouterLink to="/habitude" class="header__menu-item">Mes Habitudes</RouterLink>
        <RouterLink to="/connexion" class="header__menu-item">
          <User />
        </RouterLink>
      </nav>

      <div class="header__mobile-menu" :class="{ 'is-open': isOpen }">
        <RouterLink to="/" class="header__menu-item" @click="closeMobileMenu">Accueil</RouterLink>
        <RouterLink to="/about" class="header__menu-item" @click="closeMobileMenu">À propos</RouterLink>
        <RouterLink to="/habitude" class="header__menu-item" @click="closeMobileMenu">Mes Habitudes</RouterLink>
        <RouterLink to="/connexion" class="header__menu-item" @click="closeMobileMenu">
          <User />
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<style setup lang="scss">
.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background: $BlackHeader; 
  padding: rem(10px) rem(20px);
  
}


.header__container {
  max-width: rem(1200px);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__logo img {
  height: rem(40px); 
}

.header__menu-button {
  display: none;
  cursor: pointer;
  background: transparent;
  border: none;

  &:focus {
    outline: none;
  }

  svg {
    width: rem(30px);
    height: rem(30px);
    fill: $white;
  }

  @media (max-width: 768px) {
    display: block; 
  }
}

.header__menu {
  display: flex;
  gap: rem(20px);

  .header__menu-item {
    color: $white;
    text-decoration: none;
    padding: rem(10px) rem(15px);

    &:hover {
      background: $grey800;
      border-radius: rem(5px);
    }
  }

  @media (max-width: 768px) {
    display: none; 
  }
}

.header__mobile-menu {
  display: none;
  position: absolute;
  top: rem(60px); 
  left: 0;
  right: 0;
  background: $BlackHeader;
  padding: rem(10px) rem(20px);
  flex-direction: column;
  gap: rem(10px);

  &.is-open {
    display: flex;
  }

  .header__menu-item {
    color: #fff;
    text-decoration: none;
    padding: rem(10px) rem(15px);
    background: $BlackHeader;
    border-radius: rem(5px);

    &:hover {
      background: $grey800;
    }
  }
}

@media (max-width: 768px) {
  .header__mobile-menu {
    top: rem(70px); 
  }
}
</style>