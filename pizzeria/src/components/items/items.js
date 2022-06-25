import './items.css'
import {Link} from 'react-router-dom'
/* import { Context } from '../../App'
import { useContext } from 'react' */
const Items = ({id,name,img,price }) => {
   

    return(
        <div className= 'container'>
        <div className= 'card'>
           <article className='cardCaract'>
            

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