<template>
  <nav class="navbar">
    <div class="logo">
      <img src="@/assets/logo-pizza.png" alt="Logo" />
    </div>
    <ul class="nav-links">
      <li><router-link to="/">Accueil</router-link></li>
      <li><router-link to="/carte-service">Découvrez notre carte</router-link></li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style>
  .navbar {
    z-index: 1;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: var(--navigation-bar-primary-text-color);
    box-shadow: var(--drop-shadow-card);
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 20px;
  }

  .logo img {
    height: 60px;
    width: auto;
  }

  .nav-links {
    display: flex;
    gap: 20px;
    list-style: none;
  }

  .nav-links li a {
    font-weight: bold;
    color: var(--navigation-bar-third-text-color);
    text-decoration: none;
  }

  .nav-links li a:hover {
    color: var(--navigation-bar-secondary-text-color);
    transition: .5s;
  }

</style>
