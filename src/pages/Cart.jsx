import { useEffect } from "react";
import { useCartContext } from "../state/Cart.context"

export const Cart = () => {

    const {cart, cleanCart, getTotalPrice, removeProduct} = useCartContext();

    useEffect(() => {},[cart])

    return (
        // <div>
        //     <span>Total {getTotalPrice().toLocaleString("es-CO")}</span>
        // </div>
        <div className='main'>
            <h2 className='title_cart'>Carrito</h2>

            <div className='container_cart'>
                <p className='cart_clean'>Tu carrito esta vacio</p>
            </div>

            <div className='products_cart'>
                {cart.map((item) => (
                    <div key={item.id} onClick={()=> removeProduct(item.id)}>Nombre {item.titulo}</div>
                ))}
            </div>

            <div className='cart_actions'>
                <div className='cart_actions_left'>
                    <button onClick={()=> cleanCart([])}>Vaciar Carrito</button>
                </div>
                <div className='cart_actions_right'>
                    <div className='cart_actions_total'>
                        <p>Total:</p>
                        <p>{getTotalPrice().toLocaleString("es-CO")}</p>
                    </div>
                    <button className='cart_actions_buy'>Comprar</button>
                </div>
            </div>
        </div>
    )
}