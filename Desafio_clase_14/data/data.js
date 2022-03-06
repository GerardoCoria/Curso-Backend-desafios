const productos = [
    {
        id: 1,
        name: "Chocolate negro en rama",
        price: 500,
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
        price: "330",
        description: "Crema helada de chocolate con nueces acarameladas, trocitos de chocolate y crocante de mani."
    },
    {
        id:4,
        name: "Ositos de chocolate",
        price: 400,
        description: "Ositos de Chocolate Leche y Blanco Peso: 60 Grs. 5 ositos surtidos rellenos con dulce de leche."
    }
        // id:
        // name:
        // price:
        // description:
    // {
    //     "stock": 80,
    //     "img": "/dinosaurios.jpg",
    //     "descripcion": "Peso: 60 gr. Set de tres figuras de dinosaurios de chocolate con leche. Ideal para que los niños disfruten.",
    //     "seccion": "6",
    //     "precio": 650,
    //     "nombre": "Dinosaurios de chocolate",
    //     "id": "CJZcW8MdCX4kZYkjpasJ"
    // },
    // {
    //     "stock": 40,
    //     "seccion": "1",
    //     "nombre": "Chocolate con almendras",
    //     "precio": 800,
    //     "img": "/almendra.jpg",
    //     "descripcion": "Tableta de chocolate leche con Almendras. Para compartir en familia. Peso: 300 gr.",
    //     "id": "GAnQiCKiEeYxkCywYJ1L"
    // },
    // {
    //     "seccion": "6",
    //     "img": "/huevo.jpg",
    //     "descripcion": "Peso: 90 gr. Tamaño mediano. Huevo de chocolate con leche o de chocolate blanco. Contiene confituras en su interior. La decoración es con chocolate.",
    //     "nombre": "Huevo de chocolate",
    //     "stock": 80,
    //     "precio": 750,
    //     "id": "S7iFQCRXorBmBM41Kr5m"
    // },
    // {
    //     "descripcion": "Delicioso postre hecho con el mejor chocolate y las frutas típicas de la región. Peso: 250 gr.",
    //     "precio": "350",
    //     "seccion": "3",
    //     "stock": 30,
    //     "nombre": "Helado de frambuesa con chocolate",
    //     "img": "/helado-frambuesa.jpg",
    //     "id": "SftoBoB7W84D03kyewbn"
    // },
    // {
    //     "img": "/submarino.jpg",
    //     "stock": 30,
    //     "precio": 380,
    //     "nombre": "Chocolate para taza",
    //     "descripcion": "Ideal para un clásico submarino. Se puede derretir y utilizar como cobertura. Para repostería en rellenos de muffins, budines y tortas. Peso: 100 gr.",
    //     "seccion": "1",
    //     "id": "Sxnn6qzZLLWbvIm8vCCt"
    // },
    // {
    //     "descripcion": "Pack de 6 unidades de deliciosos alfajores bañados en chocolate blanco, rellenos con dulce de leche.",
    //     "img": "/alfajor-blanco.jpg",
    //     "precio": 700,
    //     "nombre": "Alfajor blanco",
    //     "seccion": "2",
    //     "stock": 50,
    //     "id": "VSMIHKqIyUxoDt2txKhA"
    // },
    // {
    //     "nombre": "Chocolate amargo",
    //     "stock": 50,
    //     "img": "/amargo.jpg",
    //     "precio": 660,
    //     "descripcion": "Cacao 70 %. Libre de gluten. Sin T.A.C.C. Peso: 100 gr.",
    //     "seccion": "1",
    //     "id": "WKGeVqajn7rXpAWRwdP5"
    // },
    // {
    //     "img": "/bombom-amargo.jpg",
    //     "precio": 1250,
    //     "nombre": "Bombón amargo",
    //     "descripcion": "Caja de 12 unidades. Bombón de chocolate semi amargo, con morse de café.",
    //     "stock": 80,
    //     "seccion": "4",
    //     "id": "WnBWgkTBHGG3RMrOCLoI"
    // },
    // {
    //     "stock": 80,
    //     "img": "/caja-regalo.jpg",
    //     "precio": 1400,
    //     "descripcion": "Peso: 750 gr. Caja de bombones surtidos. La caja es ideal para regalar. Los bombones son: chocolate negro, blanco, amargo y relleno con dulce de leche.",
    //     "seccion": "5",
    //     "nombre": "Caja de bombones",
    //     "id": "Y5wDLcmHwqL0AEjiSwkG"
    // },
    // {
    //     "nombre": "Alfajores de frambuesa",
    //     "seccion": "2",
    //     "stock": 40,
    //     "img": "/frambuesa.jpg",
    //     "descripcion": "Pack de 6 unidades de alfajores, rellenos de dulce de frambuesa bañado con chocolate semi amargo.",
    //     "precio": 750,
    //     "id": "axV2C5NIgUaGh7JtXx7r"
    // },
    // {
    //     "precio": 560,
    //     "seccion": "1",
    //     "img": "/blanco.jpg",
    //     "nombre": "Chocolate blanco en rama",
    //     "stock": 50,
    //     "descripcion": "Delicia hecha con manteca de cacao, leche en polvo y azúcar, con ausencia de cacao o pasta del mismo. Su sabor recuerda a la leche condensada. Peso: 100 gr.",
    //     "id": "b6tl2UddvLX6TvISMej4"
    // },
    // {
    //     "nombre": "Bombón con frutos del bosque",
    //     "precio": 1300,
    //     "descripcion": "Caja de 12 unidades. Bombón con confitura de frutos del bosque, bañado en chocolate blanco.",
    //     "img": "/bombom-frutos-bosque.jpg",
    //     "seccion": "4",
    //     "stock": 100,
    //     "id": "bNMiVCXNkn1HgnaHGshj"
    // },
    // {
    //     "descripcion": "Ramo de 12 rosas de chocolate. Para regalar a tu novia, esposa, madre, hermana o a quien quieras. Las rosas pueden ser de chocolate macizo con leche, o bien semiamargo, o blanco o rellenas con dulce de leche.",
    //     "seccion": "5",
    //     "img": "/regalo-rosas.jpg",
    //     "nombre": "Rosas de chocolate",
    //     "stock": 90,
    //     "precio": 1750,
    //     "id": "bj9QSRa2F4AJWMu9SDU8"
    // },
    // {
    //     "seccion": "6",
    //     "descripcion": "Peso: 90 gr. Elaborados con chocolate macizo alpino semi-amargo, con leche o blanco.",
    //     "stock": 90,
    //     "nombre": "Conejito de chocolate",
    //     "img": "/conejo.jpg",
    //     "precio": 650,
    //     "id": "dNyJiHtGQoFuxHtqVy5G"
    // },
    // {
    //     "img": "/helado-almendras.jpg",
    //     "nombre": "Helado almendrado",
    //     "precio": 400,
    //     "seccion": "3",
    //     "stock": 80,
    //     "descripcion": "Crema helada de almendras con trozos de almendras acarameladas.",
    //     "id": "h8BdNB9ewiKZQCrsk9Uh"
    // },
    // {
    //     "stock": 40,
    //     "nombre": "Alfajores de chocolate",
    //     "seccion": "2",
    //     "precio": 900,
    //     "img": "/alfajor.jpg",
    //     "descripcion": "Pack de 6 unidades de alfajores del más rico chocolate patagónico.",
    //     "id": "kz2gskRKURIgmDtFaOLf"
    // },
    // {
    //     "seccion": "5",
    //     "img": "/regalo.jpg",
    //     "precio": 1600,
    //     "nombre": "Estuche de bombones",
    //     "stock": 80,
    //     "descripcion": "Caja de bombones finos, en su estuche. Ideal para regalar a un ser querido. La caja contiene 20 bombones surtidos.",
    //     "id": "olOLbhfwbU1laTtvXiuS"
    // }
]

const cart =[
    {
        id: 1,
        productsList: [
            {
                id:1,
                name: "nombre prueba 1",
                price: 111,
                description: "descripcion prueba 1",
            },
            {
                id: 2,
                name: "nombre prueba 2",
                price: 222,
                description: "descripcion prueba 2",
            }
        ]
    },
]


    // const gato=[
    //     {
    //         id: 1,
    //         delitos: {
    //             hecho1: "romper termos",
    //             hecho2: "comer yerba",
    //         }
    //     },
    //     {
    //         id: 2,
    //         delitos: {
    //             hecho1: "romper bolsas",
    //             hecho2: "comer papel",
    //         }
    //     }
    // ]
    // gato[0].id
    // 1
    //gato[0].delitos.hecho1
    //'romper termos'

module.exports = {
    productos,
    cart
}