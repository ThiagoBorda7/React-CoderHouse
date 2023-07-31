import { useState } from "react";
import "./ItemCount.css";

export const ItemCount = ({ stock, onAdd }) => {

    const [count, setCount] = useState(0);

    const handleSum = () => {
        if( stock > count ) setCount(count + 1)
    }

    const handleSub = () => {
        if (count > 1 ) setCount(count - 1)
    }

    return (
        <div className='container_contador'>
            <div className='contador'>
                <button onClick={() => handleSub()}>-</button>
                <span>{count}</span>
                <button onClick={() => handleSum()}>+</button>
            </div>
            <button className='button_carrito' disabled={!stock} onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
        
    )
}