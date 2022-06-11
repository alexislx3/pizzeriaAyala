/* import './ItemListConteiner.css' */
import { useEffect, useState } from "react";
import { getProducts } from "../asyncmock";
import ItemsList from "../Item list/ItemList";
import { useParams } from "react-router-dom";

const ItemListConteiner = (props) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState (true)
 
  const {categoryId} = useParams()


  useEffect(() => {
setLoading(true)

    if (!categoryId){    
       getProducts().then((prods) => {
      setProducts(prods)
    }).catch(error => {console.log(error)
    
    }).finally(() => { 
      setLoading(false)
    })

    } else{
      getProducts(categoryId).then((prods) => {
        setProducts(prods)
      }).catch(error => {console.log(error)
      
      }).finally(() => { 
        setLoading(false)
      })
    }

  }, [categoryId])

  if(loading){
    return <h1>Cargando...</h1>
  }

  return (
    <div>
      <h1>{props.greeting}</h1>
      <ItemsList products={products}/>

    </div>
  );
};

export default ItemListConteiner;
