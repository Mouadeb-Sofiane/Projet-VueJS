<script setup lang="ts">
import Form from './Form.vue';

const props = defineProps<{
    variant?: "inscription" | "connexion";
}>();

function getImage() {
  if (props.variant === 'inscription') {
    return ('/images/Build-Good-Habits.jpg');
  }

  else if (props.variant === 'connexion') {
    return ('/images/Old-New-Habits.jpg');
  }

}

function getTitreBouton() {
  if (props.variant === 'inscription') {
    return ('Inscription');
  }

  else if (props.variant === 'connexion') {
    return ('Connexion');
  }

}

function getText()  {
  if (props.variant === 'inscription') {
    return ('Bienvenue sur la page inscription');}

  else if (props.variant === 'connexion') {
    return ('Bienvenue sur la page connexion');
  }
  }

  function getRedirectText()  {
    if (props.variant === 'inscription') {
      return ('Vous avez déjà un compte ? connectez-vous ');}
    else if (props.variant === 'connexion')
      {return ('Vous n\'avez pas de compte ? inscrivez-vous ');
    }
  }

  function getRedirectLink()  {
    if (props.variant === 'inscription') {
      return ('/connexion');}
    else if (props.variant === 'connexion')
      {return ('/inscription');
    }
  }


</script>

<template>
  <main :class="{'home': true,
                '-connexion': variant === 'connexion',
                '-inscription': variant === 'inscription'}">

    <div class="home__content">
      

      <div class="home__form">
        <h1 :class="{'title': true,
                '-connexion': variant === 'connexion',
                '-inscription': variant === 'inscription'}">
          {{ getText() }}
        </h1>
        <Form :title="getTitreBouton()"/>
        <p :class="{'redirect': true,
                '-connexion': variant === 'connexion',
                '-inscription': variant === 'inscription'}">{{ getRedirectText() }} <RouterLink :to="getRedirectLink()" class="home__link">ici</RouterLink>.
        </p>
      </div>
    </div>
  </main>
</template>

<style lang="scss">

.home {
  display: flex;
  flex-direction: column;

  &.-connexion{
    background: url('../images/Build-Good-Habits.jpg');
    background-size: cover;
    padding-top: rem(38px);
  } 

  &.-inscription{
    background: url('../images/Old-New-Habits.jpg');
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

  &__image {
    flex: 0.33;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;


    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

   
  }

}

.title {
  text-align: center;
  color: $black;

  &.-inscription{
    color: $white;
  }
}

.subtitle {
  text-align: center;
}

.redirect {
  color: $grey800;
  background-color: $white;
  padding: 2vh 4vh;
  border-radius: rem(8px);
  font-size: small;
}

</style>