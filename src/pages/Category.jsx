import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getZapatos } from "../lib/zapatos.requests";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";

export const Category = () => {

    const {id} = useParams();
    const [products, setProducts] = useState([]);
    const [IsLoading, setIsLoading] = useState(true);

    useEffect(()=>{

        getZapatos(id)
            .then(res => {
                setIsLoading(false)
                setProducts(res)})
    },[id]);

    return (

    <div>
        <div>
            <h5>{IsLoading ? "Cargando ..." : "Listo"}</h5> 
            <ItemListContainer products={products} />
        </div>
    </div>

    );
}