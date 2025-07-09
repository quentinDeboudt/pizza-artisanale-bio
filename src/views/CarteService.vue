<template>
  <div class="carte-service">
    <h2>Notre carte</h2>

    <div class="pizza-list">
      <div v-for="(pizza, index) in pizzas" :key="index" class="pizza-card">
        <img :src=pizza.image :alt="pizza.name" class="pizza-image" />

        <div class="pizza-content">
          <h3>{{ pizza.name }}</h3>
          <p class="ingredients">{{ pizza.ingredients.join(', ') }}</p>

          <div class="prices">
            <div v-for="(price, size) in pizza.prices" :key="size" class="price-row">
              <span>{{ size }}</span>
              <span>{{ price }}€</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import margarita from '../assets/pizza/margarita.png';
  import champignons from '../assets/pizza/champignon.png';
  import fromages from '../assets/pizza/fromage.png';
  import saumon from '../assets/pizza/saumon.png';
  import regina from '../assets/pizza/regina.png';

  const pizzas = [
    {
      name: 'Margarita',
      ingredients: ['Sauce tomate', 'Mozzarella', 'Origan'],
      image: margarita,
      prices: {
        '26cm': 7.90,
        '31cm': 9.90,
        '40cm': 16.90
      }
    },
    {
      name: 'Champignons',
      ingredients: ['Sauce tomate', 'Mozzarella', 'Champignons de Paris', 'Persillade', 'Origan'],
      image: champignons,
      prices: {
        '26cm': 9.90,
        '31cm': 11.90,
        '40cm': 18.90
      }
    },
    {
      name: 'Chèvre courgettes confites',
      ingredients: ['Sauce tomate', 'Mozzarella', 'Chèvre', 'Courgettes confites', 'Origan'],
      image: fromages,
      prices: {
        '26cm': 10.90,
        '31cm': 12.90,
        '40cm': 19.90
      }
    },
    {
      name: 'Poivrons champignons',
      ingredients: ['Sauce tomate', 'Mozzarella', 'Poivrons', 'Champignons de Paris', 'Oignons', 'Persillade', 'Origan'],
      image: saumon,
      prices: {
        '26cm': 10.90,
        '31cm': 12.90,
        '40cm': 19.90
      }
    },
    {
      name: 'Courgettes, poivrons confits au curcuma frais',
      ingredients: ['Sauce tomate', 'Mozzarella', 'Courgettes confites', 'Poivrons confits', 'Champignons de Paris', 'Persil frais', 'Curcuma frais', 'Origan'],
      image: margarita,
      prices: {
        '26cm': 12.90,
        '31cm': 14.90,
        '40cm': 23.90
      }
    },
    {
      name: 'Végétarienne aux légumes du soleil, confits',
      ingredients: ['Sauce tomate', 'Mozzarella', 'Tomates', 'Courgettes et poivrons confits', 'Caviar d’aubergines', 'Pointe de persillade', 'Persil frais', 'Origan'],
      image: fromages,
      prices: {
        '26cm': 12.90,
        '31cm': 14.90,
        '40cm': 23.90
      }
    },
    {
      name: 'Camembert cumin',
      ingredients: ['Sauce tomate', 'Mozzarella', 'Camembert', 'Cumin', 'Origan'],
      image: saumon,
      prices: {
        '26cm': 10.50,
        '31cm': 11.50,
        '40cm': 19.50
      }
    },
    {
      name: 'Chèvre miel',
      ingredients: ['Base crème', 'Mozzarella', 'Chèvre', 'Miel', 'Origan'],
      image: margarita,
      prices: {
        '26cm': 10.90,
        '31cm': 12.90,
        '40cm': 20.90
      }
    },
    {
      name: '4 fromages (classique ou au bleu +1€)',
      ingredients: ['Sauce tomate', 'Mozzarella', 'Chèvre', 'Camembert', 'Amsterdammer', 'Origan'],
      image: fromages,
      prices: {
        '26cm': 11.90,
        '31cm': 13.90,
        '40cm': 21.90
      }
    },
    {
      name: 'Thon persillade',
      ingredients: ['Sauce tomate', 'Mozzarella', 'Thon', 'Persillade', 'Oignons', 'Origan'],
      image: saumon,
      prices: {
        '26cm': 11.90,
        '31cm': 13.90,
        '40cm': 21.90
      }
    },
    {
      name: 'Tunisienne',
      ingredients: ['Sauce tomate', 'Mozzarella', 'Thon', 'Tomates', 'Poivrons & oignons confits', 'Persil frais', 'Origan'],
      image: regina,
      prices: {
        '26cm': 12.90,
        '31cm': 14.90,
        '40cm': 23.90
      }
    },
    {
      name: 'Reine',
      ingredients: ['Sauce tomate', 'Mozzarella', 'Jambon', 'Origan'],
      image: fromages,
      prices: {
        '26cm': 9.90,
        '31cm': 11.90,
        '40cm': 18.90
      }
    },
    {
      name: 'Regina',
      ingredients: ['Sauce tomate', 'Mozzarella', 'Jambon', 'Champignons de Paris', 'Origan'],
      image: margarita,
      prices: {
        '26cm': 10.90,
        '31cm': 12.90,
        '40cm': 20.90
      }
    },
    {
      name: 'Calzone (en chausson)',
      ingredients: ['Sauce tomate', 'Mozzarella', 'Jambon', 'Champignons de Paris', 'Origan'],
      image: regina,
      prices: {
        '26cm': 10.90,
        '31cm': 12.90,
        '40cm': null
      }
    },
    {
      name: 'Courgettes lardons',
      ingredients: ['Base crème', 'Mozzarella', 'Courgettes confites', 'Lardons fumés', 'Persillade', 'Origan'],
      image: saumon,
      prices: {
        '26cm': 10.90,
        '31cm': 12.90,
        '40cm': 20.90
      }
    },
    {
      name: 'Jambon lardons',
      ingredients: ['Sauce tomate', 'Mozzarella', 'Jambon', 'Lardons fumés', 'Origan'],
      image: regina,
      prices: {
        '26cm': 10.90,
        '31cm': 12.90,
        '40cm': 20.90
      }
    },
    {
      name: 'Chèvre lardons',
      ingredients: ['Sauce tomate', 'Mozzarella', 'Chèvre', 'Lardons fumés', 'Oignons confits', 'Origan'],
      image: regina,
      prices: {
        '26cm': 10.90,
        '31cm': 12.90,
        '40cm': 20.90
      }
    },
    {
      name: 'Tartiflette (reblochon au lait cru)',
      ingredients: ['Base crème', 'Mozzarella', 'Reblochon au lait cru', 'Lardons fumés', 'Pommes de terre', 'Oignons', 'Origan'],
      image: fromages,
      prices: {
        '26cm': 12.90,
        '31cm': 14.90,
        '40cm': 22.90
      }
    },
    {
      name: 'Viande hachée curry gingembre',
      ingredients: ['Sauce tomate', 'Mozzarella', 'Viande de bœuf', 'Oignons', 'Gingembre', 'Curry', 'Curcuma', 'Persil', 'Origan'],
      image: margarita,
      prices: {
        '26cm': 11.50,
        '31cm': 13.50,
        '40cm': 21.50
      }
    },
    {
      name: 'Forestière',
      ingredients: ['Sauce tomate', 'Mozzarella', 'Champignons de Paris', 'Saucisses', 'Lardons fumés', 'Oignons', 'Persil frais', 'Origan'],
      image: saumon,
      prices: {
        '26cm': 11.90,
        '31cm': 13.90,
        '40cm': 22.90
      }
    },
    {
      name: 'Carbonara',
      ingredients: ['Base crème', 'Mozzarella', 'Lardons fumés', 'Oignons', 'Origan'],
      image: fromages,
      prices: {
        '26cm': 10.90,
        '31cm': 12.90,
        '40cm': 20.90
      }
    },
    {
      name: 'Chorizo',
      ingredients: ['Sauce tomate', 'Mozzarella', 'Chorizo', 'Poivrons & tomates confits', 'Olives', 'Origan'],
      image: margarita,
      prices: {
        '26cm': 12.90,
        '31cm': 14.90,
        '40cm': 23.90
      }
    }
  ]
</script>

<style scoped>
  .carte-service {
    padding: 2rem;
    text-align: center;
  }

  .pizza-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
  }

  .pizza-card {
    width: 260px;
    filter: drop-shadow(var(--drop-shadow-card));
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    transition: transform 0.2s ease;
  }

  .pizza-card:hover {
    transform: scale(1.02);
  }

  .pizza-image {
    width: 100%;
    height: 180px;
    object-fit: contain;
  }

 

  .pizza-content {
    padding: 1rem;
  }

  .ingredients {
    font-size: 0.95rem;
    color: #555;
    margin: 0.5rem 0 1rem 0;
  }

  .prices {
    border-top: 1px solid #eee;
    padding-top: 0.5rem;
  }

  .price-row {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    margin-bottom: 0.3rem;
  }
</style>
