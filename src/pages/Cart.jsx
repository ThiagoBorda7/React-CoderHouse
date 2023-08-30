import { useState } from "react";
import { useCartContext } from "../state/Cart.context";
import { FaTrashAlt } from "react-icons/fa";
import { BsEmojiFrown } from "react-icons/bs";
import { addOrder } from "../lib/orders.requests";
import { updateLoteZapatos } from "../lib/zapatos.requests";

export const Cart = () => {

    const { cart, cleanCart, getTotalPrice, removeProduct } = useCartContext();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [email2, setEmail2] = useState('');
    const [phone, setPhone] = useState('');

    const createOrder = async () => {

        const items = cart.map(({ id, titulo, cant, precio }) => ({
            id,
            titulo,
            cant,
            precio,
        }));
        const order = {
            datos: { name, email, phone },
            items,
            total: getTotalPrice,
        };

        const id = await addOrder(order);

        console.log(id);

        await updateLoteZapatos(items);

        cleanCart();
    }

    return (
        <div className='container_cart'>
            {cart.length ?
                <>
                    {cart.map((item) => (
                        <div className='cart_products' key={item.id}>
                            <div className='cart_product'>
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
                                    <p style={{ fontWeight: 'bold' }}>${item.precio.toLocaleString('es-AR', {
                                        maximumFractionDigits: 2,
                                        miniumFractionDigits: 2
                                    })}</p>
                                </div>
                                <div className='cart_product_subtotal'>
                                    <small className='small'>Subtotal</small>
                                    <p style={{ fontWeight: 'bold' }}>${getTotalPrice.toLocaleString('es-AR', {
                                        maximumFractionDigits: 2,
                                        miniumFractionDigits: 2
                                    })}</p>
                                </div>
                                <button className='cart_product_delete' onClick={() => removeProduct(item.id)}>  <FaTrashAlt /></button>
                            </div>
                        </div>
                    ))}
                    <div className='cart_actions'>
                        <div className='cart_actions_left'>
                            <button className='cart_actions_clean' onClick={cleanCart}>Vaciar Carrito</button>
                        </div>
                        <div className='cart_actions_right'>
                            <div className='cart_actions_total'>
                                <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Total:</p>
                                <p style={{ fontSize: '1.2rem', fontWeight: '500' }}>${getTotalPrice.toLocaleString('es-AR', {
                                    maximumFractionDigits: 2,
                                    miniumFractionDigits: 2
                                })}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='cart_form'>
                        <div className="center">
                            <h1>Bienvenidos!</h1>
                            <form>
                                <div className="inputbox">
                                    <input type="email" required="required" placeholder="Ingrese su nombre" onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="inputbox">
                                    <input type="email" required="required" placeholder="Ingrese su email" onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="inputbox">
                                    <input type="email" required="required" placeholder="Confirme su email" onChange={(e) => setEmail2(e.target.value)} />
                                </div>
                                <div className="inputbox">
                                    <input type="tel" required="required" placeholder="Ingrese su teléfono" onChange={(e) => setPhone(e.target.value)} />
                                </div>
                                <div className="inputbox">
                                    <input type="button" value="Comprar Ahora" onClick={createOrder} />
                                </div>
                            </form>
                        </div>
                    </div>
                </> : <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '200px' }}><h1>No hay productos en el carrito <BsEmojiFrown /></h1></div>}
        </div>
    )
}



