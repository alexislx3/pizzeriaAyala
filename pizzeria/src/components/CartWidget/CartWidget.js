import { useContext } from "react"
import CartContext from "../../Context/CartContext"


const CardWidget = () => {

    const {getCartQuantity} = useContext(CartContext)
    const totalQuantity = getCartQuantity ()

    return(
        <div>
            <img src="img" alt=""/>
            {totalQuantity}
        </div>
    );
}
export default CardWidget