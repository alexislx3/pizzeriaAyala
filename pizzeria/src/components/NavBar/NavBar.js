import './NavBar.css'
import {Link} from 'react-router-dom'
import CardWidget from '../CartWidget/CartWidget'


const NavBar = ()=>{
    return (
        <nav className='barraNavegacion'>
            <ul className='navBar'>
                
                <li className='listNav'><Link to='/'>Pizzeria</Link></li>
                <li className='listNav'><Link to='/category/pizza'>Pizza</Link></li>
                <li className='listNav'><Link to='/category/Hamburguesa'>Hamburgesa</Link></li>
                <li className='listNav'><Link to='/category/Papas Fritas'>Papas Fritas</Link></li>
                <li className='listNav'><Link to='/category/bebidas'>Bebidas</Link></li>
                <CardWidget/>
            </ul>
        </nav>
        
    )
}
export default NavBar;