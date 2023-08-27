import { Item } from "../Item/Item";
import "./ItemListContainer.css";

export const ItemListContainer = ({ products, loading = false }) => (

    <div className='item_container'>
        {loading ? (
            <>
                <div className="skeleton">
                    <div className="skeleton__img"></div>
                </div>
                <div className="skeleton">
                    <div className="skeleton__img"></div>
                </div>
                <div className="skeleton">
                    <div className="skeleton__img"></div>
                </div>
            </>
        ) : (
            products.map((product) => (
                <Item
                    key={product.id}
                    id={product.id}
                    imagen={product.imagen}
                    titulo={product.titulo}
                    precio={product.precio}
                />
            ))
        )}
    </div >
);


