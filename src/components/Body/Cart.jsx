import { useSelector } from "react-redux";

const Cart = () => {
    const cart = useSelector((store) => store.meal.item);
    const user = useSelector((store) => store.user.userDetails)
    console.log(user);
    return (
        <div className="order-summary">
            {
                (cart === "") ? <h1>No Order Placed</h1> : 
                <div>    
                    <h1>Successfully Purchased</h1>
                <h1> Hi, {user.firstName} {user.lastName}</h1>
                <p>Your Order "{cart}" wil deliver shortly to the below mentioned address </p>
                <p>{user?.address}</p>
            </div>            
                   
            }
                        
        </div>
    )
}

export default Cart;