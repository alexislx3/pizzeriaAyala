import { useEffect, useState } from "react"
import { getProductsById } from "../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
const ItemDetailContainer = () => {
    const [product, setProducts] = useState()

    const params = useParams()
    
    useEffect(() =>{
        getProductsById(params.productId).then(response => {

            setProducts(response)
        })

    },[])

    return (
        <>
        <h1>detalle del producto</h1>
        <ItemDetail {... product}/>
        </>
    )
}

export default ItemDetailContainer