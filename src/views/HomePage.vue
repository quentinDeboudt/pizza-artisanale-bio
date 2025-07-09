<template>
  <div class="page">
    <!-- Bannière d'accueil -->
    <header class="banner">
      <img class="banner-image" src="../assets/pizza.png" alt="Pizza Artisanale Bio (95%)">
    </header>

    <!-- Section Notre Histoire -->
    <section id="histoire">
      <div class="histoire-text">
        <h2>Bienvenue chez PizzaBio !</h2>
        <p>
          Chez nous, la simplicité rime avec qualité. Nous vous proposons des pizzas artisanales 100 % bio, élaborées avec soin à partir d'ingrédients naturels et sains. 
          Notre pâte est unique : sans matière grasse, sans sucre ajouté, et avec 12 % de sel en moins que la moyenne.
          <br>
          <br>
          Elle est préparée avec seulement quatre ingrédients : de la farine, de l’eau, de la levure et du sel, c’est tout !
          <br>
          Mais ce n’est pas tout : nous laissons notre pâte fermenter pendant au moins 48 heures, pour une digestion plus facile et un goût incomparable.
        </p>
      </div>
      <img class="histoire-image" src="../assets/pizzaBio.png" alt="Notre Histoire">
    </section>

    <!-- Section Carte/Service -->
    <section id="carte">
      <button class="btn-carte">
        <router-link to="/carte-service">Découvrez notre carte</router-link>
      </button>
    </section>

    <!-- Section Contact -->
    <section id="contact">
      <h2>Nos établissements</h2>
      
      <div class="selector-container">
        <div class="restaurant-names">
          <div><p>PIZZA BIO</p> <span>Rue de Nantes</span></div>
          <div><p>PIZZA BIO</p> <span>Av. du G.Leclerc</span></div>
        </div>
        
        <div class="dots">
          <div
            v-for="(restaurant, index) in restaurants"
            :key="index"
            class="dot"
            :class="{ active: selectedIndex === index }"
            @click="selectedIndex = index"
          >
          </div>
          
        </div>

        <div class="restaurant-info">
          <p v-for="(phone, index) in currentRestaurant.phone" :key="index">
            <strong>Tél:</strong> {{ phone }}
          </p>
          <p>{{ currentRestaurant.address }}</p>

          <img :src="currentRestaurant.image" alt="map du restaurant" class="restaurant-map" />

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import map1 from '../assets/Map-rue-de-nantes.png';
  import map2 from '../assets/Map-av-du-Général-Lerclerc.png';

  // Liste des restaurants
  const restaurants = [
    {
      phone: ['02 90 89 34 27', '02 90 89 34 28'],
      address: '244 rue de Nantes 35136 St Jacques de la Lande en face d\'Azur Bio',
      image: map1
    },
    {
      phone: ['02 21 07 83 90'],
      address: '133 av du Général Lerclerc 35700 Rennes en face du Biocoop',
      image: map2
    }
  ];
  

  // Index sélectionné
  const selectedIndex = ref(0);

  // Récupère les données du restaurant sélectionné
  const currentRestaurant = computed(() => restaurants[selectedIndex.value]);
</script>

<style>
  .page {
    background-color: var(--color-background);
    font-family: Arial, sans-serif;
    line-height: 1.6;
  }
  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-family: 'Times New Roman', Times, serif;
  }
  p {
    font-size: 1.1rem;
    color: #444;
  }
  /* header */
  .banner-image {
    margin-top: 40px;
    width: 100%;
    height: auto;
    display: block;
  }
  section {
    margin: 20px;
    max-width: 100%;
  }
  /* histoire */
  #histoire {
    background-color: var(--color-background-card);
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(var(--drop-shadow-card));
  }
  .histoire-text {
    max-width: 600px;
    margin: 20px;
    font-size: 1.2rem;
    color: #333;
  }
  .histoire-image {
    width: 400px;
    margin: 10px;
    height: auto;
    border-radius: 8px;
    margin-left: 20px;
  }

  /* carte */
  #carte {
    background-image: url('../assets/menu.png');
    height: 400px;
    margin: 20px;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    filter: drop-shadow(var(--drop-shadow-card));
    background-repeat: no-repeat;
  }

  .btn-carte {
    background-color: var(--dot-primary-color);
    font-size: 1.4rem;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .btn-carte a{
    
    color: var(--color-background);
    text-decoration: none;
  }
  
  .btn-carte:hover {
    background-color: #30730F;
    transition: background-color 0.3s ease;
    
  }

  /* list restaurants */
  #contact {
    background-color: var(--color-background-card);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(var(--drop-shadow-card));
  }
  .selector-container {
    text-align: center;
  }
  .restaurant-names {
    display: flex;
    justify-content: center;
    gap: 60px;
    margin-bottom: 1rem;
  }
  .restaurant-names div {
    display: flex;
    flex-direction: column;
  }

  .dots {
    display: flex;
    justify-content: center;
    margin-bottom: -.5rem;
    gap: 150px;
  }

  .dot {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #ccc;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .dot.active {
    background-color: var(--dot-primary-color);
  }

  .restaurant-info {
    border-top: 1px solid #ddd;
    padding-top: 1rem;
  }

  .restaurant-map {
    width: 450px;
    height: auto;
    border-radius: 10px;
  }

  @media (max-width: 866px) {

    #histoire {
      display: flex;
      flex-direction: column;
    }

  }

  @media (max-width: 530px) {
    .restaurant-map {
      width: 400px;
    }

    .banner-image {
      margin-top: 50px;
    }
  }

  @media (max-width: 475px) {
    .histoire-image {
      width: 300px;
    }
  }

  @media (max-width: 450px) {
    .restaurant-map {
      width: 300px;
    }
  }

  @media (max-width: 420px) {
    .restaurant-map {
      width: 250px;
    }
  }


</style>
