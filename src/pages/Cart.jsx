import { useEffect } from "react";
import { useCartContext } from "../state/Cart.context";
import { FaTrashAlt } from "react-icons/fa";

export const Cart = () => {

    const { cart, cleanCart, getTotalPrice, getCartCant, removeProduct } = useCartContext();

    useEffect(() => { }, [cart])

    return (
        // <div>
        //     <span>Total {getTotalPrice().toLocaleString("es-CO")}</span>
        // </div>

            <div className='container_cart'>
            {cart.map((item) => (
                <div className='cart_products'>
                    <div className='cart_product' key={item.id}>
                        <img className='cart_product_img' src={item.imagen} />
                        <div className='cart_product_title'>
                            <small className='small'>Titulo</small>
                            <h3>{item.titulo}</h3>
                        </div>
                        <div className='cart_product_cant'>
                            <small className='small'>Cantidad</small>
                            <p style={{fontWeight: 'bold'}}>{item.cant}</p>
                        </div>
                        <div className='cart_product_price'>
                            <small className='small'>Precio</small>
                            <p style={{fontWeight: 'bold'}}>${item.precio}</p>
                        </div>
                        <div className='cart_product_subtotal'>
                            <small className='small'>Subtotal</small>
                            <p style={{fontWeight: 'bold'}}>${item.cant * item.precio}</p>
                        </div>
                        <button className='cart_product_delete' onClick={() => removeProduct(item.id)}><FaTrashAlt /></button>
                    </div>
                </div>
            ))}

            <div className='cart_actions'>
                <div className='cart_actions_left'>
                    <button className='cart_actions_clean' onClick={cleanCart}>Vaciar Carrito</button>
                </div>
                <div className='cart_actions_right'>
                    <div className='cart_actions_total'>
                        <p>Total:</p>
                        <p>${getTotalPrice().toLocaleString('es-CO', {
                            maximumFractionDigits: 2,
                            miniumFractionDigits: 2
                        })}
                        </p>
                    </div>
                    <button className='cart_actions_buy'>Comprar Ahora</button>
                </div>
            </div>
        </div>

        
    )
}

