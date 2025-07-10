<template>
  <footer class="site-footer">
    <div class="footer-content">
      <p>&copy; 2025 MaStructure. Tous droits réservés.</p>
      
      <img src="@/assets/logo-pizza.png" alt="Logo" class="logo"/>
        
      <a
        href="https://www.instagram.com/pizzabiorennes/"
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img class="instagram" src="../assets/instagram.png" alt="">
      </a>

      <a
        href="https://www.facebook.com/p/Pizza-Bio-100070366478077/"
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img class="instagram" src="../assets/facebook.png" alt="">
      </a>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'FooterPart'
  }
</script>

<style>
  .logo {
    width: 100px;
  }
  .instagram {
    width: 30px;
  }
  .site-footer {
    background-color: var(--color-navigation);
    color: var(--navigation-bar-primary-text-color);
    margin-top: 3rem;
  }

  .footer-content {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .footer-links {
    list-style: none;
    padding: 0;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .footer-links a {
    color: var(--navigation-bar-primary-text-color);
    text-decoration: none;
  }

  .footer-links a:hover {
    text-decoration: underline;
  }
</style>
