import './items.css'
import {Link} from 'react-router-dom'
const Items = ({id,name,img,price }) => {
    return(
        <div class= "container">
        <div class= "card">
           <article class="cardCaract">
            

            <img src={img} alt={name}/>
           
            <h4> Precio: $ {price}</h4>
           
            <h3>{name}</h3>

             <Link to={`/detail/${id}`} className= 'option'>Ver detalle</Link> 
            
            </article>
        </div>
        </div>
    )
}
export default Items