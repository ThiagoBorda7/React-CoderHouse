import { useState, useEffect } from "react"
import { getZapatos } from "../lib/zapatos.requests";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { Carrousel } from "../components/Carrousel/Carrousel";

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
        <div>
            <Carrousel />
            <h5>{IsLoading ? "Cargando ..." : "Listo"}</h5> 
            <ItemListContainer products={products} />
        </div>
    </div>

    );
}