import { useState, useEffect } from "react";
import { ItemListContainer } from "../components";


export const Home = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() =>{
        getZapatos()
            .then(res => setProductos(res))

    }, []);


    return (
        <div>
            Pagina Principal
            <div className='container'>
                <ItemListContainer productos = {productos} />
            </div>
        </div>
    );
};