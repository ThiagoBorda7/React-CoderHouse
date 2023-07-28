import { useState, useEffect } from "react"
import { getZapatos } from "../lib/zapatos.requests";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";

export const Home = () => {

    const [products, setProducts] = useState([]);
    const [IsLoading, setIsLoading] = useState(true);

    useEffect(()=>{

        getZapatos()
            .then(res => {
                setIsLoading(false)
                setProducts(res)})
    },[]);

    return (

    <div>
        <h2 style={{textAlign: 'center', margin: '20px 0'}}>Pagina Principal</h2>
        <div className='container'>
            <h5>{IsLoading ? "Cargando..." : "Listo"}</h5> 
            <ItemListContainer products={products} />
        </div>
    </div>

    );
}