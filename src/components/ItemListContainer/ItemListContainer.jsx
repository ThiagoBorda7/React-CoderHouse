import { Item } from "../Item/Item";
import "./ItemListContainer.css";

export const ItemListContainer = ({ products }) => (

    <div className='item_container'>
        {products.map((product) => (
            <Item
                key={product.id}
                id={product.id} 
                imagen={product.imagen} 
                titulo={product.titulo} 
                precio={product.precio} 
            />
        ))}
    </div>
);


