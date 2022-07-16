import './ItemsDetail.css';
import { useState } from 'react';
import { useContext } from 'react';
import CartContext from '../../Context/CartContext';
/* import Counter from '../Counter/Counter'; */
import NotificationContext from '../../Notification/Notification';

const Counter = ({onAdd,stock, initial = 0}) =>{
    const [count, setCount] = useState (initial)

    const increment = () => {
           if (count < stock)   setCount( count + 1)
    }

    const decrement = () => {
         if (count > 0)  setCount(count - 1)
    }

return (
    <div>
        
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <button onClick ={() => onAdd (count)}>Agregar al carrito</button>
        <h2>{count}</h2>
    </div>
   )
}



const ItemDetail = ({id, name, stock, img, category, description,price}) => {
    
    const {addItem} = useContext (CartContext)

    const setNotification =useContext (NotificationContext)

    const handleOnAdd = (quantity) =>{
       setNotification('success', `Se agregaron ${quantity} ${name}`,2)
       addItem ({id,name,price,quantity}) 
    }

    return(
        <div className= 'container'>
        <div className= 'card'>
           <article className='cardCaract'>
            
            <h3>{name}</h3>

            <img className='imgDetail' src={img} alt={name}/>
           
            <h3>Categoria:{category}</h3>

            <h3> Descripción: {description}</h3>

            <h3> Stock: {stock}</h3>

            <h4> Precio: $ {price}</h4>
            
            <Counter onAdd={(handleOnAdd)} stock={stock}/>
{/* 
             <Counter/> */}
             
            </article>
        </div>
        </div>

    )
}

export default ItemDetail