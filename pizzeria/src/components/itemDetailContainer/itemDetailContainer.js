import { useEffect, useState } from "react"
import { getProductsById } from "../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import {useParams} from 'react-router-dom'
import { db } from "../../service-firebas"
import { getDoc, doc } from "firebase/firestore"


const ItemDetailContainer = () => {
    const[product, setProduct] = useState()
    const[loading, setLoading] = useState(true)

    const {productId} = useParams()

    useEffect(() => {

        const docRef = doc(db, 'products', productId)
        getDoc(docRef).then(response =>{
            console.log(response)
            const productFormatted = {id: doc.id, ...doc.data()}
            setProduct(productFormatted)
        }).catch( error => {
            console.log(error)
        }).finally (() => {
            setLoading(false)
        })
/*  getProductsById(productId).then(response =>{
    setProduct(response)

 }) */
    }, [productId])
    if(loading)
    return <h1>Cargando...</h1>

    return(
        <>
        <h1> detalles del producto</h1>
        <ItemDetail{...product}  />
        </>
    )
}

export default ItemDetailContainer