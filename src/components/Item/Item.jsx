import "./Item.css";

export const Item = () => {
    return (
        <div className='container_productos'>
            <div className='producto'>
                <img className= 'producto_imagen' src="https://flaviashoemaker.com/cdn/shop/products/IMG-20220820-WA0011.jpg" />
                <div className='producto_info'>
                    <h3 className='producto_titulo'>Botin Tanzania Cognac</h3>
                    <p className='producto_precio'>$1000</p>
                </div>
            </div>
        </div>
    );
};