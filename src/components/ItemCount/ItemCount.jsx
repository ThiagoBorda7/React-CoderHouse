import { useState } from "react";
import "./ItemCount.css";

export const ItemCount = ({ stock = 0, onAdd }) => {

    const [count, setCount] = useState(1);

    const handleSum = () => {
        if( stock > count ) setCount(count + 1)
    }

    const handleSub = () => {
        if (count > 1 ) setCount(count - 1)
    }

    return (
        <div className='container_contador'>
            {stock ? (
            <>
            <div className='contador'>
                <button onClick={() => handleSub()}>-</button>
                <span style={{margin:'0 10px', fontSize:'18px'}}>{count}</span>
                <button onClick={() => handleSum()}>+</button>
            </div>
            <button className='button_carrito' disabled={!stock} onClick={() => {onAdd(count); setCount(1);}}>Agregar al carrito </button>
            </>
            ) : <h5>Tienes todo en el carrito</h5>}
        </div>
        
    )
}