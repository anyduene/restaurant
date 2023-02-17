import { Dish } from "../models/dish";

export const dishes: Dish[] = [
    { name: 'Diablo',             categoryId: 1,  price: 10799,   img:"/assets/images/pizza/Diablo.png",            link: 'diablo',             sale: true,     mostPopular: true  },
    { name: '4-Cheese',           categoryId: 1,  price: 9859,    img:"/assets/images/pizza/4-Cheese.png",          link: "4-cheese",           sale: false,    mostPopular: true  },
    { name: 'Americano De Luxe',  categoryId: 1,  price: 14959,   img:"/assets/images/pizza/AmericanoDeLuxe.png",   link: "americano-deluxe",   sale: false,    mostPopular: false },
    { name: 'Italliano De Luxe',  categoryId: 1,  price: 13919,   img:"/assets/images/pizza/ItallianoDeLuxe.png",   link: "italliano-deluxe",   sale: false,    mostPopular: false },
    { name: 'Margarita',          categoryId: 1,  price: 11699,   img:"/assets/images/pizza/Margarita.png",         link: "margarita",          sale: false,    mostPopular: false },
    { name: 'Peperoni',           categoryId: 1,  price: 11899,   img:"/assets/images/pizza/Peperoni.png",          link: "peperoni",           sale: false,    mostPopular: false },
    { name: 'Casablanka',         categoryId: 1,  price: 12949,   img:"/assets/images/pizza/Casablanka.png",        link: "casablanka",         sale: false,    mostPopular: false },
    { name: 'Fokacha',            categoryId: 1,  price: 3699,    img:"/assets/images/pizza/Fokacha.png",           link: "fokacha",            sale: false,    mostPopular: false },
    { name: 'Carbonara',          categoryId: 1,  price: 12579,   img:"/assets/images/pizza/Carbonara.png",         link: "carbonara",          sale: false,    mostPopular: false },
    { name: 'San Siro',           categoryId: 1,  price: 11799,   img:"/assets/images/pizza/SanSiro.png",           link: "san-siro",           sale: false,    mostPopular: false },
    { name: 'Filadelfia',         categoryId: 1,  price: 14759,   img:"/assets/images/pizza/FiladelfiaP.png",       link: "filadelfia-p",       sale: true,     mostPopular: false },
    { name: 'Bavarian',           categoryId: 1,  price: 11899,   img:"/assets/images/pizza/Bavarian.png",          link: "bavarian",           sale: false,    mostPopular: false },

    { name: 'Sake Unagi Roll',    categoryId: 2,  price: 32899,   img:"/assets/images/sushi/SakeUnagiRoll.png",     link: "skae-unagi-roll",    sale: true,     mostPopular: false },
    { name: 'Green Dragon',       categoryId: 2,  price: 27579,   img:"/assets/images/sushi/GreenDragon.png",       link: "green-dragon",       sale: false,    mostPopular: false },
    { name: 'Black Dragon',       categoryId: 2,  price: 35999,   img:"/assets/images/sushi/BlackDragon.png",       link: "black-dragon",       sale: false,    mostPopular: false },
    { name: 'Red Dragon',         categoryId: 2,  price: 37919,   img:"/assets/images/sushi/RedDragon.png",         link: "red-dragon",         sale: true,     mostPopular: false },
    { name: 'Filadelfia',         categoryId: 2,  price: 28519,   img:"/assets/images/sushi/FiladelfiaS.png",       link: "filadelfia-s",       sale: false,    mostPopular: true  },
    { name: 'Filadelfia Lite',    categoryId: 2,  price: 22959,   img:"/assets/images/sushi/FiladelfiaLite.png",    link: "filadelfia-lite",    sale: false,    mostPopular: false },
    { name: 'Filadelfia Kunsei',  categoryId: 2,  price: 32599,   img:"/assets/images/sushi/FiladelfiaKunsei.png",  link: "filadelfia-kunsei",  sale: false,    mostPopular: false },
    { name: 'Cheff Grill Roll',   categoryId: 2,  price: 28979,   img:"/assets/images/sushi/CheffGrillRoll.png",    link: "cheff-grill-roll",   sale: false,    mostPopular: false },
    { name: 'Grill Roll',         categoryId: 2,  price: 26599,   img:"/assets/images/sushi/GrillRoll.png",         link: "grill-roll",         sale: true,     mostPopular: false },
    { name: 'Hot Crab',           categoryId: 2,  price: 17859,   img:"/assets/images/sushi/HotCrab.png",           link: "hot-crab",           sale: false,    mostPopular: false },

    { name: 'Breakfast',          categoryId: 3,  price: 6719,    img:"/assets/images/pancakes/Breakfast.png",      link: "breakfast",          sale: false,    mostPopular: false },
    { name: 'Caesar',             categoryId: 3,  price: 7559,    img:"/assets/images/pancakes/Caesar.png",         link: "caesar",             sale: false,    mostPopular: false },
    { name: 'Caprichoza',         categoryId: 3,  price: 8849,    img:"/assets/images/pancakes/Caprichoza.png",     link: "caprichoza",         sale: false,    mostPopular: false },
    { name: 'Diabola',            categoryId: 3,  price: 7599,    img:"/assets/images/pancakes/Diabola.png",        link: "diabola",            sale: false,    mostPopular: false },
    { name: 'Sorento',            categoryId: 3,  price: 9699,    img:"/assets/images/pancakes/Sorento.png",        link: "sorento",            sale: false,    mostPopular: false },

    { name: 'Kiwi Fresh',         categoryId: 4,  price: 3999,    img:"/assets/images/drinks/KiwiFresh.png",        link: "kiwi-fresh",         sale: false,    mostPopular: false },
    { name: 'Red Grape Fresh',    categoryId: 4,  price: 3999,    img:"/assets/images/drinks/RedGrapeFresh.png",    link: "red-grape-fresh",    sale: false,    mostPopular: false },
    { name: 'Passion Fresh',      categoryId: 4,  price: 3999,    img:"/assets/images/drinks/PassionFresh.png",    link: "passion-fresh",       sale: false,    mostPopular: false },
    { name: 'Coca Cola',          categoryId: 4,  price: 3999,    img:"/assets/images/drinks/CocaCola.png",         link: "apple-fresh",        sale: false,    mostPopular: false },
    { name: 'Bud Light',          categoryId: 4,  price: 5999,    img:"/assets/images/drinks/BudLight.png",         link: "apple-fresh",        sale: false,    mostPopular: true  },
  ];