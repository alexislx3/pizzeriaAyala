const products= [
    {
        id: '1',
        name:'mozza',
        price: '500',
        category:'pizza',
        img: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1600',
        stock: 20,
        description: 'Pizza mozzarella de 8 porciones con el mejor queso'
    },

    {
        id: '2',
    name:'peperoni',
    price: '700',
    category:'pizza',
    img: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=1600',
    stock: 20,
    description: 'Pizza Peperoni de 8 porciones con el mejor queso'},

    {
    id: '3',
    name:'fugazeta',
    price: '900',
    category:'pizza',
    img: 'https://images.pexels.com/photos/3343626/pexels-photo-3343626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    stock: 20,
    description: 'Pizza fugazzeta de 8 porciones con el mejor queso'
},

{
    id: '4',
    name:'Hamburguesa simple',
    price: '600',
    category:'Hamburguesa',
    img: 'https://images.pexels.com/photos/2702674/pexels-photo-2702674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    stock: 20,
    description: 'Hamburguesa con queso, lechuga y tomate'
},

{
    id: '5',
    name:'Hamburguesa completa',
    price: '900',
    category:'Hamburguesa',
    img: 'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    stock: 20,
    description: 'Hamburguesa, con queso, lechuga, tomate, jamon y huevo frito'
},


{
    id: '6',
    name:'Super hamburguesa',
    price: '1200',
    category:'Hamburguesa',
    img: 'https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    stock: 20,
    description: 'Hamburguesa, con queso, lechuga, tomate, jamon, huevo frito mas dos medallones de carnes extra '
},


{
    id: '7',
    name:'Papas Fritas',
    price: '500',
    category:'Papas Fritas',
    img: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1600',
    stock: 20,
    description: 'Papas crocantes'
},


{
    id: '8',
    name:'Papas con Cheddar',
    price: '900',
    category:'Papas Fritas',
    img: 'https://images.pexels.com/photos/8521258/pexels-photo-8521258.jpeg?auto=compress&cs=tinysrgb&w=1600',
    stock: 20,
    description: 'Pizza fugazzeta de 8 porciones con el mejor queso'
},


{
    id: '9',
    name:'Super papas con Cheddar y bacon ',
    price: '1000',
    category:'Papas Fritas',
    img: 'https://media.istockphoto.com/photos/freshly-cooked-french-fries-baked-with-cheddar-cheese-bacon-and-picture-id1060410062?s=612x612',
    stock: 20,
    description: 'Super papas con Cheddar y Bacon'
},

{
    id: '10',
    name:'Coca-Cola',
    price: '400',
    category:'bebidas',
    img: 'https://images.pexels.com/photos/3819969/pexels-photo-3819969.jpeg?auto=compress&cs=tinysrgb&w=1600',
    stock: 20,
    description: 'Coca-cola sin azucar'
},


{
    id: '11',
    name:'Mirinda',
    price: '400',
    category:'bebidas',
    img: 'https://images.pexels.com/photos/11659577/pexels-photo-11659577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    stock: 20,
    description: 'Mirinda, gaseosa con sabro a naranja'
},

{
    id: '12',
    name:'sprite',
    price: '400',
    category:'bebidas',
    img: 'https://images.pexels.com/photos/4161715/pexels-photo-4161715.jpeg?auto=compress&cs=tinysrgb&w=1600',
    stock: 20,
    description: 'Sprite rebajada en azucar'
},

]

export const getProducts = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(products)
        },500)
    })
}
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(products.filter( prod => prod.category === categoryId))
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