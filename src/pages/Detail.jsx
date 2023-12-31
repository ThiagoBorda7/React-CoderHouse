import { useCallback, useEffect, useState } from "react"
import { ItemCount } from "../components/ItemCount/ItemCount"
import { getZapato } from "../lib/zapatos.requests";
import { useNavigate, useParams } from "react-router-dom";
import { useCartContext } from "../state/Cart.context";
import { Loader } from "../components/Loader/Loader";

export const Detail = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [zapato, setZapato] = useState({});

    const { addProduct, itemInCart} = useCartContext();

    //Talles

    const [selectSizes, setSelectSizes] = useState({
        activeObject: null,
        sizes:[{id: 1, talla: "36"}, {id: 2, talla: "37"}, {id: 3, talla: "38"}, {id: 4, talla: "39"}, {id: 5,talla: "40"}]
    });

    function toggleActive(idx) {
        setSelectSizes({ ...selectSizes, activeObject: selectSizes.sizes[idx] });
    }

    function toggleActiveStyles(idx) {
        if (selectSizes.sizes[idx] === selectSizes.activeObject){
            return 'item_size active_item'
        }else {
            return 'item_size inactive'
        }
    }

    useEffect(() => {
        getZapato(id).then(res => {
            if(!res) return navigate('/');
                setZapato(res)
            })
    }, [])
    
    const handleAdd = useCallback((cant)=> {
        addProduct(zapato, cant);
    },[addProduct, zapato]);

    if (!Object.keys(zapato).length) return <Loader />

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
                        <div className='card_price'>${(zapato.precio || 0).toLocaleString ('es-AR', {
                            minumumFractionDigits: 2,
                            maximumFractionDigits: 2
                        }
                        )}
                        </div>
                    </div>
                    <div className='card_description'>
                        <h4 className='title_description'>Descripción</h4>
                        <p>{zapato.descripcion}</p>
                    </div>
                    <div>
                        <h4 className='title_size'>Talles</h4>
                    </div>
                    <div className='card_size'>
                    
                        {selectSizes.sizes.map((elements, idx) => (
                                <div key={idx} className={toggleActiveStyles(idx)} onClick={()=>{toggleActive(idx)}}>
                                    <span style={{display: 'flex', justifyContent: 'center', padding: '10px', fontSize: '20px'}}>{selectSizes.sizes[idx].talla}</span>
                                </div>
                        ))};

                    </div>
                    <div className='card_color'>
                        <h4 className='title_color'>Color</h4>
                        <span className='color'>Cognac</span>
                    </div>
                    <div className='card_cant'>
                        <h4 className='title_cant'>Cantidad</h4>
                        <ItemCount stock={zapato.stock - (itemInCart?.(id)?.cant || 0)} onAdd={handleAdd} />
                    </div>
                </div>
            </div>
        </div>
    )
}