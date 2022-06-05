/* import './ItemListConteiner.css' */
import { useEffect, useState } from "react";
import { getProducts } from "../asyncmock";
import ItemsList from "../Item list/ItemList";

const ItemListConteiner = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
    });
  }, []);

  return (
    <div>
      <h1>{props.greeting}</h1>
      <ItemsList products={products}/>

    </div>
  );
};

export default ItemListConteiner;
