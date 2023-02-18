import { Dish } from "../models/dish";

export const dishes: Dish[] = [
    { name: 'Diablo',             categoryId: 1,  price: 10799,   img:"/assets/images/pizza/Diablo.png",            link: 'diablo',             sale: true,     mostPopular: true,    description: 'бекон, салямі , прошуто кото, свіжі томати, перець гострий “рepperoni”, сир “моцарела”, соус “чилі”, соус “маринара”' },
    { name: '4-Cheese',           categoryId: 1,  price: 9859,    img:"/assets/images/pizza/4-Cheese.png",          link: "4-cheese",           sale: false,    mostPopular: true,    description: '' },
    { name: 'Americano De Luxe',  categoryId: 1,  price: 14959,   img:"/assets/images/pizza/AmericanoDeLuxe.png",   link: "americano-deluxe",   sale: false,    mostPopular: false,   description: '' },
    { name: 'Italliano De Luxe',  categoryId: 1,  price: 13919,   img:"/assets/images/pizza/ItallianoDeLuxe.png",   link: "italliano-deluxe",   sale: false,    mostPopular: false,   description: '' },
    { name: 'Margarita',          categoryId: 1,  price: 11699,   img:"/assets/images/pizza/Margarita.png",         link: "margarita",          sale: false,    mostPopular: false,   description: '' },
    { name: 'Peperoni',           categoryId: 1,  price: 11899,   img:"/assets/images/pizza/Peperoni.png",          link: "peperoni",           sale: false,    mostPopular: false,   description: '' },
    { name: 'Casablanka',         categoryId: 1,  price: 12949,   img:"/assets/images/pizza/Casablanka.png",        link: "casablanka",         sale: false,    mostPopular: false,   description: '' },
    { name: 'Fokacha',            categoryId: 1,  price: 3699,    img:"/assets/images/pizza/Fokacha.png",           link: "fokacha",            sale: false,    mostPopular: false,   description: '' },
    { name: 'Carbonara',          categoryId: 1,  price: 12579,   img:"/assets/images/pizza/Carbonara.png",         link: "carbonara",          sale: false,    mostPopular: false,   description: '' },
    { name: 'San Siro',           categoryId: 1,  price: 11799,   img:"/assets/images/pizza/SanSiro.png",           link: "san-siro",           sale: false,    mostPopular: false,   description: '' },
    { name: 'Filadelfia',         categoryId: 1,  price: 14759,   img:"/assets/images/pizza/FiladelfiaP.png",       link: "filadelfia-p",       sale: true,     mostPopular: false,   description: '' },
    { name: 'Bavarian',           categoryId: 1,  price: 11899,   img:"/assets/images/pizza/Bavarian.png",          link: "bavarian",           sale: false,    mostPopular: false,   description: '' },

    { name: 'Sake Unagi Roll',    categoryId: 2,  price: 32899,   img:"/assets/images/sushi/SakeUnagiRoll.png",     link: "skae-unagi-roll",    sale: true,     mostPopular: false,   description: '' },
    { name: 'Green Dragon',       categoryId: 2,  price: 27579,   img:"/assets/images/sushi/GreenDragon.png",       link: "green-dragon",       sale: false,    mostPopular: false,   description: '' },
    { name: 'Black Dragon',       categoryId: 2,  price: 35999,   img:"/assets/images/sushi/BlackDragon.png",       link: "black-dragon",       sale: false,    mostPopular: false,   description: '' },
    { name: 'Red Dragon',         categoryId: 2,  price: 37919,   img:"/assets/images/sushi/RedDragon.png",         link: "red-dragon",         sale: true,     mostPopular: false,   description: '' },
    { name: 'Filadelfia',         categoryId: 2,  price: 28519,   img:"/assets/images/sushi/FiladelfiaS.png",       link: "filadelfia-s",       sale: false,    mostPopular: true,    description: '' },
    { name: 'Filadelfia Lite',    categoryId: 2,  price: 22959,   img:"/assets/images/sushi/FiladelfiaLite.png",    link: "filadelfia-lite",    sale: false,    mostPopular: false,   description: '' },
    { name: 'Filadelfia Kunsei',  categoryId: 2,  price: 32599,   img:"/assets/images/sushi/FiladelfiaKunsei.png",  link: "filadelfia-kunsei",  sale: false,    mostPopular: false,   description: '' },
    { name: 'Cheff Grill Roll',   categoryId: 2,  price: 28979,   img:"/assets/images/sushi/CheffGrillRoll.png",    link: "cheff-grill-roll",   sale: false,    mostPopular: false,   description: '' },
    { name: 'Grill Roll',         categoryId: 2,  price: 26599,   img:"/assets/images/sushi/GrillRoll.png",         link: "grill-roll",         sale: true,     mostPopular: false,   description: '' },
    { name: 'Hot Crab',           categoryId: 2,  price: 17859,   img:"/assets/images/sushi/HotCrab.png",           link: "hot-crab",           sale: false,    mostPopular: false,   description: '' },

    { name: 'Breakfast',          categoryId: 3,  price: 6719,    img:"/assets/images/pancakes/Breakfast.png",      link: "breakfast",          sale: false,    mostPopular: false,   description: '' },
    { name: 'Caesar',             categoryId: 3,  price: 7559,    img:"/assets/images/pancakes/Caesar.png",         link: "caesar",             sale: false,    mostPopular: false,   description: '' },
    { name: 'Caprichoza',         categoryId: 3,  price: 8849,    img:"/assets/images/pancakes/Caprichoza.png",     link: "caprichoza",         sale: false,    mostPopular: false,   description: '' },
    { name: 'Diabola',            categoryId: 3,  price: 7599,    img:"/assets/images/pancakes/Diabola.png",        link: "diabola",            sale: false,    mostPopular: false,   description: '' },
    { name: 'Sorento',            categoryId: 3,  price: 9699,    img:"/assets/images/pancakes/Sorento.png",        link: "sorento",            sale: false,    mostPopular: false,   description: '' },

    { name: 'Kiwi Fresh',         categoryId: 4,  price: 3999,    img:"/assets/images/drinks/KiwiFresh.png",        link: "kiwi-fresh",         sale: false,    mostPopular: false,   description: '' },
    { name: 'Red Grape Fresh',    categoryId: 4,  price: 3999,    img:"/assets/images/drinks/RedGrapeFresh.png",    link: "red-grape-fresh",    sale: false,    mostPopular: false,   description: '' },
    { name: 'Passion Fresh',      categoryId: 4,  price: 3999,    img:"/assets/images/drinks/PassionFresh.png",     link: "passion-fresh",      sale: false,    mostPopular: false,   description: '' },
    { name: 'Coca Cola',          categoryId: 4,  price: 4999,    img:"/assets/images/drinks/CocaCola.png",         link: "coca-cola",          sale: false,    mostPopular: false,   description: '' },
    { name: 'Bud Light',          categoryId: 4,  price: 5999,    img:"/assets/images/drinks/BudLight.png",         link: "bud-light",          sale: false,    mostPopular: true,    description: '' },
  ];