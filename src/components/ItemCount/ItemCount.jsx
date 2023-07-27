import { useState } from "react";

export const ItemCount = ({ stock, onAdd }) => {

    const [count, setCount] = useState(0);

    const handleSum = () => {
        if( stock > count ) setCount(count + 1)
    }

    const handleSub = () => {
        if (count > 1 ) setCount(count - 1)
    }

    return (
        <div style={{textAlign: 'center', margin: '40px 0'}}>
            <div>
                <button onClick={() => handleSub()}>-</button>
                <span style={{margin: '0 15px'}}>{count}</span>
                <button onClick={() => handleSum()}>+</button>
                <button style={{marginLeft: '15px'}} disabled = {!stock} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}