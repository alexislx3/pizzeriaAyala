import './NavBar.css'
import {Link} from 'react-router-dom'
const NavBar = ()=>{
    return (
        <nav class = "barraNavegacion">
            <ul class = "navBar">
                
                <li class= "listNav"><Link to='/'>Pizzeria</Link></li>
                <li class= "listNav"><Link to='/category/pizza'>Pizza</Link></li>
                <li class= "listNav"><Link to='/category/Hamburguesa'>Hamburgesa</Link></li>
                <li class= "listNav"><Link to='/category/Papas Fritas'>Papas Fritas</Link></li>
                <li class= "listNav"><Link to='/category/bebidas'>Bebidas</Link></li>
                <li class= "listNav"><Link to='/category/'>Carrito</Link></li>
            </ul>
        </nav>
        
    )
}
export default NavBar;