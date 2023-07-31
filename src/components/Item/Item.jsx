import { useNavigate } from "react-router-dom";
import "./Item.css";

export const Item = ({
    imagen,
    titulo,
    id,
    precio
}) => {

    const navigate = useNavigate();

    return (
        <div className='container_productos' onClick={() => navigate(`/item/${id}`)}>
            <div className='producto'>
                <img className= 'producto_imagen' src={imagen} />
            </div>
            <div className='producto_info'>
                <h3 className='producto_titulo'>{titulo}</h3>
                <p className='producto_precio'>${precio}</p>
            </div>
        </div>
    );
};