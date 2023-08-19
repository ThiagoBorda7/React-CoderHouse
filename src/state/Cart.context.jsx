import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = ()  => useContext(CartContext);

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    //AÑADIR

    const addProduct = (item, cant) => {

        const element = cart.find((product) => product.id === item.id);

        if (!element) return setCart([...cart, {...item, cant}]);
        

        if (element) {
            const newCart = cart.map((product) => 
                product.id === item.id ? {...product, cant: product.cant + cant} : product
            );
            setCart(newCart);
        }
    };

    //ELIMINAR 

    const removeProduct = (id) => {
        const newCart = cart.filter((product) => product.id !== id );
        setCart(newCart);
    }

    //LIMPIAR

    const cleanCart = () => setCart([]);

    //TOTAL ITEMS

    const getCartCant = () => cart.reduce((acc, item) => acc + item.cant, 0);

    //TOTAL PRECIO

    const getTotalPrice = () => cart.reduce((acc, item) => acc + item.precio * item.cant, 0)

    const value = {
        cart,
        addProduct,
        getCartCant,
        getTotalPrice,
        removeProduct,
        cleanCart
    };

    return (
    <CartContext.Provider value={value} displayName="CartContext">
        {children}
    </CartContext.Provider>
    );
};