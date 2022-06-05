import Items from "../items/items"

const ItemsList = ({products}) => {
    return(
        <ul>
        {products.map(prod => <Items key={prod.id} {...prod}/>)}
       </ul>
    )
}
export default ItemsList