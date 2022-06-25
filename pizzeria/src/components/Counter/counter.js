 import { useState } from "react"

const Counter = ({onAdd,stock, initial = 0}) =>{
    const [count, setCount] = useState (initial)

    const increment = () => {
         if (count < stock) setCount( count + 1)
    }

    const decrement = () => {
         if (count > 0) setCount(count - 1)
    }

return (
    <div>
        
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <button>Agregar al carrito</button>
        <h2>{count}</h2>
    </div>
   )
}


export default Counter  