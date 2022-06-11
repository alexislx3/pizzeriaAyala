import  {link} from 'react-router-dom'
const Items = ({image, name, price, }) => {
    return(
        <li>
            <img src={image} alt={name}/>
            
            {name}
            
            {price}
            
{/*             <link to={'/detail/${id}'} classNmae='option'>
            ver detalles
            </link> */}
        </li>
    )
}
export default Items