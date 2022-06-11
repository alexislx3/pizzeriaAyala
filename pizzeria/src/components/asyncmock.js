const products= [
    {
        id: '1',
        name:'mozza',
        price: '500',
        category:'pizza',
        img: 'https://www.apple.com/newsroom/imagen',
        stock: 20,
        description: 'Pizza mozzarella de 8 porciones con el mejor queso'
    },

    {
        id: '2',
    name:'peperoni',
    price: '700',
    category:'pizza',
    img: 'https://irecetasfaciles.com/pizza-de-jamon-queso-y-tocino/',
    stock: 20,
    description: 'Pizza Peperoni de 8 porciones con el mejor queso'},

    {
    id: '3',
    name:'fugazeta',
    price: '900',
    category:'pizza',
    img: './image/fugazza.jpg',
    stock: 20,
    description: 'Pizza fugazzeta de 8 porciones con el mejor queso'
},

{
    id: '4',
    name:'Hamburguesa simple',
    price: '600',
    category:'Hamburguesa',
    img: './image/fugazza.jpg',
    stock: 20,
    description: 'Pizza fugazzeta de 8 porciones con el mejor queso'
},

{
    id: '5',
    name:'Hamburguesa completa',
    price: '900',
    category:'Hamburguesa',
    img: './image/fugazza.jpg',
    stock: 20,
    description: 'Pizza fugazzeta de 8 porciones con el mejor queso'
},


{
    id: '6',
    name:'Super hamburguesa',
    price: '1200',
    category:'Hamburguesa',
    img: './image/fugazza.jpg',
    stock: 20,
    description: 'Pizza fugazzeta de 8 porciones con el mejor queso'
},


{
    id: '7',
    name:'Papas Fritas',
    price: '500',
    category:'Papas Fritas',
    img: './image/fugazza.jpg',
    stock: 20,
    description: 'Pizza fugazzeta de 8 porciones con el mejor queso'
},


{
    id: '8',
    name:'Papas con Cheddar',
    price: '900',
    category:'Papas Fritas',
    img: './image/fugazza.jpg',
    stock: 20,
    description: 'Pizza fugazzeta de 8 porciones con el mejor queso'
},


{
    id: '9',
    name:'Super papas con Cheddar y bacon ',
    price: '1000',
    category:'Papas Fritas',
    img: './image/fugazza.jpg',
    stock: 20,
    description: 'Pizza fugazzeta de 8 porciones con el mejor queso'
},

{
    id: '10',
    name:'coca',
    price: '400',
    category:'bebidas',
    img: './image/fugazza.jpg',
    stock: 20,
    description: 'Pizza fugazzeta de 8 porciones con el mejor queso'
},


{
    id: '11',
    name:'fanta',
    price: '400',
    category:'bebidas',
    img: './image/fugazza.jpg',
    stock: 20,
    description: 'Pizza fugazzeta de 8 porciones con el mejor queso'
},

{
    id: '12',
    name:'sprite',
    price: '400',
    category:'bebidas',
    img: './image/fugazza.jpg',
    stock: 20,
    description: 'Pizza fugazzeta de 8 porciones con el mejor queso'
},

]

export const getProducts = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(products)
        },500)
    })
}
export const getProductsById = (id) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        },500)
    })
}
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(products.find(prod => prod.category === categoryId))
        },500)
    })
}