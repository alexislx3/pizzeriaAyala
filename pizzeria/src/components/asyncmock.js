const products= [
    {
        id: '1',
        name:'muzza',
        price: '500',
        category:'pizza',
        img: 'https://www.pexels.com/es-es/foto/comida-pizza-rustico-redondo-9513587/',
        stock: 20,
        description: 'Pizza mozzarella de 8 porciones con el mejor queso'
    },
    {
        id: '2',
    name:'peperoni',
    price: '700',
    category:'pizza',
    img: 'https://www.pexels.com/es-es/foto/comida-pizza-mano-tomando-7886598/',
    stock: 20,
    description: 'Pizza mozzarella de 8 porciones con el mejor queso'},
{
    id: '3',
    name:'fugazeta',
    price: '900',
    category:'pizza',
    img: 'https://www.pexels.com/es-es/foto/pizza-de-queso-2762942/',
    stock: 20,
    description: 'Pizza mozzarella de 8 porciones con el mejor queso'
}
]

export const getProducts = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(products)
        },3000)
    })
}