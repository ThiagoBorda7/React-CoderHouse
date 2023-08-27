import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getZapatos } from "../lib/zapatos.requests";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { Loader } from "../components/Loader/Loader";

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
            <ItemListContainer products={products} loading={IsLoading} />
        </div>
    </div>

    );
}