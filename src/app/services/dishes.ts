import { Dish } from "../models/dish";

export const dishes: Dish[] = [
    { name: 'Diablo',             categoryId: 1,  price: 10799,   img:"/assets/images/pizza/Diablo.png",          link: 'diablo',             sale: true,     mostPopular: true  },
    { name: '4-Cheese',           categoryId: 1,  price: 9859,    img:"/assets/images/pizza/4-Cheese.png",        link: "4-cheese",           sale: false,    mostPopular: true  },
    { name: 'Americano De Luxe',  categoryId: 1,  price: 14959,   img:"/assets/images/pizza/AmericanoDeLuxe.png", link: "americano-deluxe",   sale: false,    mostPopular: false },
    { name: 'Italliano De Luxe',  categoryId: 1,  price: 13919,   img:"/assets/images/pizza/ItallianoDeLuxe.png", link: "italliano-deluxe",   sale: false,    mostPopular: false },
    { name: 'Margarita',          categoryId: 1,  price: 11699,   img:"/assets/images/pizza/Margarita.png",       link: "margarita",          sale: false,    mostPopular: false },
    { name: 'Peperoni',           categoryId: 1,  price: 11899,   img:"/assets/images/pizza/Peperoni.png",        link: "peperoni",           sale: false,    mostPopular: false },
    { name: 'Casablanka',         categoryId: 1,  price: 12949,   img:"/assets/images/pizza/Casablanka.png",      link: "casablanka",         sale: false,    mostPopular: false },
    { name: 'Fokacha',            categoryId: 1,  price: 3699,    img:"/assets/images/pizza/Fokacha.png",         link: "fokacha",            sale: false,    mostPopular: false },
    { name: 'Carbonara',          categoryId: 1,  price: 12579,   img:"/assets/images/pizza/Carbonara.png",       link: "carbonara",          sale: false,    mostPopular: false },
    { name: 'San Siro',           categoryId: 1,  price: 11799,   img:"/assets/images/pizza/SanSiro.png",         link: "san-siro",           sale: false,    mostPopular: false },
    { name: 'Filadelfia',         categoryId: 1,  price: 14759,   img:"/assets/images/pizza/FiladelfiaP.png",     link: "filadelfia-p",       sale: true,     mostPopular: false },
    { name: 'Bavarian',           categoryId: 1,  price: 11899,   img:"/assets/images/pizza/Bavarian.png",        link: "bavarian",           sale: false,    mostPopular: false },

    { name: 'Sake Unagi Roll',    categoryId: 2,  price: 32899, img:"/assets/images/sushi/SakeUnagiRoll.png",     link: "diablo", sale: true, mostPopular: false },
    { name: 'Green Dragon',       categoryId: 2,  price: 27579, img:"/assets/images/sushi/GreenDragon.png",       link: "4-cheese", sale: false, mostPopular: false },
    { name: 'Black Dragon',       categoryId: 2,  price: 35999, img:"/assets/images/sushi/BlackDragon.png",       link: "filadelfia-s", sale: false, mostPopular: false },
    { name: 'Red Dragon',         categoryId: 2,  price: 37919, img:"/assets/images/sushi/RedDragon.png",         link: "diablo", sale: true, mostPopular: false },
    { name: 'Filadelfia',         categoryId: 2,  price: 28519, img:"/assets/images/sushi/FiladelfiaS.png",       link: "diablo", sale: false, mostPopular: true },
    { name: 'Filadelfia Lite',    categoryId: 2,  price: 22959, img:"/assets/images/sushi/FiladelfiaLite.png",    link: "diablo", sale: false, mostPopular: false },
    { name: 'Filadelfia Kunsei',  categoryId: 2,  price: 32599, img:"/assets/images/sushi/FiladelfiaKunsei.png",  link: "diablo", sale: false, mostPopular: false },
    { name: 'Cheff Grill Roll',   categoryId: 2,  price: 28979, img:"/assets/images/sushi/CheffGrillRoll.png",    link: "diablo", sale: false, mostPopular: false },
    { name: 'Grill Roll',         categoryId: 2,  price: 26599, img:"/assets/images/sushi/GrillRoll.png",         link: "diablo", sale: true, mostPopular: false },
    { name: 'Hot Crab',           categoryId: 2,  price: 17859, img:"/assets/images/sushi/HotCrab.png",           link: "diablo", sale: false, mostPopular: false },
  ];