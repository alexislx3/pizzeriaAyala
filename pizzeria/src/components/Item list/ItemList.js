import Items from "../items/items"
import './itemList.css'
const ItemsList = ({products}) => {
    return(
        <ul class = "ListaProcuto">
        <li>{products.map(prod => <Items key={prod.id} {...prod}/>)}</li>
       </ul>
    )
}
export default ItemsList