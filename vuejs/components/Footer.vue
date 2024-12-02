<template>
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__column">
          <h3 class="footer__column-title">À propos</h3>
          <p class="footer__column-text">
            Voici la page A propos de notre site. Vous trouverez ici des informations sur notre entreprise, nos services et notre politique de confidentialité.
          </p>
        </div>
  
        <div class="footer__column">
          <h3 class="footer__column-title">Liens rapides</h3>
          <ul class="footer__column-text">
            <li>
              <NuxtLink to="/" class="footer__column-text">Accueil</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/habitude" class="footer__column-text">Habitude</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/connexion" class="footer__column-text">Inscription</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/connexion" class="footer__column-text">Connexion</NuxtLink>
            </li>
            
          </ul>
        </div>
  
        <div class="footer__column">
          <h3 class="footer__column-title">Contact</h3>
          <p class="footer__column-text">
            Email: 
            <a href="mailto:sofiane.mouadeb.70000@gmail.com" class="footer__column-text">
              sofiane.mouadeb.70000@gmail.com
            </a>
          </p>
          <p class="footer__column-text">
            Téléphone: 
            <a href="tel:+33783889373" class="footer__column-text">+33 7 83 88 93 73</a>
          </p>
        </div>
  
        <div class="footer__column">
          <h3 class="footer__column-title">Suivez-moi</h3>
          <div class="footer__social">
            <a href="#" class="footer__social-link">Facebook</a>
            <a href="#" class="footer__social-link">Twitter</a>
            <a href="#" class="footer__social-link">LinkedIn</a>
          </div>
        </div>
      </div>
  
      <div class="footer__bottom">
        <p>&copy; 2024 Sofiane Mouadeb. Site des habitudes.</p>
      </div>
    </footer>
</template>

<style setup lang="scss">
.footer {
  background-color: $BlackHeader; 
  color: $white; 
  padding: 2rem 0;

  &__container {
    max-width: rem(1200px);
    margin: 0 auto;
    padding: 0 1rem;
    display: grid;
    gap: 2rem;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &__column {
    &-title {
      font-size: 1.25rem;
      font-weight: bold;
      margin-bottom: 1rem;
      color: $white; 
    }

    &-text {
      color: $grey100;

      a {
        color: $white; 
        text-decoration: none;

        &:hover {
          color: $grey400; 
        }
      }
    }
  }

  &__social {
    display: flex;
    gap: 1rem;

    &-link {
      color: $white; 
      font-size: 1.5rem;

      &:hover {
        color: $grey400; 
      }
    }
  }

  &__bottom {
    background-color: $BlackHeader; 
    text-align: center;
    padding: 1rem 0;
    color: $grey400; 
    font-size: 0.875rem;
  }
}
</style>
  

  