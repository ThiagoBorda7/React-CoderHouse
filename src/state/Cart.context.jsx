import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = ()  => useContext(CartContext);

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const itemInCart = (id) => cart.find((product) => product.id === id);

    //AÑADIR

    const addProduct = (item, cant) => {

        const element = itemInCart(item.id);

        if (!element) return setCart([...cart, {...item, cant}]);

        const newCart = cart.map((product) => 
            product.id === item.id ? {...product, cant: product.cant + cant} : product
        );
        setCart(newCart);
    };

    //ELIMINAR 

    const removeProduct = (id) => {
        const newCart = cart.filter((product) => product.id !== id );
        setCart(newCart);
    }

    //LIMPIAR

    const cleanCart = () => setCart([]);

    //TOTAL ITEMS

    const getCartCant = useMemo(() => cart.reduce((acc, item) => acc + item.cant, 0),[cart]);

    //TOTAL PRECIO

    const getTotalPrice = useMemo(() => cart.reduce((acc, item) => acc + item.precio * item.cant, 0),[cart]);

    const value = {
        cart,
        addProduct,
        getCartCant,
        getTotalPrice,
        removeProduct,
        cleanCart,
        itemInCart
    };

    return (
    <CartContext.Provider value={value} displayName="CartContext">
        {children}
    </CartContext.Provider>
    );
};