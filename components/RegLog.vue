<script lang="ts" setup>

const props = defineProps<{
    variant: "register" | "login";
}>();


function getTitreBouton() {
  if (props.variant === 'register') {
    return ('Inscription');
  }

  else if (props.variant === 'login') {
    return ('Connexion');
  }

  else {
    return ('Connexion');
  }
}

function getText()  {
  if (props.variant === 'register') {
    return ('Bienvenue sur la page inscription');}

  else if (props.variant === 'login') {
    return ('Bienvenue sur la page connexion');
  }
  }

  function getRedirectText()  {
    if (props.variant === 'register') {
      return ('Vous avez déjà un compte ? connectez-vous ');}
    else if (props.variant === 'login')
      {return ('Vous n\'avez pas de compte ? inscrivez-vous ');
    }
  }

  function getRedirectLink()  {
    if (props.variant === 'register') {
      return ('/login');}
    else if (props.variant === 'login')
      {return ('/register');
    }
  }

</script>

<template>
    <main
      :class="{'home': true,
                  '-login': variant === 'login',
                  '-register': variant === 'register'}">
  
      <div class="home__content">
        <div class="home__form">
          <h1
            :class="{'title': true,
                  '-login': variant === 'login',
                  '-register': variant === 'register'}">
            {{ getText() }}
          </h1>
          <Form2 :action="variant" :title="getTitreBouton()"/>
          <p
            :class="{'redirect': true,
                  '-login': variant === 'login',
                  '-register': variant === 'register'}">{{ getRedirectText() }} <NuxtLink :to="getRedirectLink()" class="home__link">ici</NuxtLink>.
          </p>
        </div>
      </div>
    </main>
  </template>
  
  <style lang="scss">
  
  .home {
    display: flex;
    flex-direction: column;
  
    &.-login{
      background: url('../images/Build-Good-Habits.jpg');
      background-size: cover;
      padding-top: rem(38px);
    } 
  
    &.-register{
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
  
    &.-register{
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