import { useEffect } from "react";
import { useCartContext } from "../state/Cart.context";
import { FaTrashAlt } from "react-icons/fa";
import { BsEmojiFrown } from "react-icons/bs";

export const Cart = () => {

    const { cart, cleanCart, getTotalPrice, removeProduct } = useCartContext();

    useEffect(() => { }, [cart])

    return (
        <div className='container_cart'>
            {cart.length ?
            <>
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
                            <p style={{ fontWeight: 'bold' }}>{item.cant}</p>
                        </div>
                        <div className='cart_product_price'>
                            <small className='small'>Precio</small>
                            <p style={{ fontWeight: 'bold' }}>${item.precio}</p>
                        </div>
                        <div className='cart_product_subtotal'>
                            <small className='small'>Subtotal</small>
                            <p style={{ fontWeight: 'bold' }}>${item.cant * item.precio}</p>
                        </div>
                        <button className='cart_product_delete' onClick={() => removeProduct(item.id)}>  <FaTrashAlt /></button>
                    </div>
                </div>
            ))}
            </> : <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '200px'}}><h1>No hay productos en el carrito <BsEmojiFrown  /></h1></div>}

            <div className='cart_actions'>
                {cart.length ?
                <>
                <div className='cart_actions_left'>
                    <button className='cart_actions_clean' onClick={cleanCart}>Vaciar Carrito</button>
                </div>
                <div className='cart_actions_right'>
                    <div className='cart_actions_total'>
                        <p style={{fontSize: '1.2rem', fontWeight: 'bold'}}>Total:</p>
                        <p style={{fontSize: '1.2rem', fontWeight: '500'}}>${getTotalPrice.toLocaleString('es-CO', {
                            maximumFractionDigits: 2,
                            miniumFractionDigits: 2
                        })}
                        </p>
                    </div>
                    <button className='cart_actions_buy'>Comprar Ahora</button>
                </div></> : ''}
            </div>

        </div>
    )
}

