const Items = ({ name,img,price }) => {
    return(
        <li>
            {}
            {price}
            <img src={img} alt={name}/>
            {name}
        </li>
    )
}
export default Items