import { useEffect, useState } from "react"
import { ItemCount } from "../components/ItemCount/ItemCount"
import { getZapato } from "../lib/zapatos.requests";
import { useParams } from "react-router-dom";

export const Detail = () => {

    const {id} = useParams();
    const [zapato, setZapato] = useState({});

    useEffect(() => {
        getZapato(+id)
            .then(res => {
                setZapato(res)
            })
    }, [])

    if (!Object.keys(zapato).length) return

    return (
        <div className='container_card'>
            <div className='card'>
                <div className='card_img'>
                    <img className='img' src={zapato.imagen} />
                </div>
                <div className='card_details'>
                    <div className='card-title'>
                        <h3 className='title'>{zapato.titulo}</h3>
                        <small className='sub_title'>Zapato de Mujer</small>
                    </div>
                    <div className='card_buy'>
                        <div className='card_price'>${zapato.precio}</div>
                    </div>
                    <div className='card_description'>
                        <h4 className='title_description'>Descripción</h4>
                        <p>{zapato.descripcion}</p>
                    </div>
                    <div className='card_size'>
                        <h4 className='title_size'>Talles</h4>
                        <ul className='list_size'>
                            <li className='item_size'>36</li>
                            <li className='item_size'>37</li>
                            <li className='item_size'>38</li>
                            <li className='item_size'>39</li>
                            <li className='item_size'>40</li>
                        </ul>
                    </div>
                    <div className='card_color'>
                        <h4 className='title_color'>Color</h4>
                        <span className='color'>Marrón</span>
                    </div>
                    <div className='card_cant'>
                        <h4 className='title_cant'>Cantidad</h4>
                        <ItemCount stock={zapato.stock} onAdd={()=> alert("Comprados")} />
                    </div>
                </div>
            </div>
        </div>
    )
}