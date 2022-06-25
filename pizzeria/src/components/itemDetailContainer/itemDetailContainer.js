import { useEffect, useState } from "react"
import { getProductsById } from "../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
    const[product, setProduct] = useState()

    const {productId} = useParams()

    useEffect(() => {
 getProductsById(productId).then(response =>{
    setProduct(response)

 })
    }, [])

    return(
        <>
        <h1> detalles del producto</h1>
        <ItemDetail{...product}  />
        </>
    )
}

export default ItemDetailContainer