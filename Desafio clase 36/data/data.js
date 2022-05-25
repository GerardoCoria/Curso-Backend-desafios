const productos = [
    {
        id: 1,
        name: "Chocolate negro en rama",
        price: 530,
        description: "Realizado por nuestros maestros chocolateros, sobre mesadas de mármol.  Peso: 100 gr."
    },
    {
        id:2,
        name: "Bombón de chocolate blanco y dulce",
        price: 1350,
        description: "Caja de 12 unidades. Bombón de chocolate blanco y con leche, relleno de dulce de leche."
    },
    {
        id:3,
        name: "Helado 'Bariloche'",
        price: 330,
        description: "Crema helada de chocolate con nueces acarameladas, trocitos de chocolate y crocante de mani."
    },
    {
        id:4,
        name: "Ositos de chocolate",
        price: 400,
        description: "Ositos de Chocolate Leche y Blanco Peso: 60 Grs. 5 ositos surtidos rellenos con dulce de leche."
    },
    {
        id:5,
        name: "Dinosaurios de chocolate",
        price: 500,
        description: "Peso: 60 gr. Set de tres figuras de dinosaurios de chocolate con leche. Ideal para que los niños disfruten.",
    },
    {
        id:6,
        name: "Chocolate con almendras",
        price: 800,
        description: "Tableta de chocolate leche con Almendras. Para compartir en familia. Peso: 300 gr.",
    },
    {
        id:7,
        name: "Huevo de chocolate",
        price: 770,
        description: "Peso: 90 gr. Tamaño mediano. Huevo de chocolate con leche o de chocolate blanco. Contiene confituras en su interior. La decoración es con chocolate.",
    },
    {
        id:8,
        name: "Helado de frambuesa con chocolate",
        price: 350,
        description: "Delicioso postre hecho con el mejor chocolate y las frutas típicas de la región. Peso: 250 gr.",
    },
    {
        id:9,
        name: "Chocolate para taza",
        price: 380,
        description: "Ideal para un clásico submarino. Se puede derretir y utilizar como cobertura. Para repostería en rellenos de muffins, budines y tortas. Peso: 100 gr.",
    },
    {
        id:10,
        name: "Alfajor blanco",
        price: 700,
        description: "Pack de 6 unidades de deliciosos alfajores bañados en chocolate blanco, rellenos con dulce de leche.",
    },
    {
        id:11,
        name: "Chocolate amargo",
        price: 660,
        description: "Cacao 70 %. Libre de gluten. Sin T.A.C.C. Peso: 100 gr.",
    },
    {
        id:12,
        name: "Bombón Amargo",
        price: 1250,
        description: "Caja de 12 unidades. Bombón de chocolate semi amargo, con morse de café.",
    },
    {
        id:13,
        name: "Caja de bombones",
        price: 1400,
        description: "Peso: 750 gr. Caja de bombones surtidos. La caja es ideal para regalar. Los bombones son: chocolate negro, blanco, amargo y relleno con dulce de leche.",
    },
    // {
    //     "name": "Alfajores de frambuesa",
    //     "seccion": "2",
    //     "stock": 40,
    //     "img": "/frambuesa.jpg",
    //     "description": "Pack de 6 unidades de alfajores, rellenos de dulce de frambuesa bañado con chocolate semi amargo.",
    //     "price": 750,
    //     "id": "axV2C5NIgUaGh7JtXx7r"
    // },
    // {
    //     "price": 560,
    //     "seccion": "1",
    //     "img": "/blanco.jpg",
    //     "name": "Chocolate blanco en rama",
    //     "stock": 50,
    //     "description": "Delicia hecha con manteca de cacao, leche en polvo y azúcar, con ausencia de cacao o pasta del mismo. Su sabor recuerda a la leche condensada. Peso: 100 gr.",
    //     "id": "b6tl2UddvLX6TvISMej4"
    // },
    // {
    //     "name": "Bombón con frutos del bosque",
    //     "price": 1300,
    //     "description": "Caja de 12 unidades. Bombón con confitura de frutos del bosque, bañado en chocolate blanco.",
    //     "img": "/bombom-frutos-bosque.jpg",
    //     "seccion": "4",
    //     "stock": 100,
    //     "id": "bNMiVCXNkn1HgnaHGshj"
    // },
    // {
    //     "description": "Ramo de 12 rosas de chocolate. Para regalar a tu novia, esposa, madre, hermana o a quien quieras. Las rosas pueden ser de chocolate macizo con leche, o bien semiamargo, o blanco o rellenas con dulce de leche.",
    //     "seccion": "5",
    //     "img": "/regalo-rosas.jpg",
    //     "name": "Rosas de chocolate",
    //     "stock": 90,
    //     "price": 1750,
    //     "id": "bj9QSRa2F4AJWMu9SDU8"
    // },
    // {
    //     "seccion": "6",
    //     "description": "Peso: 90 gr. Elaborados con chocolate macizo alpino semi-amargo, con leche o blanco.",
    //     "stock": 90,
    //     "name": "Conejito de chocolate",
    //     "img": "/conejo.jpg",
    //     "price": 650,
    //     "id": "dNyJiHtGQoFuxHtqVy5G"
    // },
    // {
    //     "img": "/helado-almendras.jpg",
    //     "name": "Helado almendrado",
    //     "price": 400,
    //     "seccion": "3",
    //     "stock": 80,
    //     "description": "Crema helada de almendras con trozos de almendras acarameladas.",
    //     "id": "h8BdNB9ewiKZQCrsk9Uh"
    // },
    // {
    //     "stock": 40,
    //     "name": "Alfajores de chocolate",
    //     "seccion": "2",
    //     "price": 900,
    //     "img": "/alfajor.jpg",
    //     "description": "Pack de 6 unidades de alfajores del más rico chocolate patagónico.",
    //     "id": "kz2gskRKURIgmDtFaOLf"
    // },
    // {
    //     "seccion": "5",
    //     "img": "/regalo.jpg",
    //     "price": 1600,
    //     "name": "Estuche de bombones",
    //     "stock": 80,
    //     "description": "Caja de bombones finos, en su estuche. Ideal para regalar a un ser querido. La caja contiene 20 bombones surtidos.",
    //     "id": "olOLbhfwbU1laTtvXiuS"
    // }

]
module.exports = {
    productos
}