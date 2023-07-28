import "./Item.css";

export const Item = ({
    imagen,
    titulo,
    precio
}) => {

    return (
        <div className='container_productos'>
            <div className='producto'>
                <img className= 'producto_imagen' src={imagen} />
                <div className='producto_info'>
                    <h3 className='producto_titulo'>{titulo}</h3>
                    <p className='producto_precio'>${precio}</p>
                </div>
            </div>
        </div>
    );
};